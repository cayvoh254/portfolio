"use client";
import { useEffect, useState } from "react";
import { Home, User, Briefcase, FolderOpen, Mail } from "lucide-react";

const TABS = [
  { icon: Home,        label: "Home",     href: "hero" },
  { icon: User,        label: "About",    href: "about" },
  { icon: Briefcase,   label: "Work",     href: "experience" },
  { icon: FolderOpen,  label: "Projects", href: "projects" },
  { icon: Mail,        label: "Contact",  href: "contact" },
];

export default function BottomNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    TABS.forEach(({ href }) => {
      const el = document.getElementById(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
      style={{
        background: "rgba(10,10,15,0.97)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(6,182,212,0.1)",
      }}
    >
      <div className="flex items-center justify-around px-2 py-2 pb-safe">
        {TABS.map(({ icon: Icon, label, href }) => {
          const isActive = active === href;
          return (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all"
              style={{
                color: isActive ? "#06B6D4" : "#64748b",
                background: isActive ? "rgba(6,182,212,0.08)" : "transparent",
              }}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
              <span className="text-[10px] font-medium tracking-wide">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
