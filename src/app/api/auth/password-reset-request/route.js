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
        <p>Dear ${email},</p>
        <p>Please click the following link to reset your password:</p>
        <a href="http://localhost:3000/set-password?email=${email}&token=${token}">Set new password</a>
        <h2>Best, The Modellist Digital Team</h2>
      `,
    };

    // Send email to the client
    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE", error: error.message });
  }
}

export async function GET() {
  return new Response(JSON.stringify({ message: "Method not allowed" }), {
    status: 405,
    headers: { "Content-Type": "application/json" },
  });
}
