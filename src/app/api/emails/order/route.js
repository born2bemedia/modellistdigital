import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const { firstName, lastName, email, phone, service, budget, ideaDescription, deadline, targetAudience, platform, marketingGoal, comment } = bodyJSON;

    // Configure nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "noreply@modellistdigital.com", // Your Gmail email
        pass: "npd8mpj.ygm7cfb2QFV", // Your Gmail password or app password
      },
      tls: {
        rejectUnauthorized: false, // This bypasses the certificate validation
      },
    });

    // Set up email data for the recipient
    const mailOptionsRecipient = {
      from: '"The Modellist Limited" <noreply@modellistdigital.com>', // Sender address
      to: "noreply@modellistdigital.com", // Change to your recipient's email
      subject: "Order Form Submission",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nBudget: ${budget}\nIdea Description: ${ideaDescription}\nDeadline: ${deadline}\nTarget Audience: ${targetAudience}\nPlatform: ${platform}\nMarketing Goal: ${marketingGoal}\nMessage: ${comment}`,
    };

    // Set up email data for the client
    const mailOptionsClient = {
      from: '"The Modellist Limited" <noreply@modellistdigital.com>', // Sender address
      to: email, // Client's email
      subject: "Your request has been received",
      html: `
        <p>Dear ${firstName} ${lastName},</p>
        <p>Thank you for your interest in our services! We have successfully received your quote request, and our team is currently reviewing the details.</p>
        <p>Service: ${service}</p>
        <p>Budget: ${budget}</p>
        <p>Idea Description: ${ideaDescription}</p>
        <p>Deadline: ${deadline}</p>
        <p>Target Audience: ${targetAudience}</p>
        <p>Platform: ${platform}</p>
        <p>Marketing Goal: ${marketingGoal}</p>
        <h2>Best,</h2>
        <h2>The Modellist Digital Team</h2>
      `,
    };

    // Send email to the recipient
    await transporter.sendMail(mailOptionsRecipient);
    // Send email to the client
    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE", error: error.message });
  }
}
