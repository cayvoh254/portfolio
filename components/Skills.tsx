import Link from "next/link";
import type { ReactNode } from "react";
import { FadeIn } from "./FadeIn";

const ic = {
  viewBox: "0 0 24 24", width: 15, height: 15, fill: "none",
  stroke: "currentColor" as const, strokeWidth: 1.7,
  strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const GROUPS: { label: string; icon: ReactNode; items: string[] }[] = [
  {
    label: "IT Operations & Support",
    icon: (<svg {...ic}><path d="M3 12h4l2 5 4-10 2 5h6"/></svg>),
    items: ["Grafana", "Prometheus", "Linux", "SQL", "Postman", "Jira", "ServiceNow", "BMC Remedy", "Bash Scripting", "Log Correlation"],
  },
  {
    label: "Cloud & Infrastructure",
    icon: (<svg {...ic}><path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97 6 6 0 0 0-11.64-1.6A4 4 0 0 0 6.5 19z"/></svg>),
    items: ["Azure", "Entra ID", "AWS CloudWatch", "Google Cloud", "Kubernetes", "Docker", "Windows Server", "Active Directory"],
  },
  {
    label: "Security",
    icon: (<svg {...ic}><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/></svg>),
    items: ["Wazuh", "Burp Suite", "OWASP ZAP", "BloodHound", "Zeek", "pfSense", "Sysmon", "nmap", "Metasploit", "hashcat"],
  },
  {
    label: "Development & Automation",
    icon: (<svg {...ic}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 6l-2 12"/></svg>),
    items: ["Python", "Bash", "TypeScript", "React", "Next.js", "n8n", "Git", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section className="sec sec-alt" id="skills">
      <div className="wrap">
        <FadeIn>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
            <div className="sec-num">Skills</div>
            <Link
              href="/skills"
              style={{
                fontSize: 12.5, fontWeight: 600, color: "var(--gld)",
                display: "inline-flex", alignItems: "center", gap: 5,
                textDecoration: "none",
              }}
            >
              View all skills
              <svg viewBox="0 0 16 16" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path d="M3 8h10M8 3l5 5-5 5"/>
              </svg>
            </Link>
          </div>
        </FadeIn>

        <div className="skills-home-grid">
          {GROUPS.map((g, i) => (
            <FadeIn key={g.label} delay={i * 0.06}>
              <div className="skill-group-card">
                <div className="skill-group-label" style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={{ display: "inline-flex", color: "var(--gld)" }}>{g.icon}</span>
                  {g.label}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {g.items.map(item => (
                    <span key={item} className="skill-pill">{item}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
