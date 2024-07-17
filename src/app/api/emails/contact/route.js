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
        <p>Dear ${firstName} ${lastName},</p>
        <p>Thank you for reaching out to us! We have received your request and our team is already on it.
</p>
        <p>You can expect a response shortly as we work to address your inquiry.</p>
        <p>If you have any additional questions in the meantime, feel free to contact us at info@modellistdigital.com.
</p>
        <h2>Best,
The Modellist Digital Team</h2>
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
