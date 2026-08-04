"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${alignClass} gap-3 mb-14`}
    >
      {/* Label */}
      <span
        className="label-shimmer font-mono text-xs tracking-[0.25em] uppercase"
        style={{ fontFamily: "var(--font-geist-mono, monospace)" }}
      >
        &gt;&nbsp;{label}
      </span>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>

      {/* Accent line */}
      <div className="flex items-center gap-3 mt-1">
        <div
          className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"
          style={{ background: "linear-gradient(90deg, #06B6D4, transparent)" }}
        />
        {align === "center" && (
          <div
            className="h-px w-12 bg-gradient-to-l from-cyan-500 to-transparent"
            style={{ background: "linear-gradient(270deg, #06B6D4, transparent)" }}
          />
        )}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed mt-1">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
