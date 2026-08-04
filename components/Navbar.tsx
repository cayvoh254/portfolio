"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

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
        height: 68,
        background: scrolled ? "rgba(239,236,230,0.97)" : "rgba(239,236,230,0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--lt-brd)",
        transition: "background .3s",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 var(--e)",
      }}>
        {/* Logo — transparent-blended via multiply, touches top + bottom */}
        <button
          onClick={() => go("top")}
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", padding: 0,
            height: 68, alignSelf: "stretch", flexShrink: 0,
          }}
          aria-label="Home"
        >
          <Image
            src="/logo.png"
            alt="Kevin Gitau"
            width={68}
            height={68}
            style={{
              display: "block", objectFit: "contain", width: 68, height: 68,
              mixBlendMode: "multiply",
            }}
          />
        </button>

        {/* Desktop nav — vertically centered with logo */}
        <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {LINKS.map(({ label, id }) => (
            <button key={id} onClick={() => go(id)} className="nav-link">
              {label}
            </button>
          ))}
          <button
            onClick={() => go("contact")}
            style={{
              marginLeft: 10, fontSize: 13, fontWeight: 600,
              padding: "9px 22px",
              background: "var(--lt-fg)", color: "var(--lt)",
              borderRadius: 7, border: "none", cursor: "pointer",
              transition: "opacity .2s", letterSpacing: ".01em",
            }}
          >
            Contact
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="mob-toggle"
          onClick={() => setOpen(v => !v)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "var(--lt-fg)", padding: 4 }}
          aria-label="Menu"
        >
          <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round">
            {open ? <path d="M18 6 6 18M6 6l12 12"/> : <path d="M4 8h16M4 16h16"/>}
          </svg>
        </button>
      </header>

      {open && (
        <div style={{
          position: "fixed", top: 68, left: 0, right: 0, zIndex: 199,
          background: "rgba(239,236,230,0.98)",
          borderBottom: "1px solid var(--lt-brd)",
          padding: "16px var(--e) 24px",
        }}>
          {LINKS.map(({ label, id }) => (
            <button key={id} onClick={() => { setOpen(false); go(id); }} style={{
              display: "block", width: "100%", textAlign: "left",
              padding: "14px 0", fontSize: 15, fontWeight: 500,
              color: "var(--lt-muted)", background: "none", border: "none",
              cursor: "pointer", borderBottom: "1px solid var(--lt-brd)",
            }}>
              {label}
            </button>
          ))}
          <button onClick={() => { setOpen(false); go("contact"); }} style={{
            marginTop: 16, width: "100%", padding: "13px 0",
            fontSize: 14, fontWeight: 600, color: "var(--lt)",
            background: "var(--lt-fg)", borderRadius: 6, border: "none", cursor: "pointer",
          }}>
            Contact me
          </button>
        </div>
      )}
    </>
  );
}
