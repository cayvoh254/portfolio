type Metric = { value: string; rest: string };
type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  desc: string;
  metrics: Metric[];
  tags: string[];
};

const JOBS: Job[] = [
  {
    role: "Technical Support Engineer",
    company: "4R Digital Limited",
    location: "Remote, UK · Payments-enabled cloud platform",
    period: "Dec 2024 – Mar 2026",
    desc: "Primary technical contact for merchants on a payments-enabled cloud platform. Owned platform health monitoring, Azure identity administration, API validation, and workflow automation in a distributed remote environment.",
    metrics: [
      { value: "40%", rest: " overhead reduced" },
      { value: "Azure + Entra ID", rest: " identity ownership" },
      { value: "OWASP ZAP", rest: " API security testing" },
    ],
    tags: ["Azure", "Entra ID", "Grafana", "Prometheus", "OWASP ZAP", "Postman"],
  },
  {
    role: "Application Support Analyst",
    company: "Ateo Finance",
    location: "Remote, US · Fintech trading platform",
    period: "Dec 2023 – May 2025",
    desc: "Technical support for financial trading platforms in a regulated US fintech environment. Owned production incident investigation, SQL-based root cause analysis, and QA testing across staging and production.",
    metrics: [
      { value: "25%", rest: " incident recurrence reduced" },
      { value: "20%", rest: " faster engineering response" },
    ],
    tags: ["SQL", "MS SQL Server", "Jira", "Log Analysis", "QA Testing"],
  },
  {
    role: "Technical Support Engineer",
    company: "KOKO Networks Limited",
    location: "Nairobi, Kenya · Climate tech / IoT",
    period: "Apr 2022 – Aug 2024",
    desc: "Monitored a distributed IoT platform across 3,000+ endpoints. Drove significant reductions in MTTR and field dispatch costs through Python automation and structured incident response. Sustained 98% platform uptime.",
    metrics: [
      { value: "11→3 min", rest: " MTTR improvement" },
      { value: "98%", rest: " platform uptime" },
      { value: "50%", rest: " faster troubleshooting" },
    ],
    tags: ["Python", "Grafana", "AWS CloudWatch", "SQL", "Postman"],
  },
  {
    role: "NOC Engineer",
    company: "Adrian Kenya Limited",
    location: "Nairobi, Kenya · Enterprise ISP",
    period: "Sep 2020 – Mar 2022",
    desc: "24/7 monitoring of enterprise network infrastructure including OLTs and core nodes. 99% SLA adherence through structured escalation and coordinated field response.",
    metrics: [
      { value: "99%", rest: " SLA adherence" },
      { value: "24/7", rest: " continuous coverage" },
    ],
    tags: ["BMC Remedy", "OLT", "Network Monitoring", "SLA"],
  },
  {
    role: "IT Support Engineer",
    company: "Decko Africa LTD",
    location: "Nairobi, Kenya",
    period: "Oct 2017 – Jul 2020",
    desc: "End-to-end IT support — hardware, software, network, and virtualised infrastructure. Windows Server administration including Active Directory, GPO, and virtualisation environments.",
    metrics: [],
    tags: ["Windows Server", "Active Directory", "GPO", "Virtualisation"],
  },
];

export default function Experience() {
  return (
    <section className="sec" id="experience">
      <div className="slabel">Experience</div>
      <div className="stitle">Where I&apos;ve worked</div>

      {JOBS.map((job, i) => (
        <div
          key={i}
          style={{
            padding: "24px 0",
            borderTop: "1px solid var(--bd)",
            borderBottom: i === JOBS.length - 1 ? "1px solid var(--bd)" : "none",
          }}
        >
          {/* Header row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "start" }}>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-dm-serif, 'DM Serif Display', Georgia, serif)",
                  fontSize: 18, color: "var(--t1)", letterSpacing: "-.01em",
                }}
              >
                {job.role}
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--blue)", marginTop: 3 }}>
                {job.company}
              </div>
              <div style={{ fontSize: 12, color: "var(--t3)", marginTop: 2 }}>
                {job.location}
              </div>
            </div>
            <div
              style={{
                fontSize: 12, fontWeight: 500, color: "var(--t3)",
                whiteSpace: "nowrap", paddingTop: 3, textAlign: "right",
              }}
            >
              {job.period}
            </div>
          </div>

          {/* Description */}
          <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--t2)", marginTop: 10, maxWidth: "60ch" }}>
            {job.desc}
          </p>

          {/* Metrics */}
          {job.metrics.length > 0 && (
            <div style={{ display: "flex", gap: 18, marginTop: 12, flexWrap: "wrap" }}>
              {job.metrics.map(({ value, rest }) => (
                <span key={value} style={{ fontSize: 13, color: "var(--t2)" }}>
                  <strong style={{ color: "var(--t1)", fontWeight: 700 }}>{value}</strong>{rest}
                </span>
              ))}
            </div>
          )}

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 12 }}>
            {job.tags.map(tag => (
              <span key={tag} className="pill">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
