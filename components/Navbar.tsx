"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About",          href: "about" },
  { label: "Experience",     href: "experience" },
  { label: "Projects",       href: "projects" },
  { label: "Certifications", href: "certifications" },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (href: string) => {
    setOpen(false);
    scrollTo(href);
  };

  return (
    <>
      <header
        style={{
          position: "sticky", top: 0, zIndex: 100,
          background: "rgba(247,245,242,0.92)",
          backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--bd)",
          padding: "0 var(--e)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 64,
        }}
      >
        <button
          onClick={() => scrollTo("top")}
          style={{
            fontFamily: "var(--font-dm-serif, 'DM Serif Display', Georgia, serif)",
            fontSize: 20, color: "var(--t1)", letterSpacing: "-.01em",
            background: "none", border: "none", cursor: "pointer", whiteSpace: "nowrap",
          }}
        >
          Kevin Gitau
        </button>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNav(href)}
              className="nav-link"
              style={{
                fontSize: 13.5, fontWeight: 500, color: "var(--t2)",
                padding: "6px 12px", borderRadius: 6, transition: "all .15s",
                background: "none", border: "none", cursor: "pointer",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--t1)"; el.style.background = "rgba(0,0,0,.04)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--t2)"; el.style.background = "none";
              }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav("contact")}
            style={{
              fontSize: 13, fontWeight: 600, color: "var(--blue)",
              padding: "7px 18px", border: "1.5px solid var(--blue)",
              borderRadius: 6, marginLeft: 6, transition: "all .2s",
              background: "none", cursor: "pointer",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--blue)"; el.style.color = "#fff";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "none"; el.style.color = "var(--blue)";
            }}
          >
            Let&apos;s talk
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(v => !v)}
            style={{
              display: "none", background: "none", border: "none",
              cursor: "pointer", color: "var(--t2)", marginLeft: 8,
            }}
            className="mob-menu-btn"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            position: "fixed", top: 64, left: 0, right: 0, zIndex: 99,
            background: "rgba(247,245,242,0.98)", backdropFilter: "blur(16px)",
            borderBottom: "1px solid var(--bd)", padding: "12px var(--e) 20px",
          }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNav(href)}
              style={{
                display: "block", width: "100%", textAlign: "left",
                padding: "12px 0", fontSize: 15, fontWeight: 500,
                color: "var(--t1)", background: "none", border: "none",
                cursor: "pointer", borderBottom: "1px solid var(--bd)",
              }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav("contact")}
            style={{
              marginTop: 12, display: "block", width: "100%",
              textAlign: "center", padding: "10px 0",
              fontSize: 14, fontWeight: 600, color: "#fff",
              background: "var(--blue)", borderRadius: 6, border: "none", cursor: "pointer",
            }}
          >
            Let&apos;s talk
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-link { display: none !important; }
          .mob-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
