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
        subject:  `New message from ${name} — kevingitau.dev`,
        text:     `From: ${name} <${email}>\n\n${message}\n\n---\nReply directly to this email to respond.`,
        html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#F0EDE7;font-family:system-ui,-apple-system,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F0EDE7;padding:40px 20px;">
  <tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.1);">
      <tr>
        <td style="background:#1C1D1F;padding:24px 32px;">
          <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(242,240,237,.45);">kevingitau.dev</p>
          <p style="margin:6px 0 0;font-size:18px;font-weight:600;color:#F2F0ED;letter-spacing:-.02em;">New contact message</p>
        </td>
      </tr>
      <tr>
        <td style="padding:32px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding-bottom:20px;border-bottom:1px solid #E8E4DC;">
                <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#A09A93;">From</p>
                <p style="margin:0;font-size:15px;font-weight:600;color:#111111;">${name}</p>
                <p style="margin:2px 0 0;font-size:13px;color:#5A5E63;">${email}</p>
              </td>
            </tr>
            <tr>
              <td style="padding-top:20px;">
                <p style="margin:0 0 10px;font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#A09A93;">Message</p>
                <p style="margin:0;font-size:14.5px;line-height:1.75;color:#1C1D1F;white-space:pre-wrap;">${message}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:18px 32px;border-top:1px solid #E8E4DC;background:#FAFAF8;">
          <p style="margin:0;font-size:12px;color:#A09A93;line-height:1.6;">
            Reply directly to this email to reach ${name} at
            <a href="mailto:${email}" style="color:#B8860B;text-decoration:none;">${email}</a>.
          </p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body></html>`,
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
