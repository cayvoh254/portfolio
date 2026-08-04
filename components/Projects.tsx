type Status = "Active Lab" | "Shipped" | "Beta" | "In Dev";

type Project = {
  icon: string;
  status: Status;
  name: string;
  desc: string;
  tags: string[];
};

const STATUS_STYLES: Record<Status, { bg: string; color: string }> = {
  "Active Lab": { bg: "#ecfdf5", color: "#059669" },
  "Shipped":    { bg: "#eff6ff", color: "#2563eb" },
  "Beta":       { bg: "#fefce8", color: "#ca8a04" },
  "In Dev":     { bg: "#f9fafb", color: "#9ca3af" },
};

const PROJECTS: Project[] = [
  {
    icon: "🛡️", status: "Active Lab", name: "Home SOC Lab",
    desc: "Deployed Wazuh across Linux and Windows hosts. Multi-source log ingestion, custom detection rules, Grafana dashboards for real-time visibility. Full analyst workflow from signal to investigation.",
    tags: ["Wazuh", "SIEM", "Detection Engineering", "Log Analysis"],
  },
  {
    icon: "🔍", status: "Active Lab", name: "Web App & API Pentesting",
    desc: "OWASP Top 10 testing — XSS, SQL injection, IDOR, auth bypass. API security labs covering BOLA, rate limiting bypass, excessive data exposure. Documented with structured security reports.",
    tags: ["OWASP ZAP", "Burp Suite", "API Security", "Pentesting"],
  },
  {
    icon: "🌐", status: "Active Lab", name: "Home Network Security Lab",
    desc: "pfSense firewall with strict inter-VLAN routing. Zeek for passive network traffic analysis. Wireshark to validate flows and confirm VLAN isolation. Mirrors enterprise network segmentation.",
    tags: ["pfSense", "VLANs", "Zeek", "Wireshark"],
  },
  {
    icon: "🏰", status: "Active Lab", name: "Active Directory Attack & Defense",
    desc: "Virtualized Windows Server AD. Practiced Kerberoasting, Pass-the-Hash, BloodHound enumeration. Defensive hardening with Sysmon and event log analysis.",
    tags: ["Active Directory", "BloodHound", "Kerberoasting", "Sysmon"],
  },
  {
    icon: "🤖", status: "Shipped", name: "AI Appointment Reminder SaaS",
    desc: "Claude API for natural language, n8n for automation, Supabase backend. Full product from concept to deployed MVP with calendar integrations and automated follow-ups.",
    tags: ["Claude API", "n8n", "Supabase", "SaaS"],
  },
  {
    icon: "💰", status: "Beta", name: "GanjiFlow",
    desc: "Privacy-first M-Pesa statement analyzer. All parsing and computation local in the browser — no data leaves your device. Financial analytics built on trust.",
    tags: ["React", "TypeScript", "Privacy-First", "M-Pesa"],
  },
  {
    icon: "👨‍👩‍👧", status: "Beta", name: "Famio",
    desc: "Gamified family app — shared challenges, progress tracking, milestone celebrations. Flutter and Firebase, from product strategy to working prototype.",
    tags: ["Flutter", "Firebase", "Mobile", "Gamification"],
  },
  {
    icon: "🔎", status: "In Dev", name: "NamePrint",
    desc: "Platform for parents to discover baby names by cultural origin, meaning, and phonetics. Build and compare shortlists for one of life's most meaningful decisions.",
    tags: ["Web App", "Product Design", "UX"],
  },
];

export default function Projects() {
  return (
    <section className="sec" id="projects">
      <div className="slabel">Projects</div>
      <div className="stitle">Things I&apos;ve built</div>

      <div
        className="proj-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
      >
        {PROJECTS.map(({ icon, status, name, desc, tags }) => {
          const st = STATUS_STYLES[status];
          return (
            <div key={name} className="pc">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <span style={{ fontSize: 24 }}>{icon}</span>
                <span
                  style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: ".04em",
                    textTransform: "uppercase", padding: "3px 9px", borderRadius: 20,
                    background: st.bg, color: st.color,
                  }}
                >
                  {status}
                </span>
              </div>

              <div
                style={{
                  fontFamily: "var(--font-dm-serif, 'DM Serif Display', Georgia, serif)",
                  fontSize: 16, color: "var(--t1)", marginBottom: 8, letterSpacing: "-.01em",
                }}
              >
                {name}
              </div>

              <p style={{ fontSize: 13, lineHeight: 1.65, color: "var(--t2)" }}>{desc}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 12 }}>
                {tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11, fontWeight: 500, padding: "2px 9px",
                      borderRadius: 4, background: "var(--blue-l)", color: "var(--blue)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
