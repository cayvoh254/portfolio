"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const LINES = [
  { delay: 0,    text: "> whoami",                         color: "#06B6D4" },
  { delay: 400,  text: "kevingitau",                       color: "#10B981" },
  { delay: 800,  text: "",                                  color: "" },
  { delay: 900,  text: "> cat /home/kevingitau/profile",   color: "#06B6D4" },
  { delay: 1300, text: "Name       : Kevin Gitau",         color: "#e2e8f0" },
  { delay: 1450, text: "Role       : Technical Support Engineer | Cybersecurity | Builder", color: "#e2e8f0" },
  { delay: 1600, text: "Location   : Nairobi, Kenya 🇰🇪",   color: "#e2e8f0" },
  { delay: 1750, text: "Experience : 6+ years",            color: "#e2e8f0" },
  { delay: 1900, text: "Certs      : 30+",                 color: "#e2e8f0" },
  { delay: 2050, text: "Status     : Open to opportunities ✓", color: "#10B981" },
  { delay: 2200, text: "",                                  color: "" },
  { delay: 2300, text: "> ls ~/projects/",                 color: "#06B6D4" },
  { delay: 2700, text: "wazuh-siem-lab/  web-security-lab/  api-security/  ai-saas/  famio-app/  automation/", color: "#94a3b8" },
  { delay: 2900, text: "",                                  color: "" },
  { delay: 3000, text: "> ping kevin.gitau27@gmail.com",   color: "#06B6D4" },
  { delay: 3400, text: "PING kevin.gitau27@gmail.com: 56 bytes", color: "#94a3b8" },
  { delay: 3700, text: "64 bytes from kevin: seq=0 ttl=64 time=0.001ms", color: "#94a3b8" },
  { delay: 3900, text: "Connection established! Say hello 👋", color: "#10B981" },
  { delay: 4100, text: "",                                  color: "" },
  { delay: 4200, text: "> echo $MOTTO",                    color: "#06B6D4" },
  { delay: 4600, text: '"Solving problems. Building things. Growing every day."', color: "#fbbf24" },
  { delay: 4900, text: "",                                  color: "" },
  { delay: 5000, text: "> _",                               color: "#06B6D4" },
];

export default function TerminalEasterEgg() {
  const [open, setOpen] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);

  const close = useCallback(() => {
    setOpen(false);
    setVisibleLines(0);
  }, []);

  // Key listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      // Open on backtick or Ctrl+`
      if (e.key === "`") {
        e.preventDefault();
        setOpen((o) => !o);
        setVisibleLines(0);
      }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close]);

  // Reveal lines progressively
  useEffect(() => {
    if (!open) return;
    setVisibleLines(0);
    const timers: ReturnType<typeof setTimeout>[] = [];
    LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleLines(i + 1), LINES[i].delay));
    });
    return () => timers.forEach(clearTimeout);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
          style={{ background: "rgba(10,10,15,0.92)", backdropFilter: "blur(8px)" }}
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="terminal-window w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title bar */}
            <div className="terminal-header-bar">
              <span className="dot-r" />
              <span className="dot-y" />
              <span className="dot-g" />
              <span
                className="ml-3 text-xs text-slate-500 flex-1 text-center"
                style={{ fontFamily: "var(--font-geist-mono, monospace)" }}
              >
                kevin@portfolio:~
              </span>
              <button
                onClick={close}
                className="text-slate-500 hover:text-white transition-colors ml-2"
              >
                <X size={14} />
              </button>
            </div>

            {/* Body */}
            <div
              className="p-6 min-h-[320px] max-h-[500px] overflow-y-auto space-y-0.5 text-sm leading-7"
              style={{ fontFamily: "var(--font-geist-mono, monospace)" }}
            >
              <p className="text-slate-500 text-xs mb-4">
                # Press ` (backtick) or ESC to toggle
              </p>
              {LINES.slice(0, visibleLines).map((line, i) => (
                <div key={i} style={{ color: line.color || "#94a3b8" }}>
                  {line.text}&nbsp;
                  {i === visibleLines - 1 && line.text.endsWith("_") && (
                    <span className="animate-blink" style={{ color: "#06B6D4" }}>
                      █
                    </span>
                  )}
                </div>
              ))}
              {visibleLines < LINES.length && (
                <span className="animate-blink" style={{ color: "#06B6D4" }}>
                  █
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
