import { NextResponse } from "next/server";
import { Resend } from "resend";
import { BUSINESS_INFO } from "@/lib/constants";

// Make sure RESEND_API_KEY is set in your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    const emailContent = `
New Inquiry from ${BUSINESS_INFO.name} Website

─────────────────────────────────────
CONTACT INFORMATION
─────────────────────────────────────
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

─────────────────────────────────────
SERVICE REQUESTED
─────────────────────────────────────
${service}

─────────────────────────────────────
MESSAGE
─────────────────────────────────────
${message}

─────────────────────────────────────
Sent from: ${BUSINESS_INFO.name}
Website: smartwebsync.co.za
    `;

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_RECIPIENT_EMAIL || "",
      subject: `🔔 New Inquiry: ${service} - ${name}`,
      text: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Inquiry Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send inquiry. Please try again or contact us directly.",
        error: process.env.NODE_ENV === "development" ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
