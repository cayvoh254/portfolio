"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const LINKS = [
  { label: "About",     id: "about" },
  { label: "Work",      id: "experience" },
  { label: "Projects",  id: "projects" },
  { label: "Skills",    id: "skills" },
  { label: "Writeups",  id: "writeups" },
  { label: "Certs",     id: "certifications" },
];

function go(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = `/#${id}`;
  }
}

function ThemeIcon({ dark }: { dark: boolean }) {
  return dark ? (
    <svg viewBox="0 0 24 24" width={15} height={15} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
      <circle cx="12" cy="12" r="5"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" width={15} height={15} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  const toggleBtnStyle: React.CSSProperties = {
    width: 34, height: 34,
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    background: "none", border: "1px solid var(--lt-brd)",
    borderRadius: 7, cursor: "pointer", color: "var(--lt-muted)",
    transition: "border-color .2s, color .2s", flexShrink: 0,
  };

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        height: 68,
        background: scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--lt-brd)",
        transition: "background .3s",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 var(--e)",
      }}>
        {/* Logo — left anchor */}
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
              mixBlendMode: dark ? "screen" : "multiply",
              filter: dark ? "invert(1)" : "none",
              transition: "filter .3s",
            }}
          />
        </button>

        {/* Right group — nav + controls, all pushed to far right */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {/* Desktop nav links — hidden on mobile via .nav-links */}
          <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {LINKS.map(({ label, id }) => (
              <button key={id} onClick={() => go(id)} className="nav-link">
                {label}
              </button>
            ))}
            <button
              onClick={() => go("contact")}
              style={{
                marginLeft: 8, fontSize: 13, fontWeight: 600,
                padding: "9px 22px",
                background: "var(--lt-fg)", color: "var(--lt)",
                borderRadius: 7, border: "none", cursor: "pointer",
                transition: "opacity .2s", letterSpacing: ".01em",
              }}
            >
              Contact
            </button>
          </nav>

          {/* Divider between nav and controls — desktop only */}
          <div
            className="nav-links"
            style={{
              width: 1, height: 18,
              background: "var(--lt-brd)",
              margin: "0 2px", flexShrink: 0,
            }}
          />

          {/* Theme toggle — always visible */}
          <button onClick={toggleTheme} aria-label="Toggle theme" style={toggleBtnStyle}>
            <ThemeIcon dark={dark} />
          </button>

          {/* Hamburger — mobile only */}
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
        </div>
      </header>

      {open && (
        <div style={{
          position: "fixed", top: 68, left: 0, right: 0, zIndex: 199,
          background: "var(--nav-bg-scrolled)",
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
            Contact
          </button>
        </div>
      )}
    </>
  );
}
