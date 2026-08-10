import Link from "next/link";
import { FadeIn } from "./FadeIn";

const GROUPS = [
  {
    label: "IT Operations & Support",
    items: ["Grafana", "Prometheus", "Linux", "SQL", "Postman", "Jira", "ServiceNow", "BMC Remedy", "Bash Scripting", "Log Correlation"],
  },
  {
    label: "Cloud & Infrastructure",
    items: ["Azure", "Entra ID", "AWS CloudWatch", "Google Cloud", "Kubernetes", "Docker", "Windows Server", "Active Directory"],
  },
  {
    label: "Security",
    items: ["Wazuh", "Burp Suite", "OWASP ZAP", "BloodHound", "Zeek", "pfSense", "Sysmon", "nmap", "Metasploit", "hashcat"],
  },
  {
    label: "Development & Automation",
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
                <div className="skill-group-label">{g.label}</div>
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
