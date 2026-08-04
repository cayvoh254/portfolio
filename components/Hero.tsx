"use client";
import Image from "next/image";

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
      className="dark-sec"
      style={{
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
            gridTemplateColumns: "1fr 400px",
            gap: "clamp(48px, 6vw, 96px)",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          {/* ── Left ── */}
          <div>
            {/* Label row */}
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between", marginBottom: 28,
            }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: ".2em",
                textTransform: "uppercase", color: "var(--dk-dim)",
              }}>
                Technical Support · Cybersecurity · Product
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12, color: "var(--dk-dim)" }}>
                <span style={{
                  width: 7, height: 7, borderRadius: "50%", background: "#4ADE80",
                  boxShadow: "0 0 0 2px rgba(74,222,128,.18)", flexShrink: 0,
                }}/>
                Available
              </span>
            </div>

            <hr className="rule-dark" />

            {/* Name — full width, huge */}
            <h1 style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(72px, 11vw, 128px)",
              color: "var(--dk-fg)",
              letterSpacing: "-.045em",
              lineHeight: .94,
              fontWeight: 400,
              margin: "28px 0",
            }}>
              Kevin<br/>
              <em style={{ fontStyle: "italic", color: "rgba(242,240,237,.5)" }}>
                Gitau.
              </em>
            </h1>

            <hr className="rule-dark" />

            {/* Bio + CTAs in a grid */}
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
                color: "rgba(242,240,237,.55)",
              }}>
                Six years keeping production infrastructure running for an ISP,
                a climate IoT platform, and two fintechs. Making a deliberate
                move into{" "}
                <span style={{ color: "var(--dk-fg)", fontWeight: 500 }}>
                  cybersecurity
                </span>{" "}
                — backed by the labs, certifications, and operational depth most
                security candidates don&apos;t have.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <button className="btn-primary" onClick={() => go("projects")}>
                    View my work
                    <svg viewBox="0 0 16 16" width={13} height={13} fill="none"
                      stroke="currentColor" strokeWidth={1.8}>
                      <path d="M3 8h10M8 3l5 5-5 5"/>
                    </svg>
                  </button>
                  <button className="btn-ghost" onClick={() => go("contact")}>
                    Let&apos;s talk
                  </button>
                </div>

                <div style={{
                  display: "flex", alignItems: "center", gap: 5,
                  fontSize: 12, color: "var(--dk-dim)",
                }}>
                  <svg viewBox="0 0 24 24" width={12} height={12} fill="currentColor" style={{ opacity: .45, flexShrink: 0 }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Nairobi, Kenya · EAT (UTC+3) · Remote-ready
                </div>
              </div>
            </div>

            {/* Socials */}
            <div style={{
              marginTop: 40, paddingTop: 24,
              borderTop: "1px solid rgba(242,240,237,.08)",
              display: "flex", alignItems: "center", gap: 6,
            }}>
              {SOCIALS.map(({ href, label }, i) => (
                <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  {i > 0 && (
                    <span style={{ color: "rgba(242,240,237,.15)", userSelect: "none" }}>·</span>
                  )}
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="soc-link"
                  >
                    {label}
                  </a>
                </span>
              ))}
            </div>
          </div>

          {/* ── Right — photo ── */}
          <div className="hero-img" style={{ alignSelf: "flex-end" }}>
            <div style={{
              borderRadius: 16,
              overflow: "hidden",
              aspectRatio: "4/5",
              position: "relative",
              background: "#1A1A1A",
            }}>
              <Image
                src="/KEV.png"
                alt="Kevin Gitau"
                fill
                sizes="(max-width: 960px) 0px, 400px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
