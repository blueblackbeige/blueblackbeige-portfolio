import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Validation schema ────────────────────────────────────────────────────────
const ContactSchema = z.object({
  name:    z.string().min(2,  "Name must be at least 2 characters"),
  company: z.string().optional(),
  email:   z.string().email("Please enter a valid email address"),
  phone:   z.string().optional(),
  budget:  z.string().optional(),
  message: z.string().min(10, "Please tell us a bit more (min 10 characters)"),
});

// ─── Rate limiting (simple in-memory, good for low traffic) ──────────────────
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now     = Date.now();
  const window  = 60 * 60 * 1000; // 1 hour
  const maxReqs = 5;

  const timestamps = (rateLimitMap.get(ip) ?? []).filter((t) => now - t < window);
  if (timestamps.length >= maxReqs) return true;

  rateLimitMap.set(ip, [...timestamps, now]);
  return false;
}

// ─── Email templates ──────────────────────────────────────────────────────────

function internalEmail(data: z.infer<typeof ContactSchema>): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <style>
    body   { font-family: 'Inter', Arial, sans-serif; background: #F5EFE2; margin: 0; padding: 40px 20px; color: #0A0A0A; }
    .card  { background: #fff; max-width: 600px; margin: 0 auto; padding: 48px; border-top: 4px solid #2952CC; }
    .label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #A8A29E; margin-bottom: 4px; }
    .value { font-size: 16px; color: #0A0A0A; margin-bottom: 24px; }
    .msg   { background: #F5EFE2; padding: 20px 24px; font-size: 16px; line-height: 1.6; border-left: 3px solid #2952CC; }
    .brand { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #A8A29E; margin-top: 40px; }
  </style>
</head>
<body>
  <div class="card">
    <h2 style="margin: 0 0 32px; font-size: 28px; letter-spacing: -0.02em;">New project enquiry</h2>

    <div class="label">Name</div>
    <div class="value">${data.name}</div>

    ${data.company ? `<div class="label">Company</div><div class="value">${data.company}</div>` : ""}

    <div class="label">Email</div>
    <div class="value"><a href="mailto:${data.email}" style="color: #2952CC;">${data.email}</a></div>

    ${data.phone ? `<div class="label">Phone</div><div class="value">${data.phone}</div>` : ""}
    ${data.budget ? `<div class="label">Budget</div><div class="value">${data.budget}</div>` : ""}

    <div class="label">Message</div>
    <div class="msg">${data.message.replace(/\n/g, "<br/>")}</div>

    <div class="brand">Blue Black Beige · blueblackbeige.in</div>
  </div>
</body>
</html>`;
}

function autoReplyEmail(name: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <style>
    body   { font-family: 'Inter', Arial, sans-serif; background: #F5EFE2; margin: 0; padding: 40px 20px; color: #0A0A0A; }
    .card  { background: #fff; max-width: 600px; margin: 0 auto; padding: 48px; border-top: 4px solid #2952CC; }
    .big   { font-size: 36px; letter-spacing: -0.03em; line-height: 1.1; font-style: italic; margin: 0 0 32px; }
    p      { font-size: 16px; line-height: 1.7; color: #475569; margin: 0 0 20px; }
    .cta   { display: inline-block; margin-top: 8px; padding: 16px 28px; background: #0A0A0A; color: #F5EFE2; text-decoration: none; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; }
    .bar   { display: flex; gap: 6px; margin-top: 40px; }
    .sq    { width: 14px; height: 14px; }
    .brand { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #A8A29E; margin-top: 12px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="big">We got your message, ${name.split(" ")[0]}.</div>

    <p>
      Thank you for reaching out to Blue Black Beige. We've received your brief
      and one of us will be in touch within 24 hours.
    </p>
    <p>
      In the meantime, feel free to explore our work at
      <a href="https://blueblackbeige.in" style="color: #2952CC;">blueblackbeige.in</a>.
    </p>

    <a class="cta" href="https://blueblackbeige.in">Visit our studio →</a>

    <div class="bar">
      <div class="sq" style="background:#2952CC;"></div>
      <div class="sq" style="background:#0A0A0A;"></div>
      <div class="sq" style="background:#8B7349;"></div>
    </div>
    <div class="brand">Blue Black Beige — Design &amp; Development</div>
  </div>
</body>
</html>`;
}

// ─── Route handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    // Rate limit
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse + validate
    const body   = await req.json();
    const result = ContactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.errors[0].message },
        { status: 400 }
      );
    }

    const data = result.data;
    const to   = process.env.CONTACT_TO_EMAIL ?? "nayan@blueblackbeige.in";
    const from = process.env.CONTACT_FROM_EMAIL ?? "hello@blueblackbeige.in";

    // 1. Internal notification email
    await resend.emails.send({
      from,
      to,
      reply_to: data.email,
      subject: `New enquiry from ${data.name}${data.company ? ` · ${data.company}` : ""}`,
      html: internalEmail(data),
    });

    // 2. Auto-reply to client
    await resend.emails.send({
      from,
      to:      data.email,
      subject: "We received your brief — Blue Black Beige",
      html:    autoReplyEmail(data.name),
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("[contact] Error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please email us directly." },
      { status: 500 }
    );
  }
}
