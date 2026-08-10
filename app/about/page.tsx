import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background in network operations, cloud platform support, regulated fintech, and large-scale IoT. Security running in parallel across SIEM, penetration testing, and Active Directory hardening.",
};

const TECH_GROUPS = [
  {
    label: "Support & Operations",
    items: ["Azure", "Entra ID", "Grafana", "Prometheus", "Linux", "Python", "Docker", "Kubernetes", "SQL", "Postman", "Jira", "ServiceNow", "Confluence"],
  },
  {
    label: "Security & Ethical Hacking",
    items: ["Wazuh", "Burp Suite", "OWASP ZAP", "BloodHound", "Impacket", "hashcat", "Hydra", "Zeek", "pfSense", "Sysmon", "nmap", "Metasploit"],
  },
];

const TRACKS = [
  {
    label: "Operations & Support",
    text: "Network operations, IT support, and application support across enterprise ISP, regulated fintech, and large-scale IoT. Incident ownership, root-cause analysis via distributed log and SQL investigation, monitoring automation, and stakeholder communication under pressure.",
  },
  {
    label: "Security",
    text: "SIEM deployment and custom detection engineering, web application and API penetration testing, Active Directory attack-path enumeration and hardening, container vulnerability scanning. Lab findings documented to professional report standard with MITRE ATT&CK mapping and CVSS scoring.",
  },
  {
    label: "Building",
    text: "Independent product development alongside the engineering track: financial tooling, mobile applications, and automation platforms from conception through production deployment.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68 }}>
        <section className="sec">
          <div className="wrap">

            {/* Back link */}
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
              <div className="sec-num" style={{ marginBottom: 20 }}>About</div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(48px,7vw,96px)", alignItems: "start" }}>

                {/* Left */}
                <div>
                  <p style={{
                    fontFamily: "var(--font-playfair, Georgia, serif)",
                    fontSize: "clamp(20px,2.5vw,26px)",
                    color: "var(--lt-fg)",
                    lineHeight: 1.4,
                    letterSpacing: "-.02em",
                    fontWeight: 400,
                    marginBottom: 32,
                  }}>
                    Production operations experience across enterprise
                    infrastructure, regulated fintech, and IoT at scale.
                    Security built on real systems knowledge, not lab theory.
                  </p>

                  <p style={{ fontSize: 14.5, lineHeight: 1.82, color: "var(--lt-muted)", marginBottom: 22 }}>
                    Background spanning network operations (NOC), IT support, and
                    application support across enterprise ISP infrastructure, regulated
                    fintech trading platforms, and large-scale IoT deployments.
                    Operational fluency: distributed log analysis, Grafana and Prometheus
                    dashboards, API fault diagnosis, SQL root-cause investigation, Linux
                    administration, and ITSM workflows in ServiceNow, Jira, and
                    Confluence. Technical documentation produced to engineer and
                    stakeholder standard across all environments.
                  </p>

                  <p style={{ fontSize: 14.5, lineHeight: 1.82, color: "var(--lt-muted)", marginBottom: 22 }}>
                    Security track running in parallel: Wazuh SIEM deployment and custom
                    detection engineering, web application and API penetration testing
                    against OWASP Top 10 and API Security Top 10, Active Directory
                    attack-path enumeration and hardening, container vulnerability
                    scanning. All lab work documented to professional report standard with
                    MITRE ATT&amp;CK mapping, CVSS scoring, and remediation guidance.
                  </p>

                  <p style={{ fontSize: 14.5, lineHeight: 1.82, color: "var(--lt-muted)" }}>
                    Independent product development alongside the engineering track:
                    financial tooling for the Kenyan mobile-money market, family
                    engagement applications, and debt management platforms for the East
                    African market. B.Sc. Business Information Technology, JKUAT
                    (Second Class Upper).
                  </p>
                </div>

                {/* Right */}
                <div>
                  {TRACKS.map(({ label, text }, i) => (
                    <div key={label} style={{
                      paddingTop: i > 0 ? 24 : 0,
                      paddingBottom: 24,
                      borderBottom: "1px solid var(--lt-brd)",
                    }}>
                      <div style={{
                        fontSize: 11, fontWeight: 700, letterSpacing: ".14em",
                        textTransform: "uppercase", color: "var(--gld)", marginBottom: 8,
                      }}>
                        {label}
                      </div>
                      <p style={{ fontSize: 13.5, lineHeight: 1.75, color: "var(--lt-muted)" }}>
                        {text}
                      </p>
                    </div>
                  ))}

                  <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 20 }}>
                    {TECH_GROUPS.map(({ label, items }) => (
                      <div key={label}>
                        <div style={{
                          fontSize: 10, fontWeight: 700, letterSpacing: ".16em",
                          textTransform: "uppercase", color: "var(--lt-dim)", marginBottom: 10,
                        }}>
                          {label}
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                          {items.map(t => <span key={t} className="tag">{t}</span>)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
