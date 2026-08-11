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
      style={{ padding: "clamp(56px,7vw,80px) 0" }}
    >
      <div className="wrap">
        <FadeIn>
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px,6vw,88px)",
            alignItems: "start",
          }}
        >
          {/* Left */}
          <div>
            <div className="sec-num" style={{ marginBottom: 20 }}>Contact</div>

            <h2 style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(36px,5vw,58px)",
              color: "var(--dk-fg)",
              letterSpacing: "-.04em",
              lineHeight: 1.05,
              fontWeight: 400,
              marginBottom: 20,
            }}>
              Let&apos;s work<br />
              <em style={{ fontStyle: "italic", color: "var(--dk-dim)" }}>together.</em>
            </h2>

            <p style={{
              fontSize: 14.5,
              lineHeight: 1.75,
              color: "var(--dk-dim)",
              maxWidth: "36ch",
              marginBottom: 32,
            }}>
              Based in Nairobi, Kenya. Open to roles in IT operations,
              application support, and cybersecurity.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {SOCIALS.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soc-link"
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(242,240,237,.07)",
                    fontSize: 13, fontWeight: 500,
                  }}
                >
                  <span style={{ opacity: .5, display: "flex", alignItems: "center" }}>{icon}</span>
                  {label}
                  <svg viewBox="0 0 16 16" width={11} height={11} fill="none"
                    stroke="currentColor" strokeWidth={1.8} strokeLinecap="round"
                    style={{ marginLeft: "auto" }}>
                    <path d="M3 8h10M8 3l5 5-5 5"/>
                  </svg>
                </a>
              ))}
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
