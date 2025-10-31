import { NextResponse } from "next/server";
import { Resend } from "resend";

// Make sure RESEND_API_KEY is set in your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

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

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_RECIPIENT_EMAIL || "",
      subject: `New Inquiry: ${service}`,
      text: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Inquiry Error:", error);
    return NextResponse.json({ success: false, message: "Failed to send email." }, { status: 500 });
  }
}
