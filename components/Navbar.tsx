"use client";
import { useState } from "react";

const NAV = [
  { label: "About",       id: "about" },
  { label: "Experience",  id: "experience" },
  { label: "Projects",    id: "projects" },
  { label: "Skills",      id: "skills" },
  { label: "Certs",       id: "certifications" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => { setOpen(false); scrollTo(id); };

  return (
    <>
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(248,247,244,.92)",
        backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--brd)",
        height: 64, padding: "0 var(--e)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <button
          onClick={() => scrollTo("top")}
          style={{
            fontFamily: "var(--font-playfair, Georgia, serif)",
            fontSize: 19, fontWeight: 400, color: "var(--fg)",
            background: "none", border: "none", cursor: "pointer",
            letterSpacing: "-.02em", whiteSpace: "nowrap",
          }}
        >
          Kevin Gitau
        </button>

        <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {NAV.map(({ label, id }) => (
            <button key={id} className="nav-btn" onClick={() => go(id)}>{label}</button>
          ))}
          <button
            className="nav-cta"
            onClick={() => go("contact")}
            style={{ marginLeft: 10 }}
          >
            Contact
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="mob-btn"
          onClick={() => setOpen(v => !v)}
          style={{
            display: "none", background: "none", border: "none",
            cursor: "pointer", color: "var(--fg2)", padding: 4,
          }}
          aria-label="Menu"
        >
          <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.8}>
            {open
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/></>
            }
          </svg>
        </button>
      </header>

      {open && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0, zIndex: 99,
          background: "rgba(248,247,244,.97)", backdropFilter: "blur(14px)",
          borderBottom: "1px solid var(--brd)", padding: "8px var(--e) 20px",
        }}>
          {NAV.map(({ label, id }) => (
            <button key={id} onClick={() => go(id)} style={{
              display: "block", width: "100%", textAlign: "left",
              padding: "13px 0", fontSize: 15, fontWeight: 500,
              color: "var(--fg)", background: "none", border: "none", cursor: "pointer",
              borderBottom: "1px solid var(--brd)",
            }}>{label}</button>
          ))}
          <button onClick={() => go("contact")} className="btn-dark" style={{ marginTop: 14, width: "100%", justifyContent: "center" }}>
            Contact me
          </button>
        </div>
      )}
    </>
  );
}
