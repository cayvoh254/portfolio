type Job = {
  year: string;
  role: string;
  company: string;
  where: string;
  period: string;
  desc: string;
  wins: string[];
  tags: string[];
};

const JOBS: Job[] = [
  {
    year: "2024",
    role: "Technical Support Engineer",
    company: "4R Digital Limited",
    where: "UK · Remote · Payments cloud platform",
    period: "Dec 2024 – Mar 2026",
    desc: "Primary technical contact for merchants on a payments-enabled cloud platform. Owned monitoring, Azure identity administration, API security validation, and workflow automation.",
    wins: [
      "Cut operational overhead by 40% through targeted automation",
      "Administered Azure and Entra ID across the merchant estate",
      "Ran OWASP ZAP assessments against platform APIs",
    ],
    tags: ["Azure", "Entra ID", "Grafana", "Prometheus", "OWASP ZAP", "Postman"],
  },
  {
    year: "2023",
    role: "Application Support Analyst",
    company: "Ateo Finance",
    where: "US · Remote · Regulated fintech / trading",
    period: "Dec 2023 – May 2025",
    desc: "Production support for US fintech trading platforms. Led incident investigation, SQL-based root cause analysis, and QA testing across staging and production.",
    wins: [
      "Reduced incident recurrence by 25% through structured post-mortems",
      "Cut engineering escalation response time by 20%",
    ],
    tags: ["SQL", "MS SQL Server", "Jira", "Log Analysis", "QA Testing"],
  },
  {
    year: "2022",
    role: "Technical Support Engineer",
    company: "KOKO Networks",
    where: "Nairobi, Kenya · Climate tech / IoT",
    period: "Apr 2022 – Aug 2024",
    desc: "Monitored a distributed IoT platform across 3,000+ field endpoints. Built automation that cut MTTR from 11 minutes to 3. Sustained 98% platform uptime across two years.",
    wins: [
      "MTTR: 11 min → 3 min via Python automation",
      "98% uptime across 3,000+ IoT endpoints",
      "50% faster troubleshooting through improved diagnostic tooling",
    ],
    tags: ["Python", "Grafana", "AWS CloudWatch", "SQL", "Postman"],
  },
  {
    year: "2020",
    role: "NOC Engineer",
    company: "Adrian Kenya Limited",
    where: "Nairobi, Kenya · Enterprise ISP",
    period: "Sep 2020 – Mar 2022",
    desc: "24/7 monitoring of enterprise network infrastructure: OLTs, core nodes, backhaul. 99% SLA adherence through structured escalation and field coordination.",
    wins: [
      "99% SLA adherence across enterprise accounts",
      "24/7 continuous coverage across the OLT estate",
    ],
    tags: ["BMC Remedy", "OLT", "Network Monitoring", "SLA Management"],
  },
  {
    year: "2017",
    role: "IT Support Engineer",
    company: "Decko Africa",
    where: "Nairobi, Kenya",
    period: "Oct 2017 – Jul 2020",
    desc: "End-to-end IT support across hardware, software, network, and virtualised infrastructure. Windows Server administration: Active Directory, Group Policy, Hyper-V.",
    wins: [],
    tags: ["Windows Server", "Active Directory", "GPO", "Virtualisation", "Hyper-V"],
  },
];

export default function Experience() {
  return (
    <section className="sec sec-alt" id="experience">
      <div className="wrap">
        <div style={{ marginBottom: 48 }}>
          <div className="sec-num">02 · Experience</div>
        </div>

        <div>
          {JOBS.map((job, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "72px 1fr",
                gap: "clamp(24px,4vw,48px)",
                paddingTop: i > 0 ? 36 : 0,
                paddingBottom: 36,
                borderBottom: i < JOBS.length - 1 ? "1px solid var(--lt-brd)" : "none",
              }}
            >
              {/* Year column */}
              <div style={{
                fontFamily: "var(--font-playfair, Georgia, serif)",
                fontSize: 13,
                color: "var(--lt-dim)",
                paddingTop: 4,
                fontStyle: "italic",
              }}>
                {job.year}
              </div>

              {/* Content */}
              <div>
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "flex-start", gap: 16, marginBottom: 4,
                }}>
                  <div>
                    <div style={{
                      fontSize: 16, fontWeight: 600, color: "var(--lt-fg)",
                      letterSpacing: "-.01em", marginBottom: 2,
                    }}>
                      {job.role}
                    </div>
                    <div style={{
                      fontSize: 13.5, fontWeight: 600,
                      color: "var(--gld)",
                      marginBottom: 1,
                    }}>
                      {job.company}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--lt-dim)" }}>
                      {job.where}
                    </div>
                  </div>
                  <div style={{
                    fontSize: 11.5, color: "var(--lt-dim)", whiteSpace: "nowrap",
                    paddingTop: 3, flexShrink: 0,
                  }}>
                    {job.period}
                  </div>
                </div>

                <p style={{
                  fontSize: 13.5, lineHeight: 1.78, color: "var(--lt-muted)",
                  marginTop: 12, maxWidth: "62ch",
                }}>
                  {job.desc}
                </p>

                {job.wins.length > 0 && (
                  <ul style={{ marginTop: 10, listStyle: "none", padding: 0 }}>
                    {job.wins.map(w => (
                      <li key={w} style={{
                        fontSize: 13, color: "var(--lt-muted)", lineHeight: 1.6,
                        paddingLeft: 14, position: "relative", marginBottom: 2,
                      }}>
                        <span style={{
                          position: "absolute", left: 0, top: ".6em",
                          width: 5, height: 1, background: "var(--lt-dim)",
                        }} />
                        {w}
                      </li>
                    ))}
                  </ul>
                )}

                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 14 }}>
                  {job.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
