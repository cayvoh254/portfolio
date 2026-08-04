type Status = "Live lab" | "Shipped" | "Beta" | "In dev" | "Stealth";

type Project = {
  name: string;
  status: Status;
  stack: string;
  desc: string;
  href: string;
};

const BADGE: Record<Status, string> = {
  "Live lab": "badge badge-live",
  "Shipped":  "badge badge-shipped",
  "Beta":     "badge badge-beta",
  "In dev":   "badge badge-dev",
  "Stealth":  "badge badge-stealth",
};

const SECURITY: Project[] = [
  {
    name: "Home SOC Lab",
    status: "Live lab",
    stack: "Wazuh · SIEM · Grafana · Detection Engineering",
    desc: "Wazuh deployed across Linux and Windows hosts with multi-source log ingestion, custom detection rules, and Grafana dashboards. Full analyst workflow from signal through investigation.",
    href: "https://github.com/cayvoh254",
  },
  {
    name: "Web App & API Pentesting",
    status: "Live lab",
    stack: "Burp Suite · OWASP ZAP · API Security · OWASP Top 10",
    desc: "Ongoing OWASP Top 10 testing and API security labs — BOLA, rate limiting bypass, excessive data exposure, auth bypass. All findings documented in structured security reports.",
    href: "https://github.com/cayvoh254",
  },
  {
    name: "Home Network Security Lab",
    status: "Live lab",
    stack: "pfSense · VLANs · Zeek · Wireshark",
    desc: "pfSense firewall with strict inter-VLAN routing, Zeek for passive traffic analysis, Wireshark to verify isolation. Mirrors real enterprise network segmentation architecture.",
    href: "https://github.com/cayvoh254",
  },
  {
    name: "Active Directory Attack & Defense",
    status: "Live lab",
    stack: "Active Directory · BloodHound · Kerberoasting · Sysmon",
    desc: "Virtualised Windows Server AD environment. Practiced Kerberoasting, Pass-the-Hash, BloodHound enumeration — then hardened the same environment with Sysmon and event log analysis.",
    href: "https://github.com/cayvoh254",
  },
];

const PRODUCTS: Project[] = [
  {
    name: "AI Appointment Reminder",
    status: "Shipped",
    stack: "Claude API · n8n · Supabase",
    desc: "Deployed SaaS product. Natural-language scheduling via Claude, n8n for automation, Supabase backend. Calendar integrations and automated follow-up flows.",
    href: "#",
  },
  {
    name: "GanjiFlow",
    status: "Beta",
    stack: "React · TypeScript · M-Pesa API",
    desc: "Privacy-first M-Pesa statement analyser. All parsing and computation runs locally in the browser — no financial data leaves the device. Built for the Kenyan mobile-money market.",
    href: "#",
  },
  {
    name: "Famio",
    status: "Beta",
    stack: "Flutter · Firebase",
    desc: "Gamified family engagement app — shared challenges, progress tracking, milestone celebrations. From product strategy through working prototype.",
    href: "#",
  },
  {
    name: "NamePrint",
    status: "In dev",
    stack: "Web App · React",
    desc: "Platform for parents to explore baby names by cultural origin, meaning, and phonetics, with shortlisting and side-by-side comparison tools.",
    href: "#",
  },
  {
    name: "Bedhuvu",
    status: "Stealth",
    stack: "In development",
    desc: "Early-stage product. Details coming soon.",
    href: "#",
  },
];

function ProjGroup({ title, num, projects }: { title: string; num: string; projects: Project[] }) {
  return (
    <div style={{ marginBottom: 56 }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 14, marginBottom: 0,
      }}>
        <span style={{
          fontSize: 10, fontWeight: 700, letterSpacing: ".16em",
          textTransform: "uppercase", color: "var(--lt-dim)",
        }}>
          {num} — {title}
        </span>
      </div>

      <div>
        {projects.map((p, i) => (
          <div key={p.name} className="proj-row">
            {/* Number */}
            <span style={{
              fontSize: 11, color: "var(--lt-dim)", fontWeight: 500,
              paddingTop: 3, fontVariantNumeric: "tabular-nums",
            }}>
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Content */}
            <div>
              <div style={{
                display: "flex", alignItems: "center", gap: 10, marginBottom: 4,
              }}>
                <span style={{
                  fontSize: 15, fontWeight: 600, color: "var(--lt-fg)",
                  letterSpacing: "-.01em",
                }}>
                  {p.name}
                </span>
                <span className={BADGE[p.status]}>{p.status}</span>
              </div>
              <div style={{
                fontSize: 11.5, color: "var(--gld)", fontWeight: 500,
                marginBottom: 7, letterSpacing: ".01em",
              }}>
                {p.stack}
              </div>
              <p style={{
                fontSize: 13.5, color: "var(--lt-muted)", lineHeight: 1.72, maxWidth: "62ch",
              }}>
                {p.desc}
              </p>
            </div>

            {/* Arrow */}
            <div className="proj-arrow" style={{ paddingTop: 4 }}>
              {p.href !== "#" ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--lt-dim)", display: "flex" }}
                  title="View project"
                >
                  <svg viewBox="0 0 24 24" width={15} height={15} fill="none"
                    stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              ) : (
                <span style={{ color: "var(--lt-brd)", display: "flex" }}>
                  <svg viewBox="0 0 24 24" width={15} height={15} fill="none"
                    stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
                    <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
                  </svg>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="sec" id="projects">
      <div className="wrap">
        <div style={{ marginBottom: 48 }}>
          <div className="sec-num">03 — Projects</div>
        </div>

        <ProjGroup title="Security Labs" num="A" projects={SECURITY} />
        <ProjGroup title="Products" num="B" projects={PRODUCTS} />
      </div>
    </section>
  );
}
