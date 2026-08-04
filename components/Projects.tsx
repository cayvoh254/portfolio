type Status = "Live lab" | "Shipped" | "Beta" | "In dev" | "Stealth";

type Project = {
  name: string;
  status: Status;
  desc: string;
  tags: string[];
  href: string;
};

const STATUS_CLASS: Record<Status, string> = {
  "Live lab": "status status-live",
  "Shipped":  "status status-shipped",
  "Beta":     "status status-beta",
  "In dev":   "status status-dev",
  "Stealth":  "status status-stealth",
};

const SECURITY: Project[] = [
  {
    name: "Home SOC Lab",
    status: "Live lab",
    desc: "Wazuh deployed across Linux and Windows hosts. Multi-source log ingestion, custom detection rules, Grafana dashboards, and a documented analyst workflow from raw signal to incident report.",
    tags: ["Wazuh", "SIEM", "Detection Engineering", "Grafana"],
    href: "https://github.com/cayvoh254",
  },
  {
    name: "Web App & API Pentesting",
    status: "Live lab",
    desc: "OWASP Top 10 testing with documented findings. API security covering BOLA, excessive data exposure, and rate limiting bypass. All work structured into professional security reports.",
    tags: ["Burp Suite", "OWASP ZAP", "API Security", "OWASP Top 10"],
    href: "https://github.com/cayvoh254",
  },
  {
    name: "Home Network Security Lab",
    status: "Live lab",
    desc: "pfSense firewall with strict inter-VLAN routing. Zeek for passive traffic analysis. Wireshark to verify VLAN isolation. Mirrors real enterprise network segmentation.",
    tags: ["pfSense", "VLANs", "Zeek", "Wireshark"],
    href: "https://github.com/cayvoh254",
  },
  {
    name: "Active Directory Attack & Defense",
    status: "Live lab",
    desc: "Virtualised Windows Server AD environment. Practiced Kerberoasting, Pass-the-Hash, and BloodHound enumeration — then hardened the same environment with Sysmon and event log analysis.",
    tags: ["Active Directory", "BloodHound", "Kerberoasting", "Sysmon"],
    href: "https://github.com/cayvoh254",
  },
];

const PRODUCTS: Project[] = [
  {
    name: "AI Appointment Reminder",
    status: "Shipped",
    desc: "Fully deployed SaaS product. Claude API for natural-language scheduling, n8n for automation, Supabase as the backend. Calendar integration and automated follow-up flows.",
    tags: ["Claude API", "n8n", "Supabase", "SaaS"],
    href: "#",
  },
  {
    name: "GanjiFlow",
    status: "Beta",
    desc: "Privacy-first M-Pesa statement analyser. All parsing and calculations run locally in the browser — no data leaves the device. Built for the Kenyan mobile-money market.",
    tags: ["React", "TypeScript", "M-Pesa", "Privacy-first"],
    href: "#",
  },
  {
    name: "Famio",
    status: "Beta",
    desc: "Gamified family engagement app. Shared challenges, progress tracking, milestone celebrations. Flutter and Firebase, from product strategy through working prototype.",
    tags: ["Flutter", "Firebase", "Mobile", "Gamification"],
    href: "#",
  },
  {
    name: "NamePrint",
    status: "In dev",
    desc: "Platform for parents to explore baby names by cultural origin, meaning, and phonetics — with shortlisting and comparison tools. Designed for one of the most meaningful decisions families make.",
    tags: ["Web App", "Product Design", "UX"],
    href: "#",
  },
  {
    name: "Bedhuvu",
    status: "Stealth",
    desc: "Early-stage product in development. Full details coming soon.",
    tags: ["In progress"],
    href: "#",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const isExternal = project.href !== "#";
  return (
    <div className="proj-card">
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "flex-start", marginBottom: 12,
      }}>
        <span className={STATUS_CLASS[project.status]}>{project.status}</span>
        {isExternal && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--fg3)", transition: "color .15s",
              display: "flex", alignItems: "center",
            }}
            title="View project"
          >
            <svg viewBox="0 0 24 24" width={14} height={14} fill="none"
              stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        )}
      </div>

      <div style={{
        fontFamily: "var(--font-playfair, Georgia, serif)",
        fontSize: 17, color: "var(--fg)", marginBottom: 8,
        letterSpacing: "-.02em", lineHeight: 1.2,
      }}>
        {project.name}
      </div>

      <p style={{
        fontSize: 13.5, lineHeight: 1.72, color: "var(--fg2)", flexGrow: 1,
      }}>
        {project.desc}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 14 }}>
        {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="sec" id="projects">
      <div className="slabel">Projects</div>
      <h2 className="stitle">Things I&apos;ve built</h2>

      {/* Security labs */}
      <div style={{ marginBottom: 14 }}>
        <div style={{
          fontSize: 10.5, fontWeight: 700, letterSpacing: ".12em",
          textTransform: "uppercase", color: "var(--fg3)", marginBottom: 16,
        }}>
          Security labs
        </div>
        <div
          className="proj-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
        >
          {SECURITY.map(p => <ProjectCard key={p.name} project={p} />)}
        </div>
      </div>

      {/* Products */}
      <div style={{ marginTop: 40 }}>
        <div style={{
          fontSize: 10.5, fontWeight: 700, letterSpacing: ".12em",
          textTransform: "uppercase", color: "var(--fg3)", marginBottom: 16,
        }}>
          Products
        </div>
        <div
          className="proj-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
        >
          {PRODUCTS.map(p => <ProjectCard key={p.name} project={p} />)}
        </div>
      </div>
    </section>
  );
}
