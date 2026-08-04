"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  // Main dot — snappy
  const dotX = useSpring(cursorX, { damping: 30, stiffness: 800 });
  const dotY = useSpring(cursorY, { damping: 30, stiffness: 800 });

  // Ring — slower trail
  const ringX = useSpring(cursorX, { damping: 45, stiffness: 200 });
  const ringY = useSpring(cursorY, { damping: 45, stiffness: 200 });

  const isHovering = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const hover = t.closest("a, button, [role='button'], input, textarea, select, label") !== null;
      isHovering.current = hover;
      if (dotRef.current) {
        dotRef.current.style.width  = hover ? "18px" : "8px";
        dotRef.current.style.height = hover ? "18px" : "8px";
        dotRef.current.style.marginLeft = hover ? "-9px" : "-4px";
        dotRef.current.style.marginTop  = hover ? "-9px" : "-4px";
      }
      if (ringRef.current) {
        ringRef.current.style.width  = hover ? "44px" : "32px";
        ringRef.current.style.height = hover ? "44px" : "32px";
        ringRef.current.style.marginLeft = hover ? "-22px" : "-16px";
        ringRef.current.style.marginTop  = hover ? "-22px" : "-16px";
        ringRef.current.style.opacity = hover ? "0.6" : "0.35";
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Ring / trail */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          width: 32,
          height: 32,
          marginLeft: -16,
          marginTop: -16,
          border: "1px solid rgba(6,182,212,0.55)",
          opacity: 0.35,
          transition: "width 0.2s, height 0.2s, margin 0.2s, opacity 0.2s",
        }}
      />
      {/* Main dot */}
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          width: 8,
          height: 8,
          marginLeft: -4,
          marginTop: -4,
          backgroundColor: "#06B6D4",
          boxShadow: "0 0 8px rgba(6,182,212,0.9), 0 0 16px rgba(6,182,212,0.45)",
          transition: "width 0.15s, height 0.15s, margin 0.15s",
        }}
      />
    </>
  );
}
