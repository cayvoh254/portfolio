"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SECURITY_LABS } from "@/lib/projects";
import type { Status } from "@/lib/projects";

const BADGE: Record<Status, string> = {
  "Live lab": "badge badge-live",
  "Shipped":  "badge badge-shipped",
  "Beta":     "badge badge-beta",
  "In dev":   "badge badge-dev",
  "Stealth":  "badge badge-stealth",
};

export default function LabCarousel() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const fadingRef    = useRef(false);
  const pointerStart = useRef<number | null>(null);
  const count        = SECURITY_LABS.length;

  const prev = useCallback(() => {
    if (fadingRef.current) return;
    fadingRef.current = true;
    const target = (active - 1 + count) % count;
    setFading(true);
    setTimeout(() => { setActive(target); fadingRef.current = false; setFading(false); }, 160);
  }, [active, count]);

  const next = useCallback(() => {
    if (fadingRef.current) return;
    fadingRef.current = true;
    const target = (active + 1) % count;
    setFading(true);
    setTimeout(() => { setActive(target); fadingRef.current = false; setFading(false); }, 160);
  }, [active, count]);

  function goto(i: number) {
    if (fadingRef.current || i === active) return;
    fadingRef.current = true;
    setFading(true);
    setTimeout(() => { setActive(i); fadingRef.current = false; setFading(false); }, 160);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const lab = SECURITY_LABS[active];
  const fadeStyle: React.CSSProperties = { opacity: fading ? 0 : 1, transition: "opacity .16s ease" };

  return (
    <div
      className="lab-carousel"
      onPointerDown={e => { pointerStart.current = e.clientX; }}
      onPointerUp={e => {
        if (pointerStart.current === null) return;
        const d = e.clientX - pointerStart.current;
        if (Math.abs(d) > 44) d < 0 ? next() : prev();
        pointerStart.current = null;
      }}
      role="region"
      aria-label="Security Labs showcase"
    >
      {/* Visual preview */}
      <div className="lab-preview" style={fadeStyle}>
        <Image
          src={`/labs/${lab.slug}.png`}
          alt={`${lab.name} — architecture illustration`}
          fill
          sizes="(max-width: 768px) 100vw, 590px"
          style={{ objectFit: "cover" }}
          priority={active === 0}
        />
      </div>

      {/* Lab details */}
      <div className="lab-body" style={fadeStyle}>
        <div style={{ marginBottom: 10 }}>
          <span className={BADGE[lab.status]}>{lab.status}</span>
        </div>
        <div className="lab-name">{lab.name}</div>
        <p className="lab-desc">{lab.summary}</p>
        <div className="lab-stack">{lab.stack}</div>

        <div className="lab-footer">
          <Link href={`/projects/${lab.slug}`} className="btn-primary" style={{ fontSize: 13, padding: "10px 22px" }}>
            View project
            <svg viewBox="0 0 16 16" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
              <path d="M3 8h10M8 3l5 5-5 5"/>
            </svg>
          </Link>

          <div className="lab-nav">
            <button onClick={prev} aria-label="Previous lab" className="carousel-btn">
              <svg viewBox="0 0 16 16" width={13} height={13} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
                <path d="M10 3l-5 5 5 5"/>
              </svg>
            </button>
            <div className="carousel-dots" role="tablist" aria-label="Lab indicator">
              {SECURITY_LABS.map((l, i) => (
                <button
                  key={l.slug}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={l.name}
                  onClick={() => goto(i)}
                  className={`carousel-dot${i === active ? " carousel-dot-active" : ""}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next lab" className="carousel-btn">
              <svg viewBox="0 0 16 16" width={13} height={13} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
                <path d="M6 3l5 5-5 5"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
