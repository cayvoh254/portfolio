const LINKS = [
  {
    href: "https://linkedin.com/in/kevinkgitau",
    label: "LinkedIn",
    icon: <svg viewBox="0 0 24 24" width={15} height={15} fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>,
  },
  {
    href: "https://github.com/cayvoh254",
    label: "GitHub",
    icon: <svg viewBox="0 0 24 24" width={15} height={15} fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>,
  },
  {
    href: "https://www.credly.com/users/kevin-kibe",
    label: "Credly",
    icon: <svg viewBox="0 0 24 24" width={15} height={15} fill="currentColor"><path d="M12 2L3.5 6.5v5.25C3.5 16.85 7.2 21.6 12 23c4.8-1.4 8.5-6.15 8.5-11.25V6.5L12 2z"/></svg>,
  },
];

export default function Contact() {
  return (
    <section className="sec" id="contact">
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <div className="slabel" style={{ textAlign: "center" }}>Contact</div>
        <h2 style={{
          fontFamily: "var(--font-playfair, Georgia, serif)",
          fontSize: "clamp(34px, 5vw, 54px)",
          color: "var(--fg)",
          letterSpacing: "-.03em",
          lineHeight: 1.08,
          marginBottom: 18,
        }}>
          Let&apos;s work<br />
          <em style={{ fontStyle: "italic" }}>together.</em>
        </h2>

        <p style={{
          fontSize: 15, lineHeight: 1.78, color: "var(--fg2)",
          maxWidth: "40ch", margin: "0 auto 32px",
        }}>
          Open to technical support, cybersecurity, and infrastructure roles — remote, hybrid,
          or on-site. If you have something worth discussing, reach out.
        </p>

        <a
          href="mailto:kevin.gitau27@gmail.com"
          className="btn-dark"
          style={{ display: "inline-flex", marginBottom: 32 }}
        >
          kevin.gitau27@gmail.com
        </a>

        <div style={{
          display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap",
        }}>
          {LINKS.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              {icon}
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
