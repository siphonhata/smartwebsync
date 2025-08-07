import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Make sure these environment variables are set in your .env.local file
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  secure: false, // true for port 465, false for 587
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    const emailContent = `
      New Inquiry from BrightSync Tech Website:

      Name: ${name}
      Email: ${email}
      Phone: ${phone || "N/A"}
      Service: ${service}
      Message:
      ${message}
    `;

    await transporter.sendMail({
      from: `"BrightSync Contact" <${process.env.EMAIL_SERVER_USER}>`,
      to: process.env.CONTACT_RECIPIENT_EMAIL,
      subject: `New Inquiry: ${service}`,
      text: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Inquiry Error:", error);
    return NextResponse.json({ success: false, message: "Failed to send email." }, { status: 500 });
  }
}
