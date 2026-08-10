import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Skills",
  description: "Full technical skills inventory across security operations, cloud infrastructure, IT support, and development.",
};

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

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68 }}>
        <section className="sec">
          <div className="wrap">

            <FadeIn>
              <Link
                href="/"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 12.5, fontWeight: 600, color: "var(--lt-muted)",
                  textDecoration: "none", marginBottom: 40,
                }}
              >
                <svg viewBox="0 0 16 16" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path d="M13 8H3M8 3l-5 5 5 5"/>
                </svg>
                Kevin Gitau
              </Link>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="sec-num" style={{ marginBottom: 32 }}>Skills</div>
            </FadeIn>

            <div>
              {SKILLS.map((s, i) => (
                <FadeIn key={s.cat} delay={i * 0.04}>
                  <div className="skill-row">
                    <div style={{
                      fontSize: 12, fontWeight: 700, color: "var(--lt-fg)",
                      letterSpacing: ".01em", paddingTop: 4,
                    }}>
                      {s.cat}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {s.items.split(" · ").map(item => (
                        <span key={item} className="skill-pill">{item}</span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
