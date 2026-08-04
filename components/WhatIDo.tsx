"use client";
import { motion } from "framer-motion";
import { Terminal, Shield, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";

const CARDS = [
  {
    icon: Terminal,
    iconColor: "#06B6D4",
    iconBg: "rgba(6,182,212,0.1)",
    title: "Technical Support\n& IT Operations",
    desc: "Six-plus years as the technical frontline across IoT, fintech, and cloud platforms. Resolving complex incidents fast, communicating clearly under pressure, and owning problems from first alert through to resolution.",
    tags: ["Incident Response", "Root Cause Analysis", "SLA Adherence", "Azure", "Python", "SQL"],
    accent: "#06B6D4",
  },
  {
    icon: Shield,
    iconColor: "#10B981",
    iconBg: "rgba(16,185,129,0.1)",
    title: "Cybersecurity",
    desc: "Hands-on lab work in SIEM setup, web application security testing, API penetration testing, and container vulnerability scanning. Actively growing into offensive and defensive security.",
    tags: ["Wazuh", "OWASP ZAP", "Burp Suite", "Trivy", "API Pentesting", "Log Analysis"],
    accent: "#10B981",
  },
  {
    icon: Rocket,
    iconColor: "#a78bfa",
    iconBg: "rgba(167,139,250,0.1)",
    title: "Builder",
    desc: "AI-first product development using Claude API, n8n, Lovable, Supabase, and more. From concept to deployed product, I design, prototype, and ship real things that solve real problems.",
    tags: ["Claude API", "n8n", "Supabase", "Flutter", "Vercel", "Zapier"],
    accent: "#a78bfa",
  },
];

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="relative py-24 md:py-36 px-4"
      style={{
        background: "linear-gradient(180deg, #0a0a0f 0%, #0d0d16 50%, #0a0a0f 100%)",
        borderTop: "1px solid rgba(6,182,212,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="what.i.do()"
          title="Three Tracks"
          subtitle="Technical excellence, security curiosity, and a builder's mindset. All running in parallel."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {CARDS.map(({ icon: Icon, iconColor, iconBg, title, desc, tags, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass-card rounded-2xl p-7 flex flex-col gap-5 group"
              style={{ borderColor: `rgba(${iconColor === "#06B6D4" ? "6,182,212" : iconColor === "#10B981" ? "16,185,129" : "167,139,250"},0.12)` }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{ background: iconBg, border: `1px solid ${accent}22` }}
              >
                <Icon size={22} style={{ color: iconColor }} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white leading-snug whitespace-pre-line">
                {title}
              </h3>

              {/* Desc */}
              <p className="text-slate-400 text-sm leading-7 flex-1">{desc}</p>

              {/* Divider */}
              <div
                className="h-px w-full"
                style={{ background: `linear-gradient(90deg, ${accent}30, transparent)` }}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full font-mono"
                    style={{
                      background: `${accent}0a`,
                      border: `1px solid ${accent}28`,
                      color: "#94a3b8",
                      fontFamily: "var(--font-geist-mono, monospace)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
