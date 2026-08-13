"use client";

import { useState, FormEvent } from "react";
import { FadeIn } from "./FadeIn";

const SOCIALS = [
  {
    href: "https://linkedin.com/in/kevinkgitau",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: "https://github.com/cayvoh254",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    href: "https://www.credly.com/users/kevin-gitau1",
    label: "Credly",
    icon: (
      <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
];

type Field = "name" | "email" | "message";

function sanitize(value: string): string {
  return value.trim().replace(/[<>]/g, "").slice(0, 2000);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(242,240,237,.05)",
  border: "1px solid rgba(242,240,237,.12)",
  borderRadius: 6,
  padding: "11px 14px",
  fontSize: 13.5,
  color: "var(--dk-fg)",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
  transition: "border-color .15s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: ".14em",
  textTransform: "uppercase",
  color: "rgba(242,240,237,.35)",
  marginBottom: 7,
};

export default function Contact() {
  const [fields, setFields]       = useState({ name: "", email: "", message: "" });
  const [errors, setErrors]       = useState<Partial<Record<Field, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent]           = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function validate(): boolean {
    const next: Partial<Record<Field, string>> = {};
    if (!fields.name.trim())                                     next.name    = "Name is required.";
    else if (fields.name.trim().length > 120)                    next.name    = "Name is too long.";
    if (!fields.email.trim())                                    next.email   = "Email is required.";
    else if (!EMAIL_RE.test(fields.email.trim()))                next.email   = "Enter a valid email address.";
    if (!fields.message.trim())                                  next.message = "Message is required.";
    else if (fields.message.trim().length < 10)                  next.message = "Message is too short.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
    if (errors[name as Field]) setErrors(prev => ({ ...prev, [name]: undefined }));
    if (submitError) setSubmitError(null);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:    sanitize(fields.name),
          email:   sanitize(fields.email),
          message: sanitize(fields.message),
        }),
      });
      const data: { ok: boolean; error?: string } = await res.json();
      if (data.ok) {
        setSent(true);
      } else {
        setSubmitError(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      className="dark-sec"
      id="contact"
      style={{ padding: "clamp(72px,9vw,112px) 0" }}
    >
      <div className="wrap">
        <FadeIn>
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.05fr",
            gap: "clamp(40px,6vw,96px)",
            alignItems: "start",
          }}
        >
          {/* Left — pitch */}
          <div>
            <div className="sec-num" style={{ marginBottom: 24 }}>Contact</div>

            <h2 style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(40px,5.4vw,64px)",
              color: "var(--dk-fg)",
              letterSpacing: "-.035em",
              lineHeight: 1.02,
              fontWeight: 400,
              marginBottom: 24,
            }}>
              Let&apos;s work<br />
              <em style={{ fontStyle: "italic", color: "var(--gld)" }}>together.</em>
            </h2>

            <p style={{
              fontSize: 15,
              lineHeight: 1.72,
              color: "rgba(242,240,237,.62)",
              maxWidth: "38ch",
              marginBottom: 36,
            }}>
              Open to roles in IT operations, application support, and
              cybersecurity — or a good conversation about any of the above.
            </p>

            {/* Primary — email as first-class action */}
            <a
              href="mailto:kevin.gitau27@gmail.com"
              style={{
                display: "inline-flex", alignItems: "center", gap: 12,
                padding: "18px 22px",
                background: "rgba(184,134,11,.08)",
                border: "1px solid rgba(184,134,11,.32)",
                borderRadius: 10,
                textDecoration: "none",
                marginBottom: 32,
                transition: "background .2s, border-color .2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(184,134,11,.14)"; e.currentTarget.style.borderColor = "rgba(184,134,11,.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(184,134,11,.08)"; e.currentTarget.style.borderColor = "rgba(184,134,11,.32)"; }}
            >
              <span style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 40, height: 40, borderRadius: 8,
                background: "rgba(184,134,11,.18)", color: "var(--gld)",
                flexShrink: 0,
              }}>
                <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
                <span style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: ".14em",
                  textTransform: "uppercase", color: "rgba(242,240,237,.4)",
                }}>
                  Email
                </span>
                <span style={{
                  fontSize: 14.5, color: "var(--dk-fg)", fontWeight: 500,
                  overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                }}>
                  kevin.gitau27@gmail.com
                </span>
              </span>
            </a>

            {/* Secondary — social icon row */}
            <div>
              <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: ".16em",
                textTransform: "uppercase", color: "rgba(242,240,237,.35)",
                marginBottom: 14,
              }}>
                Also on
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                {SOCIALS.map(({ href, label, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    style={{
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      width: 42, height: 42, borderRadius: 8,
                      background: "rgba(242,240,237,.04)",
                      border: "1px solid rgba(242,240,237,.12)",
                      color: "rgba(242,240,237,.65)",
                      textDecoration: "none",
                      transition: "color .2s, background .2s, border-color .2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = "var(--gld)"; e.currentTarget.style.borderColor = "rgba(184,134,11,.4)"; e.currentTarget.style.background = "rgba(184,134,11,.08)"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "rgba(242,240,237,.65)"; e.currentTarget.style.borderColor = "rgba(242,240,237,.12)"; e.currentTarget.style.background = "rgba(242,240,237,.04)"; }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <div style={{
              marginTop: 36, paddingTop: 20,
              borderTop: "1px solid rgba(242,240,237,.08)",
              display: "flex", alignItems: "center", gap: 8,
              fontSize: 12, color: "rgba(242,240,237,.4)",
            }}>
              <span style={{
                display: "inline-block", width: 7, height: 7, borderRadius: "50%",
                background: "var(--success)", boxShadow: "0 0 0 3px rgba(59,165,93,.15)",
              }} />
              Available now · Nairobi, Kenya (UTC+3)
            </div>
          </div>

          {/* Right — form */}
          <div style={{ paddingTop: 4 }}>
            {sent ? (
              <div style={{
                padding: "32px 28px",
                border: "1px solid rgba(242,240,237,.12)",
                borderRadius: 10,
                textAlign: "center",
              }}>
                <div style={{ fontSize: 13, color: "var(--gld)", fontWeight: 600, letterSpacing: ".04em", marginBottom: 8 }}>
                  Message sent
                </div>
                <p style={{ fontSize: 13.5, color: "rgba(242,240,237,.45)", lineHeight: 1.7 }}>
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => { setSent(false); setFields({ name: "", email: "", message: "" }); }}
                  style={{
                    marginTop: 20, fontSize: 12.5, color: "var(--gld)",
                    background: "none", border: "none", cursor: "pointer",
                    textDecoration: "underline", textUnderlineOffset: 3,
                  }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                  <label htmlFor="contact-name" style={labelStyle}>Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={120}
                    value={fields.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={{ ...inputStyle, borderColor: errors.name ? "rgba(220,60,60,.6)" : undefined }}
                  />
                  {errors.name && <div style={{ fontSize: 11.5, color: "rgba(220,80,80,.9)", marginTop: 5 }}>{errors.name}</div>}
                </div>

                <div>
                  <label htmlFor="contact-email" style={labelStyle}>Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    value={fields.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={{ ...inputStyle, borderColor: errors.email ? "rgba(220,60,60,.6)" : undefined }}
                  />
                  {errors.email && <div style={{ fontSize: 11.5, color: "rgba(220,80,80,.9)", marginTop: 5 }}>{errors.email}</div>}
                </div>

                <div>
                  <label htmlFor="contact-message" style={labelStyle}>Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    maxLength={2000}
                    value={fields.message}
                    onChange={handleChange}
                    placeholder="Leave a message"
                    style={{ ...inputStyle, resize: "vertical", minHeight: 116, borderColor: errors.message ? "rgba(220,60,60,.6)" : undefined }}
                  />
                  {errors.message && <div style={{ fontSize: 11.5, color: "rgba(220,80,80,.9)", marginTop: 5 }}>{errors.message}</div>}
                </div>

                {submitError && (
                  <div style={{
                    fontSize: 12.5, color: "rgba(220,80,80,.9)",
                    padding: "10px 14px",
                    background: "rgba(220,60,60,.08)",
                    borderRadius: 6, lineHeight: 1.55,
                  }}>
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ alignSelf: "flex-start", opacity: submitting ? .65 : 1 }}
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send message"}
                  {!submitting && (
                    <svg viewBox="0 0 16 16" width={13} height={13} fill="none" stroke="currentColor" strokeWidth={1.8}>
                      <path d="M3 8h10M8 3l5 5-5 5"/>
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
