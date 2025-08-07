"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string(),
  message: z.string(),
});

export async function submitInquiry(values: z.infer<typeof formSchema>) {
  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log the data and simulate a successful response.
  
  console.log("New inquiry received:", values);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // You can add error handling here, e.g., if an email service fails.
  const success = Math.random() > 0.1; // 90% success rate for simulation

  if (success) {
    return { success: true, message: "Inquiry submitted successfully." };
  } else {
    return { success: false, message: "Failed to submit inquiry. Please try again later." };
  }
}
