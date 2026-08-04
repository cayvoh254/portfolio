const SOCIALS = [
  { href: "https://linkedin.com/in/kevinkgitau",      label: "LinkedIn" },
  { href: "https://github.com/cayvoh254",             label: "GitHub" },
  { href: "https://www.credly.com/users/kevin-kibe",  label: "Credly" },
];

export default function Contact() {
  return (
    <section
      className="dark-sec"
      id="contact"
      style={{ padding: "clamp(80px,10vw,120px) 0" }}
    >
      <div className="wrap">
        <div style={{ maxWidth: 640 }}>
          <div className="sec-num" style={{ marginBottom: 20 }}>
            06 — Contact
          </div>

          <h2 style={{
            fontFamily: "var(--font-playfair, Georgia, serif)",
            fontSize: "clamp(40px,6vw,68px)",
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
            maxWidth: "42ch",
            marginBottom: 40,
          }}>
            Open to technical support, cybersecurity, and infrastructure roles —
            remote or hybrid. If you have something worth discussing, reach out directly.
          </p>

          <a
            href="mailto:kevin.gitau27@gmail.com"
            className="btn-primary"
            style={{ marginBottom: 36 }}
          >
            Send me a message
            <svg viewBox="0 0 16 16" width={13} height={13} fill="none"
              stroke="currentColor" strokeWidth={1.8}>
              <path d="M3 8h10M8 3l5 5-5 5"/>
            </svg>
          </a>

          <hr className="rule-dark" style={{ marginBottom: 28 }} />

          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {SOCIALS.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="soc-link"
                style={{ fontSize: 13 }}
              >
                {label}
                <svg viewBox="0 0 16 16" width={11} height={11} fill="none"
                  stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
                  <path d="M3 8h10M8 3l5 5-5 5"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
