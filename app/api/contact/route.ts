import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const TO_EMAIL = "hello@blueblackbeige.in";
const FROM_EMAIL = "contact@blueblackbeige.in";
const MAX_BODY_SIZE = 8_192;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_FORM_FILL_MS = 3_000;
const MAX_FORM_AGE_MS = 2 * 60 * 60 * 1_000;
const ALLOWED_ORIGINS = new Set([
  "https://blueblackbeige.in",
  "https://www.blueblackbeige.in",
]);
const SERVICES = new Set([
  "Strategy & Branding",
  "Digital Experience",
  "Web Development",
  "Motion & Interaction",
  "Digital Marketing",
  "Social Media Marketing",
]);

type RateLimitEntry = { count: number; resetAt: number };
type ContactPayload = {
  name?: unknown;
  email?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
  turnstileToken?: unknown;
  formStartedAt?: unknown;
};

const requestBuckets = new Map<string, RateLimitEntry>();

function isAllowedOrigin(origin: string) {
  if (ALLOWED_ORIGINS.has(origin)) return true;
  if (process.env.NODE_ENV !== "development") return false;

  try {
    const url = new URL(origin);
    return (
      url.protocol === "http:" &&
      (url.hostname === "localhost" || url.hostname === "127.0.0.1")
    );
  } catch {
    return false;
  }
}

function response(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store, max-age=0",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

function getClientIp(req: NextRequest) {
  const cloudflareIp = req.headers.get("cf-connecting-ip");
  if (cloudflareIp) return cloudflareIp;

  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();

  if (requestBuckets.size >= 10_000) {
    for (const [key, entry] of requestBuckets) {
      if (entry.resetAt <= now) requestBuckets.delete(key);
    }
    if (requestBuckets.size >= 10_000) return true;
  }

  const current = requestBuckets.get(ip);
  if (!current || current.resetAt <= now) {
    requestBuckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

function readText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return null;
  const text = value.trim();
  if (!text || text.length > maxLength) return null;
  if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(text)) return null;
  return text;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return { valid: false, configurationError: true };
  if (token.length > 2_048) return { valid: false, configurationError: false };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_000);

  try {
    const formData = new URLSearchParams({ secret, response: token });
    if (ip !== "unknown") formData.set("remoteip", ip);

    const verification = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
        cache: "no-store",
        signal: controller.signal,
      }
    );
    const result = (await verification.json()) as {
      success?: boolean;
      hostname?: string;
      action?: string;
    };

    const validHostname =
      result.hostname === "blueblackbeige.in" ||
      result.hostname === "www.blueblackbeige.in";

    return {
      valid: verification.ok && result.success === true && validHostname && result.action === "contact",
      configurationError: false,
    };
  } catch {
    return { valid: false, configurationError: false };
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(req: NextRequest) {
  try {
    const origin = req.headers.get("origin");
    if (!origin || !isAllowedOrigin(origin)) {
      return response({ error: "Invalid request origin." }, 403);
    }

    if (!req.headers.get("content-type")?.startsWith("application/json")) {
      return response({ error: "Unsupported request format." }, 415);
    }

    const contentLength = Number(req.headers.get("content-length") || 0);
    if (contentLength > MAX_BODY_SIZE) {
      return response({ error: "Request is too large." }, 413);
    }

    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return response(
        { error: "Too many requests. Please wait a few minutes and try again." },
        429
      );
    }

    const rawBody = await req.text();
    if (Buffer.byteLength(rawBody, "utf8") > MAX_BODY_SIZE) {
      return response({ error: "Request is too large." }, 413);
    }

    let body: ContactPayload;
    try {
      body = JSON.parse(rawBody) as ContactPayload;
    } catch {
      return response({ error: "Invalid request data." }, 400);
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return response({ error: "Invalid request data." }, 400);
    }

    // Honeypot submissions are acknowledged without sending an email so bots do not
    // learn which signal caught them.
    if (typeof body.website === "string" && body.website.trim()) {
      return response({ success: true }, 200);
    }

    const name = readText(body.name, 80);
    const email = readText(body.email, 254)?.toLowerCase();
    const service = readText(body.service, 80);
    const message = readText(body.message, 2_000);
    const turnstileToken = readText(body.turnstileToken, 2_048);
    const formStartedAt = body.formStartedAt;

    if (!name || !email || !service || !message || !turnstileToken) {
      return response({ error: "Please complete all required fields." }, 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return response({ error: "Enter a valid email address." }, 400);
    }

    if (!SERVICES.has(service)) {
      return response({ error: "Choose a valid service." }, 400);
    }

    if (
      typeof formStartedAt !== "number" ||
      !Number.isFinite(formStartedAt) ||
      Date.now() - formStartedAt < MIN_FORM_FILL_MS ||
      Date.now() - formStartedAt > MAX_FORM_AGE_MS
    ) {
      return response({ error: "Please wait a moment and try again." }, 400);
    }

    const turnstile = await verifyTurnstile(turnstileToken, ip);
    if (turnstile.configurationError) {
      console.error("Contact form protection is not configured.");
      return response({ error: "The secure contact form is temporarily unavailable." }, 503);
    }
    if (!turnstile.valid) {
      return response(
        { error: "We could not verify your submission. Please try the security check again." },
        400
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("Contact email service is not configured.");
      return response({ error: "The contact service is temporarily unavailable." }, 503);
    }

    const resend = new Resend(resendApiKey);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");

    const { error } = await resend.emails.send({
      from: `Blue Black Beige Contact <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New project enquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0e0e0e;color:#ffffff;border-radius:12px;">
          <h2 style="font-size:22px;font-weight:600;margin-bottom:24px;color:#ffffff;">
            New project enquiry
          </h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#b8b8b8;font-size:13px;width:120px;">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:14px;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#b8b8b8;font-size:13px;">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:14px;">${safeEmail}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#b8b8b8;font-size:13px;">Service</td>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:14px;">${safeService}</td>
            </tr>
            <tr>
              <td style="padding:16px 0 0;color:#b8b8b8;font-size:13px;vertical-align:top;">Message</td>
              <td style="padding:16px 0 0;font-size:14px;line-height:1.6;">${safeMessage}</td>
            </tr>
          </table>
          <p style="margin-top:32px;font-size:12px;color:rgba(255,255,255,0.3);">
            Sent via blueblackbeige.in contact form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Contact email delivery failed.", error.name);
      return response({ error: "Failed to send your enquiry. Please try again." }, 500);
    }

    return response({ success: true }, 200);
  } catch {
    console.error("Contact route failed unexpectedly.");
    return response({ error: "Something went wrong. Please try again." }, 500);
  }
}
