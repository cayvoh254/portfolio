type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  desc: string;
  highlights: string[];
  tags: string[];
};

const JOBS: Job[] = [
  {
    role: "Technical Support Engineer",
    company: "4R Digital Limited",
    location: "Remote · UK · Payments-enabled cloud platform",
    period: "Dec 2024 – Mar 2026",
    desc: "Primary technical contact for merchants on a payments-enabled cloud platform. Owned platform health monitoring, Azure identity administration, API validation, and workflow automation.",
    highlights: [
      "Reduced operational overhead by 40% through automation",
      "Administered Azure and Entra ID across the merchant estate",
      "Ran OWASP ZAP security assessments against platform APIs",
    ],
    tags: ["Azure", "Entra ID", "Grafana", "Prometheus", "OWASP ZAP", "Postman"],
  },
  {
    role: "Application Support Analyst",
    company: "Ateo Finance",
    location: "Remote · US · Fintech trading platform",
    period: "Dec 2023 – May 2025",
    desc: "Technical support for regulated US fintech trading platforms. Led production incident investigation, SQL-based root cause analysis, and cross-team QA testing across staging and production environments.",
    highlights: [
      "Cut incident recurrence by 25% through structured post-mortems",
      "Reduced engineering escalation response time by 20%",
    ],
    tags: ["SQL", "MS SQL Server", "Jira", "Log Analysis", "QA Testing"],
  },
  {
    role: "Technical Support Engineer",
    company: "KOKO Networks Limited",
    location: "Nairobi, Kenya · Climate tech / IoT",
    period: "Apr 2022 – Aug 2024",
    desc: "Monitored a distributed IoT platform across 3,000+ field endpoints. Built Python automation that cut MTTR from 11 minutes to 3, dramatically reduced field dispatch costs, and sustained 98% platform uptime.",
    highlights: [
      "MTTR reduced from 11 min to 3 min via Python-based automation",
      "98% uptime across 3,000+ IoT endpoints",
      "50% faster troubleshooting through improved diagnostic tooling",
    ],
    tags: ["Python", "Grafana", "AWS CloudWatch", "SQL", "Postman"],
  },
  {
    role: "NOC Engineer",
    company: "Adrian Kenya Limited",
    location: "Nairobi, Kenya · Enterprise ISP",
    period: "Sep 2020 – Mar 2022",
    desc: "24/7 monitoring of enterprise network infrastructure — OLTs, core nodes, and backhaul links. 99% SLA adherence through structured escalation and field coordination.",
    highlights: [
      "99% SLA adherence across enterprise accounts",
      "24/7 continuous network coverage across OLT estate",
    ],
    tags: ["BMC Remedy", "OLT", "Network Monitoring", "SLA Management"],
  },
  {
    role: "IT Support Engineer",
    company: "Decko Africa",
    location: "Nairobi, Kenya",
    period: "Oct 2017 – Jul 2020",
    desc: "End-to-end IT support — hardware, software, network, and virtualised infrastructure. Windows Server administration with Active Directory, Group Policy, and virtualisation environments.",
    highlights: [],
    tags: ["Windows Server", "Active Directory", "GPO", "Virtualisation"],
  },
];

export default function Experience() {
  return (
    <section className="sec" id="experience">
      <div className="slabel">Experience</div>
      <h2 className="stitle">Where I&apos;ve worked</h2>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {JOBS.map((job, i) => (
          <div
            key={i}
            style={{
              padding: "28px 0",
              borderTop: "1px solid var(--brd)",
              borderBottom: i === JOBS.length - 1 ? "1px solid var(--brd)" : "none",
            }}
          >
            <div
              className="exp-row"
              style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 20, alignItems: "start" }}
            >
              <div>
                <div style={{
                  fontSize: 16.5, fontWeight: 600, color: "var(--fg)",
                  letterSpacing: "-.01em", marginBottom: 3,
                }}>
                  {job.role}
                </div>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--accent)", marginBottom: 2 }}>
                  {job.company}
                </div>
                <div style={{ fontSize: 12, color: "var(--fg3)" }}>{job.location}</div>
              </div>
              <div style={{
                fontSize: 12, fontWeight: 500, color: "var(--fg3)",
                whiteSpace: "nowrap", paddingTop: 2,
              }}>
                {job.period}
              </div>
            </div>

            <p style={{
              fontSize: 14, lineHeight: 1.78, color: "var(--fg2)",
              marginTop: 12, maxWidth: "64ch",
            }}>
              {job.desc}
            </p>

            {job.highlights.length > 0 && (
              <ul style={{ margin: "10px 0 0 0", padding: 0, listStyle: "none" }}>
                {job.highlights.map(h => (
                  <li key={h} style={{
                    fontSize: 13.5, color: "var(--fg2)", lineHeight: 1.6,
                    paddingLeft: 16, position: "relative", marginBottom: 2,
                  }}>
                    <span style={{
                      position: "absolute", left: 0, top: "0.55em",
                      width: 5, height: 1, background: "var(--fg3)",
                    }} />
                    {h}
                  </li>
                ))}
              </ul>
            )}

            <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 14 }}>
              {job.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
