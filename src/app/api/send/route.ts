// app/api/send/route.ts
import { ContactFormEmail } from "@/components/email/ContactFormEmail";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short"
    });

    // Send email to admin (you)
    const adminEmail = await resend.emails.send({
      from: "Contact Form <info@stephengift.com>",
      to: ["stephengift43@gmail.com"],
      replyTo: email,
      subject: `New Contact: ${subject}`,
      react: ContactFormEmail({
        name,
        email,
        subject,
        message,
        submittedAt,
        type: "admin"
      })
    });

    // Send confirmation email to customer
    const customerEmail = await resend.emails.send({
      from: "Stephen Gift <info@stephengift.com>",
      to: [email],
      subject: `We've received your message: ${subject}`,
      react: ContactFormEmail({
        name,
        email,
        subject,
        message,
        submittedAt,
        type: "customer"
      })
    });

    if (adminEmail.error || customerEmail.error) {
      console.error("Resend errors:", {
        admin: adminEmail.error,
        customer: customerEmail.error
      });
      return NextResponse.json(
        { error: "Failed to send one or more emails" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
      data: {
        admin: adminEmail.data,
        customer: customerEmail.data
      }
    });
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "Internal server error: " + (error as Error).message },
      { status: 500 }
    );
  }
}
