"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import SectionHeading from "./SectionHeading";

const STATS = [
  { value: 6,    suffix: "+", label: "Years of Experience",    sub: "Across enterprise & cloud",     color: "#06B6D4" },
  { value: 30,   suffix: "+", label: "Certifications",         sub: "& counting",                    color: "#10B981" },
  { value: 3000, suffix: "+", label: "Endpoints Monitored",    sub: "IoT, POS & network nodes",      color: "#06B6D4" },
  { value: 4,    suffix: "+", label: "Products Built",         sub: "SaaS, mobile & automation",     color: "#a78bfa" },
  { value: 99,   suffix: "%", label: "SLA Adherence",          sub: "At peak NOC performance",       color: "#10B981" },
  { value: 25,   suffix: "%", label: "Incident Reduction",     sub: "Via process improvements",      color: "#f59e0b" },
];

function StatCard({ stat, i }: { stat: (typeof STATS)[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: i * 0.1 }}
      className="stat-card group"
      style={{ willChange: "transform" }}
    >
      {/* Value */}
      <div
        className="text-5xl font-bold font-mono mb-1 leading-none"
        style={{
          fontFamily: "var(--font-geist-mono, monospace)",
          color: stat.color,
          textShadow: `0 0 20px ${stat.color}60`,
        }}
      >
        {inView ? (
          <CountUp
            end={stat.value}
            duration={2.2}
            separator=","
            suffix={stat.suffix}
            useEasing
          />
        ) : (
          <span>0{stat.suffix}</span>
        )}
      </div>

      {/* Label */}
      <p className="text-white font-semibold text-base mt-3 mb-1">{stat.label}</p>
      <p className="text-slate-500 text-xs">{stat.sub}</p>

      {/* Bottom accent */}
      <div
        className="mt-4 h-0.5 w-12 mx-auto rounded-full transition-all duration-300 group-hover:w-24"
        style={{ background: stat.color, opacity: 0.5 }}
      />
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative py-24 md:py-36 px-4"
      style={{ borderTop: "1px solid rgba(6,182,212,0.06)" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(6,182,212,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="stats.compute()"
          title="By the Numbers"
          subtitle="A snapshot of what six-plus years of doing the work looks like."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
