import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, service, message } = body;

    const fullName = `${firstName} ${lastName}`;

    // Validate fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields in the request body." },
        { status: 400 }
      );
    }

    const selectedService = service || "General Inquiry";
    const emailSubject = `[Website Inquiry] New Message From ${fullName}`;

    const plainText = `
============================================================
CYPRESS ENERGY - CLIENT INQUIRY
============================================================
Date: ${new Date().toISOString()}
Subject: ${emailSubject}

CLIENT PROFILE:
- Name: ${fullName}
- Email: ${email}
- Phone: ${phone || "N/A"}
- Enquiry Type: ${selectedService}

MESSAGE:
${message}
============================================================
    `.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Cypress Energy Inquiry Brief</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f7f7f7; color: #1e293b; margin: 0; padding: 20px; }
    .container { max-width: 800px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-top: 4px solid #DC5817; }
    .header { padding: 30px; background-color: #1a1a1a; text-align: left; }
    .header h1 { color: #ffffff; margin: 0; font-size: 18px; font-weight: 900; letter-spacing: 0.15em; text-transform: uppercase; }
    .header span { color: #DC5817; }
    .content { padding: 40px; }
    .section-title { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; color: #DC5817; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 20px; margin-top: 30px; }
    .grid { width: 100%; border-collapse: collapse; }
    .grid td { padding: 8px 0; vertical-align: top; font-size: 14px; }
    .grid td.label { font-weight: bold; width: 140px; color: #475569; }
    .message-box { background-color: #F8F9FA; border-left: 3px solid #DC5817; padding: 20px; font-size: 14px; line-height: 1.6; color: #334155; margin-top: 15px; white-space: pre-wrap; word-break: break-word; overflow-wrap: anywhere; max-width: 100%; overflow-x: hidden; }
    .footer { background-color: #F8F9FA; padding: 20px 40px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Cypress <span>Energy</span></h1>
    </div>
    <div class="content">
      <div style="font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 5px;">New Website Inquiry</div>
      <div style="font-size: 12px; color: #64748b;">Submitted via the contact form on ${new Date().toLocaleDateString("en-GH", { dateStyle: "long" })}</div>

      <div class="section-title">Client Details</div>
      <table class="grid">
        <tr>
          <td class="label">Contact Name:</td>
          <td>${fullName}</td>
        </tr>
        <tr>
          <td class="label">Email Address:</td>
          <td><a href="mailto:${email}" style="color: #DC5817; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <td class="label">Phone:</td>
          <td>${phone || "N/A"}</td>
        </tr>
        <tr>
          <td class="label">Enquiry Type:</td>
          <td><strong>${selectedService}</strong></td>
        </tr>
      </table>

      <div class="section-title">Message Details</div>
      <div class="message-box">${message}</div>
    </div>
    <div class="footer">
      This is an automated dispatch from the Cypress Energy website contact form.
    </div>
  </div>
</body>
</html>
    `.trim();

    // Check for SMTP config
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;
    const fromEmail = process.env.SMTP_FROM || "no-reply@cypressenergyghana.com";
    const toEmail = process.env.SMTP_TO || "info@cypressenergyghana.com";

    if (host && user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      });

      await transporter.sendMail({
        from: `"Cypress Web Portal" <${fromEmail}>`,
        to: toEmail,
        replyTo: email,
        subject: emailSubject,
        text: plainText,
        html: htmlContent,
      });

      return NextResponse.json({ success: true, message: "Email sent successfully." });
    } else {
      console.log("==========================================");
      console.log("SMTP Environment variables not configured.");
      console.log(`Simulating email dispatch to: ${toEmail}`);
      console.log(`Subject: ${emailSubject}`);
      console.log("------------------------------------------");
      console.log(plainText);
      console.log("==========================================");

      return NextResponse.json({
        success: true,
        mocked: true,
        message: "SMTP configuration not active. Inquiry compiled and logged to console.",
      });
    }
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: "Failed to compile or submit contact inquiry.", details: errorMessage },
      { status: 500 }
    );
  }
}
