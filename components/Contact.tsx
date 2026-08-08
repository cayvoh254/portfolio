const PLATFORMS = [
  { href: "#", label: "HackTheBox", placeholder: true },
  { href: "#", label: "TryHackMe", placeholder: true },
  { href: "#", label: "LetsDefend", placeholder: true },
];

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
    href: "https://www.credly.com/users/kevin-kibe",
    label: "Credly",
    icon: (
      <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      className="dark-sec"
      id="contact"
      style={{ padding: "clamp(80px,10vw,120px) 0" }}
    >
      <div className="wrap">
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(48px,7vw,96px)",
            alignItems: "start",
          }}
        >
          {/* Left — headline + CTA */}
          <div>
            <div className="sec-num" style={{ marginBottom: 20 }}>
              07 · Contact
            </div>

            <h2 style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(38px,5.5vw,64px)",
              color: "var(--dk-fg)",
              letterSpacing: "-.04em",
              lineHeight: 1.0,
              fontWeight: 400,
              marginBottom: 24,
            }}>
              Let&apos;s work<br />
              <em style={{ fontStyle: "italic", color: "var(--dk-dim)" }}>together.</em>
            </h2>

            <p style={{
              fontSize: 15,
              lineHeight: 1.78,
              color: "var(--dk-dim)",
              maxWidth: "38ch",
              marginBottom: 36,
            }}>
              Open to technical support, cybersecurity, and infrastructure roles,
              remote or hybrid. If you have something worth discussing, reach out directly.
            </p>

            <a href="mailto:kevin.gitau27@gmail.com" className="btn-primary">
              Send me a message
              <svg viewBox="0 0 16 16" width={13} height={13} fill="none"
                stroke="currentColor" strokeWidth={1.8}>
                <path d="M3 8h10M8 3l5 5-5 5"/>
              </svg>
            </a>
          </div>

          {/* Right — availability card + response time + social links */}
          <div style={{ paddingTop: 8 }}>
            {/* Availability status */}
            <div style={{
              display: "flex", alignItems: "flex-start", gap: 14,
              padding: "22px 24px",
              border: "1px solid rgba(34,197,94,.2)",
              borderRadius: 10,
              background: "rgba(34,197,94,.06)",
              marginBottom: 28,
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "#22C55E",
                boxShadow: "0 0 0 3px rgba(34,197,94,.2)",
                flexShrink: 0, marginTop: 6,
              }} />
              <div>
                <div style={{
                  fontSize: 13, fontWeight: 600,
                  color: "var(--dk-fg)", marginBottom: 6,
                  letterSpacing: ".01em",
                }}>
                  Currently available
                </div>
                <div style={{
                  fontSize: 13, color: "rgba(242,240,237,.5)", lineHeight: 1.68,
                }}>
                  Actively seeking remote or hybrid roles in technical support,
                  security operations, or infrastructure. Nairobi, Kenya · EAT (UTC+3).
                </div>
              </div>
            </div>

            {/* Response time */}
            <div style={{
              display: "flex", alignItems: "center", gap: 10,
              marginBottom: 28,
              paddingBottom: 28,
              borderBottom: "1px solid var(--dk-brd)",
            }}>
              <svg viewBox="0 0 24 24" width={14} height={14} fill="none"
                stroke="rgba(242,240,237,.28)" strokeWidth={1.6} strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <span style={{ fontSize: 12.5, color: "rgba(242,240,237,.35)" }}>
                Typically responds within 24 hours
              </span>
            </div>

            {/* Learning platforms */}
            <div style={{ marginBottom: 20 }}>
              <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: ".16em",
                textTransform: "uppercase", color: "rgba(242,240,237,.25)",
                marginBottom: 10,
              }}>
                Learning Platforms
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {PLATFORMS.map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href !== "#" ? "_blank" : undefined}
                    rel={href !== "#" ? "noopener noreferrer" : undefined}
                    style={{
                      fontSize: 12, fontWeight: 500,
                      padding: "5px 12px", borderRadius: 5,
                      border: "1px solid rgba(242,240,237,.12)",
                      color: "rgba(242,240,237,.4)",
                      textDecoration: "none",
                      opacity: href === "#" ? 0.5 : 1,
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Social links — consistent arrow alignment */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
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
        </div>
      </div>
    </section>
  );
}
