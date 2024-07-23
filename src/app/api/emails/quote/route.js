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
        <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif">
  <thead>
    <tr>
      <td>
        <img style="width: 100%" src="https://cms.modellistdigital.com/wp-content/uploads/2024/07/email-header.png" />
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 40px">
        <h2 style="text-align: left; font-size: 20px;color:#202020;">Dear ${firstName} ${lastName},</h2>
        <p style="text-align: left; font-size: 16px;color:#202020;"> Thank you for your interest in our services! We have successfully received your quote request, and our team is currently reviewing the details. </p>
        <p style="text-align: left; font-size: 16px;font-weight: 600;color:#202020;"> What Happens Next: </p>
        <ul style="margin:0;padding: 0 0 0 18px;color:#202020;">
          <li style="text-align: left; font-size: 16px;color:#202020;">You will receive a tailored quote based on your requirements shortly.</li>
          <li style="text-align: left; font-size: 16px;color:#202020;">If you have any immediate questions, please feel free to reply to this email.</li>
        </ul>
        <p style="text-align: left; font-size: 16px;color:#202020;"> We appreciate your patience! </p>
        <h2 style="text-align: left; font-size: 20px;color:#202020;"> Best, <br /> The Modellist Digital Team </h2>
      </td>
    </tr>
  </tbody>
  <tfoot >
				<td style="padding: 12px 40px;background: #0C0C0C;background-size:cover;background-image:url(https://cms.modellistdigital.com/wp-content/uploads/2024/07/Group-80513.png);">
					
					<table style="width:100%">
						
						<td style="width: 50%; padding-right: 30px">
							 <img src="https://cms.modellistdigital.com/wp-content/uploads/2024/07/logo.png" style="width:254px;">
						</td>
						<td style="width: 50%;color: #fff;font-size: 12px;">
							<ul style="margin:0;padding: 0;list-style-image: url(https://cms.modellistdigital.com/wp-content/uploads/2024/07/Ellipse-335.png);">

								<li>
									<a href="tel:+442070433795" style="color: #fff;font-size: 12px;text-decoration: none;">+442070433795</a>
								</li>
								<li>
									<a href="mailto:info@modellistdigital.com" style="color: #fff;font-size: 12px;text-decoration: none;">info@modellistdigital.com</a>
								</li>
							</ul>
						</td>

					</table>

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
