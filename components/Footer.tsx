const NAV = [
  { label: "About",          id: "about" },
  { label: "Experience",     id: "experience" },
  { label: "Projects",       id: "projects" },
  { label: "Skills",         id: "skills" },
  { label: "Writeups",       id: "writeups" },
  { label: "Certifications", id: "certifications" },
];

const CONNECT = [
  {
    label: "Email",
    href: "mailto:kevin.gitau27@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/kevinkgitau",
    icon: (
      <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/cayvoh254",
    icon: (
      <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: "Credly",
    href: "https://www.credly.com/users/kevin-gitau1",
    icon: (
      <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
];

const colHead: React.CSSProperties = {
  fontSize: 10, fontWeight: 700, letterSpacing: ".16em",
  textTransform: "uppercase", color: "rgba(242,240,237,.35)",
  marginBottom: 16,
};

export default function Footer() {
  return (
    <footer
      className="dark-sec"
      style={{ borderTop: "1px solid rgba(184,134,11,.22)" }}
    >
      <div className="wrap" style={{ padding: "clamp(48px,6vw,72px) 0 28px" }}>
        <div
          className="foot-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.7fr 1fr 1fr",
            gap: "clamp(32px,5vw,64px)",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: 26, letterSpacing: "-.03em", color: "var(--dk-fg)",
              marginBottom: 12,
            }}>
              Kevin Gitau
            </div>
            <div style={{ fontSize: 12, color: "var(--dk-dim)", lineHeight: 1.6, maxWidth: "34ch" }}>
              IT Operations · Application Support · Cybersecurity
            </div>
            <div style={{ fontSize: 12, color: "rgba(242,240,237,.3)", marginTop: 10 }}>
              Nairobi, Kenya · EAT (UTC+3)
            </div>
          </div>

          {/* Navigate */}
          <nav>
            <div style={colHead}>Navigate</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {NAV.map(({ label, id }) => (
                <li key={id}>
                  <a href={`/#${id}`} className="foot-link">{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <div style={colHead}>Connect</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {CONNECT.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="foot-link"
                    style={{ display: "inline-flex", alignItems: "center", gap: 9 }}
                  >
                    <span style={{ display: "inline-flex", opacity: .6 }}>{icon}</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(242,240,237,.08)", margin: "36px 0 20px" }} />

        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <span style={{ fontSize: 12, color: "rgba(242,240,237,.3)" }}>
            {"© "}{new Date().getFullYear()}{" Kevin Gitau. All rights reserved."}
          </span>
          <a href="/#top" className="foot-link" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            Back to top
            <svg viewBox="0 0 16 16" width={11} height={11} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 13V3M3 8l5-5 5 5"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
