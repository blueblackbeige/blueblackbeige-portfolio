import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "hello@blueblackbeige.in";
const FROM_EMAIL = "contact@blueblackbeige.in";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: `Blue Black Beige Contact <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0e0e0e;color:#ffffff;border-radius:12px;">
          <h2 style="font-size:22px;font-weight:600;margin-bottom:24px;color:#ffffff;">
            New project enquiry
          </h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#b8b8b8;font-size:13px;width:120px;">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#b8b8b8;font-size:13px;">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:14px;">${email}</td>
            </tr>
            <tr>
              <td style="padding:16px 0 0;color:#b8b8b8;font-size:13px;vertical-align:top;">Message</td>
              <td style="padding:16px 0 0;font-size:14px;line-height:1.6;">${message.replace(/\n/g, "<br/>")}</td>
            </tr>
          </table>
          <p style="margin-top:32px;font-size:12px;color:rgba(255,255,255,0.3);">
            Sent via blueblackbeige.in contact form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
