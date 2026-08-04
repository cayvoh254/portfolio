"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "hero",             label: "Home" },
  { id: "about",            label: "About" },
  { id: "what-i-do",        label: "What I Do" },
  { id: "experience",       label: "Experience" },
  { id: "skills",           label: "Skills" },
  { id: "projects",         label: "Projects" },
  { id: "certifications",   label: "Certifications" },
  { id: "stats",            label: "Stats" },
  { id: "contact",          label: "Contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("hero");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4">
      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <div
            key={id}
            className="relative flex items-center group"
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Dot */}
            <button
              onClick={() => scrollTo(id)}
              aria-label={`Go to ${label}`}
              className="relative flex items-center justify-center"
            >
              <motion.div
                animate={{
                  width:  isActive ? 12 : 7,
                  height: isActive ? 12 : 7,
                  backgroundColor: isActive ? "#06B6D4" : "rgba(100,116,139,0.5)",
                  boxShadow: isActive
                    ? "0 0 10px rgba(6,182,212,0.8), 0 0 20px rgba(6,182,212,0.4)"
                    : "none",
                }}
                transition={{ duration: 0.25 }}
                className="rounded-full"
              />
            </button>

            {/* Tooltip label */}
            <AnimatePresence>
              {hovered === id && (
                <motion.span
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-6 whitespace-nowrap text-xs font-mono px-2 py-1 rounded"
                  style={{
                    fontFamily: "var(--font-geist-mono, monospace)",
                    background: "rgba(13,13,22,0.95)",
                    border: "1px solid rgba(6,182,212,0.2)",
                    color: isActive ? "#06B6D4" : "#94a3b8",
                  }}
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}
