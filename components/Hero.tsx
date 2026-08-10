"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } };

function CountUp({ to, suffix = "", duration = 1400, delay = 600 }: {
  to: number; suffix?: string; duration?: number; delay?: number;
}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setN(Math.round(eased * to));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(t);
  }, [to, duration, delay]);
  return <>{n.toLocaleString()}{suffix}</>;
}

const SOCIALS = [
  {
    href: "mailto:kevin.gitau27@gmail.com",
    label: "Email",
    color: "#c0392b",
    icon: (
      <svg viewBox="0 0 24 24" width={17} height={17} fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/kevinkgitau",
    label: "LinkedIn",
    color: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" width={17} height={17} fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: "https://github.com/cayvoh254",
    label: "GitHub",
    color: "var(--lt-fg)",
    icon: (
      <svg viewBox="0 0 24 24" width={17} height={17} fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    href: "https://www.credly.com/users/kevin-kibe",
    label: "Credly",
    color: "#F57600",
    icon: (
      <svg viewBox="0 0 24 24" width={17} height={17} fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
];

const STATS = [
  { to: 6,    suffix: "+", label: "Years experience" },
  { to: 30,   suffix: "+", label: "Certifications" },
  { to: 3000, suffix: "+", label: "Endpoints managed" },
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
        padding: "clamp(88px,10vh,120px) var(--e) clamp(48px,6vh,80px)",
      }}
    >
      <div style={{ width: "100%", maxWidth: "var(--max)", margin: "0 auto" }}>
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: "clamp(40px,5vw,72px)",
            alignItems: "center",
          }}
        >
          {/* Left */}
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={item} style={{ marginBottom: 20 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: ".18em",
                textTransform: "uppercase", color: "var(--lt-dim)",
              }}>
                Cloud Infrastructure &amp; Cybersecurity
              </span>
            </motion.div>

            <motion.hr variants={item} className="rule" />

            <motion.h1 variants={item} style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(56px, 8.5vw, 104px)",
              color: "var(--lt-fg)",
              letterSpacing: "-.04em",
              lineHeight: .92,
              fontWeight: 400,
              margin: "24px 0",
            }}>
              Kevin<br />
              <em style={{ fontStyle: "italic", color: "var(--lt-dim)" }}>Gitau.</em>
            </motion.h1>

            <motion.hr variants={item} className="rule" />

            <motion.p variants={item} style={{
              fontSize: "clamp(14px, 1.3vw, 16px)",
              lineHeight: 1.78,
              color: "var(--lt-muted)",
              marginTop: 24,
              marginBottom: 22,
              maxWidth: "52ch",
            }}>
              Built across enterprise network operations, cloud platform support,
              regulated fintech, and IoT at scale. Distributed systems diagnosed
              at the API and log level. Incidents owned from first alert through
              post-mortem. Security runs alongside: SIEM deployment, penetration
              testing, Active Directory hardening, container scanning.
            </motion.p>

            <motion.div variants={item} style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 18 }}>
              <a href="#projects" className="btn-primary">
                View my work
                <svg viewBox="0 0 16 16" width={13} height={13} fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path d="M3 8h10M8 3l5 5-5 5"/>
                </svg>
              </a>
              <a href="#contact" className="btn-secondary">
                Get in touch
              </a>
              <a
                href="/kevin-gitau-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-link"
              >
                <svg viewBox="0 0 24 24" width={13} height={13} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </a>
            </motion.div>

            {/* Social icons — brand colours */}
            <motion.div variants={item} style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              {SOCIALS.map(({ href, label, color, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  title={label}
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: 36, height: 36, borderRadius: 8,
                    border: `1.5px solid ${color}`,
                    color: color,
                    textDecoration: "none", flexShrink: 0,
                    transition: "opacity .2s, transform .2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = ".72")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  {icon}
                </a>
              ))}
            </motion.div>

            <motion.div variants={item} style={{
              display: "flex", alignItems: "center", gap: 6,
              fontSize: 12, color: "var(--lt-dim)",
            }}>
              <svg viewBox="0 0 24 24" width={12} height={12} fill="currentColor" style={{ opacity: .45, flexShrink: 0 }}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Nairobi, Kenya · EAT (UTC+3)
            </motion.div>
          </motion.div>

          {/* Right — photo + stats */}
          <div className="hero-img" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ position: "relative", width: "100%", paddingBottom: "100%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/KEV.png"
                alt="Kevin Gitau"
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%",
                  objectFit: "contain", objectPosition: "center center",
                }}
              />
            </div>

            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
              gap: 1,
              borderRadius: 10, overflow: "hidden",
              border: "1px solid var(--lt-brd)",
              background: "var(--lt-brd)",
            }}>
              {STATS.map(({ to, suffix, label }) => (
                <div key={label} style={{ background: "var(--lt)", padding: "14px 12px" }}>
                  <div style={{
                    fontFamily: "var(--font-playfair, Georgia, serif)",
                    fontSize: 21, fontWeight: 400, letterSpacing: "-.03em",
                    color: "var(--lt-fg)", lineHeight: 1, marginBottom: 4,
                  }}>
                    <CountUp to={to} suffix={suffix} />
                  </div>
                  <div style={{ fontSize: 10, color: "var(--lt-muted)", fontWeight: 500, lineHeight: 1.3 }}>
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
