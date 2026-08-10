import { FadeIn } from "./FadeIn";

const SKILLS = [
  {
    cat: "Security Operations & AppSec",
    items: "Wazuh · SIEM · HTTP Security Headers · Trivy · Container Scanning · Docker Image Security · OWASP ZAP · Burp Suite · BloodHound · Zeek · pfSense · API Security Validation",
  },
  {
    cat: "Cloud & Infrastructure",
    items: "Azure · Entra ID · AWS CloudWatch · Google Cloud · Kubernetes · Docker · Linux · Windows Server · Active Directory · VLANs · TCP/IP",
  },
  {
    cat: "Operations & Monitoring",
    items: "Grafana · Prometheus · Azure App Insights · Bash Scripting · Azure Logic Apps · Workflow Automation · Real-Time Alerting · Log Correlation · SolarWinds · Wireshark · n8n",
  },
  {
    cat: "AI-Assisted Tooling & Engineering",
    items: "Skywork AI · Suno AI · Highfield · n8n · Ideogram · Replit · Bolt · Base44 · TypeScript · React · Next.js · Supabase · PostgreSQL",
  },
  {
    cat: "ITSM & Support Tooling",
    items: "Jira · ServiceNow · BMC Remedy · MS SQL Server · Sysmon · Postman · Vercel · Git",
  },
  {
    cat: "Communication",
    items: "Technical writing · Stakeholder management · Incident communication · Cross-functional collaboration · Documentation · Training delivery · Executive briefings",
  },
  {
    cat: "Analytical",
    items: "Root cause analysis · Log correlation · Risk assessment · Data-driven troubleshooting · Process gap identification · Metrics reporting · Post-incident reviews",
  },
  {
    cat: "Product Thinking",
    items: "User research · Problem framing · Roadmap prioritisation · MVP scoping · Feedback loops · Market research · Product specs · Rapid prototyping",
  },
];

export default function Skills() {
  return (
    <section className="sec sec-alt" id="skills">
      <div className="wrap">
        <FadeIn>
          <div style={{ marginBottom: 48 }}>
            <div className="sec-num">Skills</div>
          </div>
        </FadeIn>

        <div>
          {SKILLS.map((s, i) => (
            <FadeIn key={s.cat} delay={i * 0.05}>
            <div className="skill-row">
              <div style={{
                fontSize: 12, fontWeight: 700, color: "var(--lt-fg)",
                letterSpacing: ".01em", paddingTop: 4,
              }}>
                {s.cat}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {s.items.split(" · ").map((item) => (
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
