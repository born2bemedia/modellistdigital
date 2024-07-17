import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const { firstName, lastName, email, phone, comment } = bodyJSON;

    // Configure nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail email
        pass: process.env.EMAIL_PASS, // Your Gmail password or app password
      },
      tls: {
        rejectUnauthorized: false, // This bypasses the certificate validation
      },
    });

    // Set up email data for the recipient
    const mailOptionsRecipient = {
      from: '"The Modellist Limited" <noreply@modellistdigital.com>', // Sender address
      to: "noreply@modellistdigital.com", // Change to your recipient's email
      subject: "Contact Form Submission",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${comment}`,
    };

    // Set up email data for the client
    const mailOptionsClient = {
      from: '"The Modellist Limited" <noreply@modellistdigital.com>', // Sender address
      to: email, // Client's email
      subject: "Request received - We're here to help!",
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
        <h2 style="text-align: left; font-size: 20px;color:#202020;">Dear ${firstName} ${lastName},</h2>
        <p style="text-align: left; font-size: 16px;color:#202020;"> Thank you for reaching out to us! We have received your request and our team is already on it. <br>
          <br> You can expect a response shortly as we work to address your inquiry. <br> If you have any additional questions in the meantime, feel free to contact us at info@modellistdigital.com.
        </p>
        <h2 style="text-align: left; font-size: 20px;color:#202020;"> Best, <br /> The Modellist Digital Team </h2>
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

    // Send email to the recipient
    await transporter.sendMail(mailOptionsRecipient);
    // Send email to the client
    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
