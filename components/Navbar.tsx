"use client";
import { useState, useEffect } from "react";

const LINKS = [
  { label: "About",    id: "about" },
  { label: "Work",     id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills",   id: "skills" },
  { label: "Certs",    id: "certifications" },
];

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        height: 60,
        background: scrolled ? "rgba(11,11,11,.94)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(242,240,237,.08)" : "none",
        transition: "background .3s, border-color .3s",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 var(--e)",
      }}>
        {/* Logo */}
        <button
          onClick={() => go("top")}
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center",
            padding: 0,
          }}
          aria-label="Home"
        >
          <span style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 38, height: 38, borderRadius: "50%",
            border: "1.5px solid rgba(184,147,90,.55)",
            fontFamily: "var(--font-playfair, Georgia, serif)",
            fontSize: 14, fontWeight: 400, letterSpacing: ".04em",
            color: "var(--gld)",
          }}>
            KG
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {LINKS.map(({ label, id }) => (
            <button key={id} className="nav-link" onClick={() => go(id)}>
              {label}
            </button>
          ))}
          <button
            onClick={() => go("contact")}
            style={{
              marginLeft: 14, fontSize: 13, fontWeight: 600, letterSpacing: ".04em",
              padding: "8px 20px", background: "var(--dk-fg)", color: "var(--dk)",
              borderRadius: 6, border: "none", cursor: "pointer", transition: "opacity .15s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = ".82")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Contact
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="mob-toggle"
          onClick={() => setOpen(v => !v)}
          style={{
            display: "none", background: "none", border: "none",
            cursor: "pointer", color: "var(--dk-fg)", padding: 4,
          }}
          aria-label="Menu"
        >
          <svg viewBox="0 0 24 24" width={22} height={22} fill="none"
            stroke="currentColor" strokeWidth={1.6} strokeLinecap="round">
            {open
              ? <path d="M18 6 6 18M6 6l12 12"/>
              : <path d="M4 8h16M4 16h16"/>}
          </svg>
        </button>
      </header>

      {open && (
        <div style={{
          position: "fixed", top: 60, left: 0, right: 0, zIndex: 199,
          background: "rgba(11,11,11,.97)",
          borderBottom: "1px solid rgba(242,240,237,.08)",
          padding: "16px var(--e) 24px",
        }}>
          {LINKS.map(({ label, id }) => (
            <button key={id} onClick={() => { setOpen(false); go(id); }} style={{
              display: "block", width: "100%", textAlign: "left",
              padding: "14px 0", fontSize: 15, fontWeight: 500,
              color: "rgba(242,240,237,.6)", background: "none", border: "none",
              cursor: "pointer", borderBottom: "1px solid rgba(242,240,237,.06)",
            }}>
              {label}
            </button>
          ))}
          <button onClick={() => { setOpen(false); go("contact"); }} style={{
            marginTop: 16, width: "100%", padding: "13px 0",
            fontSize: 14, fontWeight: 600, color: "var(--dk)",
            background: "var(--dk-fg)", borderRadius: 6, border: "none", cursor: "pointer",
          }}>
            Contact me
          </button>
        </div>
      )}
    </>
  );
}
