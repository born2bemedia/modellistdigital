import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const { firstName, lastName, email, phone, service, budget, description, comment } = bodyJSON;

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
      subject: "Get Quote Form Submission",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nBudget: ${budget}\nDescription: ${description}\nMessage: ${comment}`,
    };

    // Set up email data for the client
    const mailOptionsClient = {
      from: '"The Modellist Limited" <noreply@modellistdigital.com>', // Sender address
      to: email, // Client's email
      subject: "Your quote request has been received",
      html: `
        <p>Dear ${firstName} ${lastName},</p>
        <p>Thank you for your interest in our services! We have successfully received your quote request, and our team is currently reviewing the details.
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
