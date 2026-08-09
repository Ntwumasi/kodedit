import { NextResponse } from "next/server";
import { Resend } from "resend";

// Lazily constructed so a production build does not require the key.
let _resend: Resend | null = null;
function getResend(): Resend {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY);
  return _resend;
}

const TO = process.env.CONTACT_TO ?? "hello@kodedit.io";
const FROM = process.env.CONTACT_FROM ?? "Kodedit <onboarding@resend.dev>";

function clean(v: unknown, max = 4000): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a filled hidden field means a bot. Accept and drop.
  if (clean(body["company-website"])) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 200);
  const email = clean(body.email, 320);
  const org = clean(body.org, 200);
  const brief = clean(body.brief, 5000);

  if (!name || !email || !brief) {
    return NextResponse.json(
      { error: "Name, email, and a short brief are required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "That email address does not look right." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "The form is not configured right now." },
      { status: 503 }
    );
  }

  try {
    await getResend().emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New enquiry — ${name}${org ? ` · ${org}` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        org ? `Organisation: ${org}` : null,
        "",
        brief,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family:ui-sans-serif,system-ui,sans-serif;line-height:1.6;color:#111">
          <p style="margin:0 0 4px"><strong>Name</strong> — ${escapeHtml(name)}</p>
          <p style="margin:0 0 4px"><strong>Email</strong> — ${escapeHtml(email)}</p>
          ${org ? `<p style="margin:0 0 4px"><strong>Organisation</strong> — ${escapeHtml(org)}</p>` : ""}
          <hr style="border:0;border-top:1px solid #e5e5e5;margin:16px 0" />
          <p style="white-space:pre-wrap;margin:0">${escapeHtml(brief)}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json(
      { error: "We could not send that just now." },
      { status: 502 }
    );
  }
}
