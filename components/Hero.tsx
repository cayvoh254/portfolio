"use client";

const SOCIALS = [
  { href: "mailto:kevin.gitau27@gmail.com", label: "Email" },
  { href: "https://linkedin.com/in/kevinkgitau", label: "LinkedIn" },
  { href: "https://github.com/cayvoh254", label: "GitHub" },
  { href: "https://www.credly.com/users/kevin-kibe", label: "Credly" },
];

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        background: "var(--lt)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        padding: "100px var(--e) 64px",
      }}
    >
      <div style={{ width: "100%" }}>
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: "clamp(48px, 6vw, 96px)",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          {/* Left */}
          <div>
            {/* Label row */}
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between", marginBottom: 28,
            }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: ".2em",
                textTransform: "uppercase", color: "var(--lt-dim)",
              }}>
                Technical Support · Cybersecurity · Product
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12, color: "var(--lt-dim)" }}>
                <span style={{
                  width: 7, height: 7, borderRadius: "50%", background: "#22C55E",
                  boxShadow: "0 0 0 2px rgba(34,197,94,.18)", flexShrink: 0,
                }} />
                Available
              </span>
            </div>

            <hr className="rule" />

            {/* Name */}
            <h1 style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(72px, 11vw, 128px)",
              color: "var(--lt-fg)",
              letterSpacing: "-.045em",
              lineHeight: .94,
              fontWeight: 400,
              margin: "28px 0",
            }}>
              Kevin<br />
              <em style={{ fontStyle: "italic", color: "var(--lt-dim)" }}>
                Gitau.
              </em>
            </h1>

            <hr className="rule" />

            {/* Bio + CTAs */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(24px, 4vw, 56px)",
              marginTop: 32,
              alignItems: "end",
            }}>
              <p style={{
                fontSize: "clamp(15px, 1.5vw, 17px)",
                lineHeight: 1.75,
                color: "var(--lt-muted)",
              }}>
                Six years keeping production infrastructure running for an ISP,
                a climate IoT platform, and two fintechs. Making a deliberate
                move into{" "}
                <span style={{ color: "var(--lt-fg)", fontWeight: 600 }}>
                  cybersecurity
                </span>{" "}
                backed by the labs, certifications, and operational depth most
                security candidates don&apos;t have.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <button
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      fontSize: 14, fontWeight: 600,
                      padding: "13px 28px",
                      background: "var(--lt-fg)", color: "var(--lt)",
                      borderRadius: 6, border: "none", cursor: "pointer",
                      transition: "opacity .18s",
                    }}
                    onClick={() => go("projects")}
                  >
                    View my work
                    <svg viewBox="0 0 16 16" width={13} height={13} fill="none" stroke="currentColor" strokeWidth={1.8}>
                      <path d="M3 8h10M8 3l5 5-5 5" />
                    </svg>
                  </button>
                  <button
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      fontSize: 14, fontWeight: 500,
                      padding: "12px 24px",
                      background: "transparent", color: "var(--lt-muted)",
                      borderRadius: 6, border: "1px solid var(--lt-brd)",
                      cursor: "pointer", transition: "border-color .18s, color .18s",
                    }}
                    onClick={() => go("contact")}
                  >
                    Let&apos;s talk
                  </button>
                </div>

                <div style={{
                  display: "flex", alignItems: "center", gap: 5,
                  fontSize: 12, color: "var(--lt-dim)",
                }}>
                  <svg viewBox="0 0 24 24" width={12} height={12} fill="currentColor" style={{ opacity: .45, flexShrink: 0 }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  Nairobi, Kenya · EAT (UTC+3) · Remote-ready
                </div>
              </div>
            </div>

            {/* Socials */}
            <div style={{
              marginTop: 40, paddingTop: 24,
              borderTop: "1px solid var(--lt-brd)",
              display: "flex", alignItems: "center", gap: 6,
            }}>
              {SOCIALS.map(({ href, label }, i) => (
                <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  {i > 0 && (
                    <span style={{ color: "var(--lt-brd)", userSelect: "none" }}>·</span>
                  )}
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    style={{
                      fontSize: 13, fontWeight: 500,
                      color: "var(--lt-muted)", textDecoration: "none",
                      transition: "color .18s",
                    }}
                  >
                    {label}
                  </a>
                </span>
              ))}
            </div>
          </div>

          {/* Right - photo (transparent RGBA circle, no dark box) */}
          <div className="hero-img" style={{ alignSelf: "flex-end" }}>
            <div style={{ position: "relative", width: "100%", paddingBottom: "120%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/KEV.png"
                alt="Kevin Gitau"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center bottom",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
