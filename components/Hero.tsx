"use client";
import Image from "next/image";

const SOCIALS = [
  {
    href: "mailto:kevin.gitau27@gmail.com",
    label: "Email",
    icon: <svg viewBox="0 0 24 24" width={15} height={15} fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>,
  },
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

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section id="top" style={{ background: "var(--bg)" }}>
      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 360px",
          gap: "clamp(48px, 7vw, 96px)",
          alignItems: "center",
          minHeight: "calc(100vh - 64px)",
          padding: "0 var(--e)",
          maxWidth: 1080,
          margin: "0 auto",
        }}
      >
        {/* Left */}
        <div>
          {/* Availability */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 12.5, fontWeight: 500, color: "var(--fg2)",
            marginBottom: 28,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#22C55E", flexShrink: 0,
              boxShadow: "0 0 0 2px rgba(34,197,94,.2)",
            }} />
            Available for opportunities — Nairobi, Kenya · Remote-ready
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: "var(--font-playfair, Georgia, serif)",
            fontSize: "clamp(52px, 7vw, 80px)",
            color: "var(--fg)",
            lineHeight: 1.02,
            letterSpacing: "-.03em",
            marginBottom: 14,
          }}>
            Kevin<br />Gitau
          </h1>

          {/* Role */}
          <p style={{
            fontSize: "clamp(15px, 1.8vw, 17px)",
            color: "var(--fg3)",
            fontWeight: 400,
            letterSpacing: ".01em",
            marginBottom: 24,
            lineHeight: 1.5,
          }}>
            Technical Support Engineer&ensp;·&ensp;Cybersecurity&ensp;·&ensp;Product Builder
          </p>

          {/* Bio */}
          <p style={{
            fontSize: 15.5,
            lineHeight: 1.78,
            color: "var(--fg2)",
            maxWidth: "50ch",
            marginBottom: 36,
          }}>
            Six years keeping infrastructure running for an ISP, a climate IoT company, and
            two fintechs — and being the person who gets paged when it breaks. I&apos;m now
            making a deliberate move into{" "}
            <span style={{ color: "var(--fg)", fontWeight: 600 }}>cybersecurity</span>,
            backed by labs, certifications, and the operational context most security
            candidates don&apos;t have.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
            <button className="btn-dark" onClick={() => scrollTo("projects")}>
              View my work
            </button>
            <button className="btn-outline" onClick={() => scrollTo("contact")}>
              Get in touch
            </button>
          </div>

          {/* Social links */}
          <div
            className="hero-socials"
            style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
          >
            {SOCIALS.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="social-link"
              >
                {icon}
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — photo */}
        <div className="hero-photo" style={{ position: "relative" }}>
          <div style={{
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid var(--brd)",
            aspectRatio: "4/5",
            position: "relative",
            background: "#E8E5E1",
          }}>
            <Image
              src="/KEV.png"
              alt="Kevin Gitau"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
