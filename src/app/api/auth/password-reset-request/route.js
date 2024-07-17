import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import crypto from "crypto";
import mysql from "mysql2/promise";

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Generate a unique token
    const token = crypto.randomBytes(20).toString("hex");
    const expiry = Date.now() + 3600000; // 1 hour from now

    // Connect to MySQL database
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // Update the user's reset token and expiry
    await connection.execute(
      `UPDATE wp_users SET reset_token = ?, reset_expiry = ? WHERE user_email = ?`,
      [token, expiry, email]
    );

    await connection.end();

    // Configure nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail email
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Set up email data for the client
    const mailOptionsClient = {
      from: '"The Modellist Limited" <noreply@modellistdigital.com>',
      to: email,
      subject: "Reset password request",
      html: `
        <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif">
          <thead>
            <tr>
              <td>
                <img style="width: 100%" src="https://cms.modellistdigital.com/wp-content/uploads/2024/07/Frame-1.png" />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 40px">
                <h2 style="text-align: left; font-size: 20px;color: #202020;">Dear ${email},</h2>
                <p style="text-align: left; font-size: 16px;color: #202020;"> Please click the following link to reset your password: </p>
                <a style="text-align: center; display: block; width: 200px; padding:15px;background-color: #161616;
                            border-radius: 50px; font-size: 16px;color: #ffffff;text-decoration: none;" href="http://modellistdigital.com/set-password?email=${email}&token=${token}">Reset password</a>
                <h2 style="text-align: left; font-size: 20px;color: #202020;"> Best, <br /> The Modellist Digital Team </h2>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <td style="padding: 24px 40px; background: #0C0C0C;background-image:url(https://cms.modellistdigital.com/wp-content/uploads/2024/07/Group-80513.png);text-decoration: none;
                    color: #fff;
                    font-size: 20px;
                    text-align: left;
                    display: block;
                    font-weight: 600;"> Thanks for using <a href="https://modellistdigital.com" style="color:#fff;text-decoration: none;"> modellistdigital.com </a>
            </td>
          </tfoot>
        </table>
      `,
    };

    // Send email to the client
    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({
      message: "COULD NOT SEND MESSAGE",
      error: error.message,
    });
  }
}

export async function GET() {
  return new Response(JSON.stringify({ message: "Method not allowed" }), {
    status: 405,
    headers: { "Content-Type": "application/json" },
  });
}
