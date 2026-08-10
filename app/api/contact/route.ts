import { NextRequest, NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value: string): string {
  return value.trim().replace(/[<>]/g, "").slice(0, 2000);
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name    = sanitize(String(body.name    ?? ""));
  const email   = sanitize(String(body.email   ?? ""));
  const message = sanitize(String(body.message ?? ""));

  if (!name)                        return NextResponse.json({ ok: false, error: "Name is required."           }, { status: 400 });
  if (name.length > 120)            return NextResponse.json({ ok: false, error: "Name is too long."           }, { status: 400 });
  if (!email)                       return NextResponse.json({ ok: false, error: "Email is required."          }, { status: 400 });
  if (!EMAIL_RE.test(email))        return NextResponse.json({ ok: false, error: "Enter a valid email."        }, { status: 400 });
  if (!message || message.length < 10)
                                    return NextResponse.json({ ok: false, error: "Message is too short."       }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // RESEND_API_KEY not set in environment — set it in Vercel > Settings > Environment Variables
    return NextResponse.json(
      { ok: false, error: "Email service not configured. Reach out directly at kevin.gitau27@gmail.com" },
      { status: 503 }
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:     "Portfolio Contact <contact@kevingitau.dev>",
        to:       "kevin.gitau27@gmail.com",
        reply_to: email,
        subject:  `Portfolio contact from ${name}`,
        text:     `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html:     `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><hr/><p>${message.replace(/\n/g, "<br/>")}</p>`,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("Resend error:", err);
      return NextResponse.json({ ok: false, error: "Failed to send. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ ok: false, error: "Network error. Please try again." }, { status: 500 });
  }
}
