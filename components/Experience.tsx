import { FadeIn } from "./FadeIn";

type Job = {
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
    role: "Technical Support Engineer",
    company: "4R Digital Limited",
    where: "UK · Remote · Cloud platform",
    period: "Dec 2024 – Mar 2026",
    desc: "Production support for a cloud-hosted SaaS platform blending software services with connected IoT hardware endpoints.",
    wins: [
      "Cut operational overhead 40% through targeted automation",
      "Administered Azure + Entra ID across the platform estate",
      "Ran OWASP ZAP assessments against platform APIs",
      "Maintained observability via Grafana + Prometheus",
    ],
    tags: ["Azure", "Entra ID", "Grafana", "Prometheus", "OWASP ZAP", "Postman"],
  },
  {
    role: "Application Support Analyst",
    company: "Ateo Finance",
    where: "US · Remote · Regulated fintech / trading",
    period: "Dec 2023 – May 2025",
    desc: "Production support for regulated US fintech trading platforms across staging and production.",
    wins: [
      "Reduced incident recurrence 25% through structured post-mortems",
      "Cut engineering escalation response time 20%",
      "Owned SQL root-cause analysis and end-to-end QA",
    ],
    tags: ["SQL", "MS SQL Server", "Jira", "Log Analysis", "QA Testing"],
  },
  {
    role: "Technical Support Engineer",
    company: "KOKO Networks",
    where: "Nairobi, Kenya · Climate tech / IoT",
    period: "Apr 2022 – Aug 2024",
    desc: "Monitoring and reliability for a distributed IoT platform across 3,000+ field endpoints.",
    wins: [
      "MTTR: 11 min → 3 min via Python automation",
      "98% uptime across 3,000+ IoT endpoints",
      "50% faster troubleshooting through improved tooling",
    ],
    tags: ["Python", "Grafana", "AWS CloudWatch", "SQL", "Postman"],
  },
  {
    role: "NOC Engineer",
    company: "Adrian Kenya Limited",
    where: "Nairobi, Kenya · Enterprise ISP",
    period: "Sep 2020 – Mar 2022",
    desc: "24/7 NOC monitoring of enterprise ISP infrastructure — OLTs, core nodes, and backhaul.",
    wins: [
      "99% SLA adherence across enterprise accounts",
      "24/7 continuous coverage across the OLT estate",
    ],
    tags: ["BMC Remedy", "OLT", "Network Monitoring", "SLA Management"],
  },
  {
    role: "IT Support Engineer",
    company: "Decko Africa",
    where: "Nairobi, Kenya",
    period: "Oct 2017 – Jul 2020",
    desc: "End-to-end IT support and Windows Server administration as the organisation's primary technical contact.",
    wins: [
      "Administered Active Directory, Group Policy, and Hyper-V",
    ],
    tags: ["Windows Server", "Active Directory", "GPO", "Virtualisation", "Hyper-V"],
  },
];

export default function Experience() {
  return (
    <section className="sec sec-alt" id="experience">
      <div className="wrap">
        <FadeIn>
          <div style={{ marginBottom: 32 }}>
            <div className="sec-num">Experience</div>
          </div>
        </FadeIn>

        <div className="exp-tl">
          {JOBS.map((job, i) => (
            <FadeIn key={i} delay={i * 0.06}>
            <div
              style={{
                position: "relative",
                paddingTop: i > 0 ? 36 : 0,
                paddingBottom: 36,
                borderBottom: i < JOBS.length - 1 ? "1px solid var(--lt-brd)" : "none",
              }}
            >
              <div aria-hidden="true" className="exp-tl-dot" />
              {/* Header row: role + period right-aligned */}
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "flex-start", flexWrap: "wrap", gap: "4px 16px",
                marginBottom: 6,
              }}>
                <div style={{
                  fontSize: 16, fontWeight: 600, color: "var(--lt-fg)",
                  letterSpacing: "-.01em",
                }}>
                  {job.role}
                </div>
                <div style={{ fontSize: 11.5, color: "var(--lt-dim)", flexShrink: 0, paddingTop: 2 }}>
                  {job.period}
                </div>
              </div>

              {/* Company + location */}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "3px 8px", marginBottom: 10 }}>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: "var(--gld)" }}>
                  {job.company}
                </span>
                <span style={{ fontSize: 11, color: "var(--lt-brd)" }}>·</span>
                <span style={{ fontSize: 12, color: "var(--lt-dim)" }}>
                  {job.where}
                </span>
              </div>

              <p style={{ fontSize: 13.5, lineHeight: 1.78, color: "var(--lt-muted)", marginBottom: 10 }}>
                {job.desc}
              </p>

              {job.wins.length > 0 && (
                <ul style={{ listStyle: "none", padding: 0, marginBottom: 12 }}>
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

              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {job.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
