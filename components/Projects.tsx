import { FadeIn } from "./FadeIn";

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
    href: "https://github.com/cayvoh254/lab-01-soc-wazuh-siem",
  },
  {
    name: "Web App & API Pentesting",
    status: "Live lab",
    stack: "Burp Suite · OWASP ZAP · API Security · OWASP Top 10",
    desc: "Ongoing OWASP Top 10 testing and API security labs: BOLA, rate limiting bypass, excessive data exposure, auth bypass. All findings documented in structured security reports.",
    href: "https://github.com/cayvoh254/lab-02-web-api-pentesting",
  },
  {
    name: "Home Network Security Lab",
    status: "Live lab",
    stack: "pfSense · VLANs · Zeek · Wireshark",
    desc: "pfSense firewall with strict inter-VLAN routing, Zeek for passive traffic analysis, Wireshark to verify isolation. Mirrors real enterprise network segmentation architecture.",
    href: "https://github.com/cayvoh254/lab-03-network-security-pfsense",
  },
  {
    name: "Active Directory Attack & Defense",
    status: "Live lab",
    stack: "Active Directory · BloodHound · Kerberoasting · Sysmon",
    desc: "Virtualised Windows Server AD environment. Practiced Kerberoasting, Pass-the-Hash, BloodHound enumeration, then hardened the same environment with Sysmon and event log analysis.",
    href: "https://github.com/cayvoh254/lab-04-active-directory-attack-defense",
  },
];

const PRODUCTS: Project[] = [
  {
    name: "GanjiFlow",
    status: "Beta",
    stack: "React · TypeScript · M-Pesa API",
    desc: "Privacy-first M-Pesa statement analyser. All parsing and computation runs locally in the browser; no financial data leaves the device. Built for the Kenyan mobile-money market.",
    href: "#",
  },
  {
    name: "Famio",
    status: "Beta",
    stack: "Firebase · Dart",
    desc: "Gamified family engagement app: shared challenges, progress tracking, milestone celebrations. From product strategy through working prototype.",
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
    name: "DebtHuru",
    status: "Stealth",
    stack: "React · Node.js · Mobile-first",
    desc: "Debt-freedom platform built for the East African market. Users map all their debts in one place, then the engine generates a personalised payoff plan using avalanche or snowball strategy, with local payment integrations, reminders, and a running tracker so progress feels real. 'Huru' means freedom in Swahili.",
    href: "#",
  },
];

function ProjCard({ p }: { p: Project }) {
  return (
    <a
      href={p.href}
      target={p.href !== "#" ? "_blank" : undefined}
      rel={p.href !== "#" ? "noopener noreferrer" : undefined}
      className="proj-card"
    >
      {/* Card top: badge only */}
      <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", marginBottom: 14 }}>
        <span className={BADGE[p.status]}>{p.status}</span>
      </div>

      {/* Card body — grows to fill */}
      <div style={{ flex: 1 }}>
        <div style={{
          fontSize: 15, fontWeight: 600, color: "var(--lt-fg)",
          letterSpacing: "-.01em", marginBottom: 6,
        }}>
          {p.name}
        </div>
        <div style={{
          fontSize: 11.5, color: "var(--gld)", fontWeight: 500,
          marginBottom: 10, letterSpacing: ".01em",
        }}>
          {p.stack}
        </div>
        <p style={{ fontSize: 13, color: "var(--lt-muted)", lineHeight: 1.72 }}>
          {p.desc}
        </p>
      </div>

      {/* Card footer */}
      <div style={{
        display: "flex", justifyContent: "flex-end", alignItems: "center",
        marginTop: 16, paddingTop: 12,
        borderTop: "1px solid var(--lt-brd)",
      }}>
        {p.href !== "#" ? (
          <svg viewBox="0 0 24 24" width={14} height={14} fill="none"
            stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
            style={{ color: "var(--gld)" }}>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width={14} height={14} fill="none"
            stroke="currentColor" strokeWidth={1.8} strokeLinecap="round"
            style={{ color: "var(--lt-brd)" }}>
            <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
          </svg>
        )}
      </div>
    </a>
  );
}

function ProjGroup({ title, num, projects }: { title: string; num: string; projects: Project[] }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <div style={{ marginBottom: 14 }}>
        <span style={{
          fontSize: 10, fontWeight: 700, letterSpacing: ".16em",
          textTransform: "uppercase", color: "var(--lt-dim)",
        }}>
          {title}
        </span>
      </div>

      <div className="proj-grid">
        {projects.map((p, i) => (
          <FadeIn key={p.name} delay={i * 0.07}>
            <ProjCard p={p} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="sec" id="projects">
      <div className="wrap">
        <FadeIn>
          <div style={{ marginBottom: 32 }}>
            <div className="sec-num">Projects</div>
          </div>
        </FadeIn>

        <ProjGroup title="Security Labs" num="A" projects={SECURITY} />
        <ProjGroup title="Products" num="B" projects={PRODUCTS} />
      </div>
    </section>
  );
}
