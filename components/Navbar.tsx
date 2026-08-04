"use client";
import { useState, useEffect } from "react";

const LINKS = [
  { label: "01 About",   id: "about" },
  { label: "02 Work",    id: "experience" },
  { label: "03 Projects",id: "projects" },
  { label: "04 Skills",  id: "skills" },
  { label: "05 Certs",   id: "certifications" },
];

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        height: 58,
        background: scrolled ? "rgba(11,11,11,.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(242,240,237,.07)" : "none",
        transition: "background .3s, backdrop-filter .3s, border-color .3s",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 var(--e)",
      }}>
        <button
          onClick={() => go("top")}
          style={{
            background: "none", border: "none", cursor: "pointer",
            fontSize: 15, fontWeight: 600, color: "var(--dk-fg)",
            letterSpacing: "-.01em",
          }}
        >
          Kevin Gitau
        </button>

        <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {LINKS.map(({ label, id }) => (
            <button key={id} className="nav-link" onClick={() => go(id)}>{label}</button>
          ))}
          <button
            onClick={() => go("contact")}
            style={{
              marginLeft: 12,
              fontSize: 12.5, fontWeight: 600, letterSpacing: ".04em",
              padding: "7px 18px",
              background: "var(--dk-fg)", color: "var(--dk)",
              borderRadius: 5, border: "none", cursor: "pointer",
              transition: "opacity .15s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = ".85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Contact
          </button>
        </nav>

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
              ? <><path d="M18 6 6 18M6 6l12 12"/></>
              : <><path d="M4 8h16M4 16h16"/></>}
          </svg>
        </button>
      </header>

      {open && (
        <div style={{
          position: "fixed", top: 58, left: 0, right: 0, zIndex: 199,
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
            }}>{label}</button>
          ))}
          <button onClick={() => { setOpen(false); go("contact"); }} style={{
            marginTop: 16, width: "100%", padding: "12px 0",
            fontSize: 14, fontWeight: 600, color: "var(--dk)",
            background: "var(--dk-fg)", borderRadius: 5, border: "none", cursor: "pointer",
          }}>
            Contact me
          </button>
        </div>
      )}
    </>
  );
}
