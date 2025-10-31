"use server";

import * as z from "zod";
import { Resend } from "resend";
import { BUSINESS_INFO } from "@/lib/constants";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string(),
  message: z.string(),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitInquiry(values: z.infer<typeof formSchema>) {
  try {
    const { name, email, phone, service, message } = values;

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

    return {
      success: true,
      message: "Thank you! We've received your inquiry and will get back to you soon.",
    };
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return {
      success: false,
      message: "Failed to send inquiry. Please try contacting us directly via WhatsApp or email.",
    };
  }
}
