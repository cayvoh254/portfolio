const SOCIALS = [
  {
    href: "mailto:kevin.gitau27@gmail.com",
    label: "Email",
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/kevinkgitau",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: "https://github.com/cayvoh254",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    href: "https://www.credly.com/users/kevin-kibe",
    label: "Credly",
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
];

const STATS = [
  { value: "6+",     label: "Years experience" },
  { value: "30+",    label: "Certifications" },
  { value: "3,000+", label: "Endpoints managed" },
  { value: "Remote", label: "Ready" },
];

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        background: "var(--lt)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "clamp(100px,12vh,140px) var(--e) clamp(64px,8vh,96px)",
      }}
    >
      <div style={{ width: "100%", maxWidth: "var(--max)", margin: "0 auto" }}>
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 460px",
            gap: "clamp(40px,5vw,72px)",
            alignItems: "center",
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
              fontSize: "clamp(60px, 9vw, 108px)",
              color: "var(--lt-fg)",
              letterSpacing: "-.04em",
              lineHeight: .92,
              fontWeight: 400,
              margin: "28px 0",
            }}>
              Kevin<br />
              <em style={{ fontStyle: "italic", color: "var(--lt-dim)" }}>Gitau.</em>
            </h1>

            <hr className="rule" />

            {/* Bio */}
            <p style={{
              fontSize: "clamp(14px, 1.3vw, 16px)",
              lineHeight: 1.82,
              color: "var(--lt-muted)",
              marginTop: 32,
              marginBottom: 28,
              maxWidth: "54ch",
            }}>
              Six years maintaining production infrastructure across enterprise,
              fintech, and telecommunications environments. Experienced in keeping
              high-availability platforms operational, managing incident responses,
              and scaling cloud-hosted architecture.
            </p>

            {/* CTAs + social icons on same row */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
              <a href="#projects" className="btn-primary">
                View my work
                <svg viewBox="0 0 16 16" width={13} height={13} fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path d="M3 8h10M8 3l5 5-5 5"/>
                </svg>
              </a>
              <a href="#contact" className="btn-secondary">
                Let&apos;s talk
              </a>

              {/* Social icons aligned with CTAs */}
              <div style={{ display: "flex", gap: 8, marginLeft: 4 }}>
                {SOCIALS.map(({ href, label, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="soc-icon-btn"
                    aria-label={label}
                    title={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div style={{
              display: "flex", alignItems: "center", gap: 6,
              fontSize: 12, color: "var(--lt-dim)",
            }}>
              <svg viewBox="0 0 24 24" width={12} height={12} fill="currentColor" style={{ opacity: .45, flexShrink: 0 }}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Nairobi, Kenya · EAT (UTC+3) · Remote-ready
            </div>
          </div>

          {/* ── Right — photo (10% larger column) + stats card directly below ── */}
          <div className="hero-img" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
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

            {/* Stats card — anchored directly under photo */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: 1,
              borderRadius: 10,
              overflow: "hidden",
              border: "1px solid var(--lt-brd)",
              background: "var(--lt-brd)",
            }}>
              {STATS.map(({ value, label }) => (
                <div key={label} style={{
                  background: "var(--lt)",
                  padding: "16px 18px",
                }}>
                  <div style={{
                    fontFamily: "var(--font-playfair, Georgia, serif)",
                    fontSize: 22, fontWeight: 400, letterSpacing: "-.03em",
                    color: "var(--lt-fg)", lineHeight: 1, marginBottom: 4,
                  }}>
                    {value}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--lt-muted)", fontWeight: 500 }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
