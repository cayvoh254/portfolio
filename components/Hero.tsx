"use client";
import Image from "next/image";

const socials = [
  {
    href: "mailto:kevin.gitau27@gmail.com",
    label: "Email",
    icon: (
      <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/kevinkgitau",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
    ),
  },
  {
    href: "https://github.com/cayvoh254",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
      </svg>
    ),
  },
  {
    href: "https://www.credly.com/users/kevin-kibe",
    label: "Credly",
    icon: (
      <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor">
        <path d="M12 2L3.5 6.5v5.25C3.5 16.85 7.2 21.6 12 23c4.8-1.4 8.5-6.15 8.5-11.25V6.5L12 2z"/>
      </svg>
    ),
  },
];

const socialBtnStyle: React.CSSProperties = {
  width: 36, height: 36,
  display: "flex", alignItems: "center", justifyContent: "center",
  border: "1.5px solid var(--bd)", borderRadius: 8,
  color: "var(--t3)", transition: "all .2s", background: "transparent",
  cursor: "pointer",
};

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top">
      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 340px",
          gap: "clamp(40px,6vw,100px)",
          alignItems: "center",
          minHeight: "calc(100vh - 64px)",
          padding: "0 var(--e)",
          maxWidth: 1180,
          margin: "0 auto",
        }}
      >
        {/* Left: text */}
        <div>
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: 12, fontWeight: 600, letterSpacing: ".06em",
              textTransform: "uppercase", color: "var(--blue)",
              background: "var(--blue-l)", padding: "5px 12px",
              borderRadius: 20, marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 6, height: 6, borderRadius: "50%", background: "#22c55e",
                boxShadow: "0 0 6px rgba(34,197,94,.5)", flexShrink: 0,
              }}
            />
            Open to opportunities globally
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-serif, 'DM Serif Display', Georgia, serif)",
              fontSize: "clamp(44px,6vw,72px)",
              color: "var(--t1)", lineHeight: 1.05,
              letterSpacing: "-.02em", marginBottom: 10,
            }}
          >
            Kevin <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Gitau</em>
          </h1>

          <p
            style={{
              fontSize: "clamp(16px,2vw,20px)", fontWeight: 500,
              color: "var(--t2)", marginBottom: 22, lineHeight: 1.4,
            }}
          >
            Technical Support Engineer · Cybersecurity · Builder
          </p>

          <p
            style={{
              fontSize: 15.5, lineHeight: 1.78, color: "var(--t2)",
              maxWidth: "52ch", marginBottom: 32,
            }}
          >
            Six-plus years keeping{" "}
            <strong style={{ color: "var(--t1)", fontWeight: 600 }}>mission-critical systems</strong>{" "}
            running across telecom, climate tech, and fintech. I resolve incidents fast,
            own problems end to end, and communicate clearly under pressure. Now making
            a deliberate move into{" "}
            <strong style={{ color: "var(--t1)", fontWeight: 600 }}>cybersecurity</strong>,
            where operational depth is a real advantage.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              onClick={() => scrollTo("projects")}
              style={{
                fontSize: 14, fontWeight: 600, padding: "11px 28px",
                background: "var(--blue)", color: "#fff",
                borderRadius: 7, border: "none", cursor: "pointer", transition: "all .2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#1e40af"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--blue)"; }}
            >
              See my work
            </button>
            <button
              onClick={() => scrollTo("contact")}
              style={{
                fontSize: 14, fontWeight: 500, padding: "11px 24px",
                color: "var(--t2)", border: "1.5px solid var(--bd)",
                borderRadius: 7, background: "transparent", cursor: "pointer", transition: "all .2s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--t2)"; el.style.color = "var(--t1)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--bd)"; el.style.color = "var(--t2)";
              }}
            >
              Get in touch
            </button>
          </div>
        </div>

        {/* Right: photo */}
        <div className="hero-photo-wrap">
          <div
            style={{
              width: "100%", aspectRatio: "1/1.15",
              borderRadius: 16, overflow: "hidden",
              border: "1px solid var(--bd)", position: "relative",
            }}
          >
            <Image
              src="/KEV.png"
              alt="Kevin Gitau"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </div>

          {/* Socials */}
          <div style={{ display: "flex", gap: 8, marginTop: 14, justifyContent: "center" }}>
            {socials.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                title={label}
                style={socialBtnStyle}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--blue)";
                  el.style.color = "var(--blue)";
                  el.style.background = "var(--blue-l)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--bd)";
                  el.style.color = "var(--t3)";
                  el.style.background = "transparent";
                }}
              >
                {icon}
              </a>
            ))}
          </div>

          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 5 }}>
            <div
              style={{
                fontSize: 12, color: "var(--t3)",
                display: "flex", alignItems: "center", gap: 6, justifyContent: "center",
              }}
            >
              Nairobi, Kenya
              <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--t3)", flexShrink: 0 }} />
              EAT (UTC+3)
              <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--t3)", flexShrink: 0 }} />
              Remote-ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
