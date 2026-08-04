import Link from "next/link";

const SOCIALS = [
  {
    href: "mailto:kevin.gitau27@gmail.com",
    label: "Email",
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/kevinkgitau",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: "https://github.com/cayvoh254",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    href: "https://www.credly.com/users/kevin-kibe",
    label: "Credly",
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        background: "linear-gradient(160deg, #E5DFD2 0%, #EDE8DF 60%, #E8E3D8 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        padding: "100px var(--e) 72px",
      }}
    >
      <div style={{ width: "100%" }}>
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 400px",
            gap: "clamp(64px, 8vw, 120px)",
            alignItems: "end",
            width: "100%",
          }}
        >
          {/* ── Left ── */}
          <div>
            {/* Label row */}
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between", marginBottom: 32,
            }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: ".18em",
                textTransform: "uppercase", color: "var(--lt-dim)",
              }}>
                Technical Support · Cybersecurity · Product
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12, color: "var(--lt-dim)" }}>
                <span style={{
                  width: 7, height: 7, borderRadius: "50%", background: "#22C55E",
                  boxShadow: "0 0 0 3px rgba(34,197,94,.15)", flexShrink: 0,
                }} />
                Available
              </span>
            </div>

            <hr className="rule" />

            {/* Name */}
            <h1 style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(72px, 10.5vw, 124px)",
              color: "var(--lt-fg)",
              letterSpacing: "-.04em",
              lineHeight: .92,
              fontWeight: 400,
              margin: "32px 0",
            }}>
              Kevin<br />
              <em style={{ fontStyle: "italic", color: "var(--lt-dim)" }}>Gitau.</em>
            </h1>

            <hr className="rule" />

            {/* Bio — full width of left column */}
            <p style={{
              fontSize: "clamp(15px, 1.4vw, 17px)",
              lineHeight: 1.8,
              color: "var(--lt-muted)",
              marginTop: 36,
              marginBottom: 32,
              maxWidth: "58ch",
            }}>
              Six years keeping production infrastructure running for an ISP, a
              climate IoT platform, and two fintechs. Making a deliberate move into{" "}
              <strong style={{ color: "var(--lt-fg)", fontWeight: 600 }}>cybersecurity</strong>{" "}
              backed by the labs, certifications, and operational depth most
              security candidates don&apos;t have.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="#projects"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  fontSize: 14, fontWeight: 600,
                  padding: "13px 30px",
                  background: "var(--lt-fg)", color: "#F5F1EB",
                  borderRadius: 7, textDecoration: "none",
                  transition: "opacity .18s",
                }}
              >
                View my work
                <svg viewBox="0 0 16 16" width={13} height={13} fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path d="M3 8h10M8 3l5 5-5 5"/>
                </svg>
              </a>
              <a
                href="#contact"
                style={{
                  display: "inline-flex", alignItems: "center",
                  fontSize: 14, fontWeight: 500,
                  padding: "12px 26px",
                  background: "transparent", color: "var(--lt-muted)",
                  borderRadius: 7,
                  border: "1px solid rgba(0,0,0,.18)",
                  textDecoration: "none",
                  transition: "border-color .18s, color .18s",
                }}
              >
                Let&apos;s talk
              </a>
            </div>

            {/* Location */}
            <div style={{
              display: "flex", alignItems: "center", gap: 6,
              fontSize: 12, color: "var(--lt-dim)", marginTop: 24,
            }}>
              <svg viewBox="0 0 24 24" width={12} height={12} fill="currentColor" style={{ opacity: .45, flexShrink: 0 }}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Nairobi, Kenya · EAT (UTC+3) · Remote-ready
            </div>
          </div>

          {/* ── Right — photo + socials ── */}
          <div className="hero-img" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
            {/* Photo */}
            <div style={{ position: "relative", width: "100%", paddingBottom: "100%" }}>
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
                  objectPosition: "center center",
                }}
              />
            </div>

            {/* Social icons — centred under photo */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 6,
              width: "100%",
            }}>
              {SOCIALS.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="soc-pill"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
