const SKILLS = [
  { title: "Networking",      items: "TCP/IP, Routing & Switching, VLANs, LAN/WAN, DNS, VPN, Monitoring" },
  { title: "Cloud",           items: "Azure, Entra ID, AWS, Google Cloud, Kubernetes, Container Security" },
  { title: "Security",        items: "Web App Testing, API Pentesting, Container Scanning, SIEM, Log Analysis" },
  { title: "Security Tooling",items: "Trivy, Docker Scout, OWASP ZAP, Burp Suite, Wazuh, MobSF, Postman" },
  { title: "Scripting",       items: "Linux CLI, Bash Scripting, Python" },
  { title: "Monitoring",      items: "Grafana, Prometheus, Azure App Insights, CloudWatch, SolarWinds, PRTG" },
  { title: "Builder Tools",   items: "Claude API, n8n, Supabase, Flutter, Vercel, Zapier, Lovable" },
  { title: "Data & ITSM",     items: "SQL, PostgreSQL, MS SQL Server, Jira, ServiceNow, BMC Remedy" },
];

export default function Skills() {
  return (
    <section className="sec" id="skills">
      <div className="slabel">Skills</div>
      <div className="stitle">Tech stack</div>

      <div
        className="sk-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}
      >
        {SKILLS.map(({ title, items }) => (
          <div
            key={title}
            style={{
              background: "var(--w)", border: "1px solid var(--bd)",
              borderRadius: 10, padding: "14px 16px",
            }}
          >
            <div
              style={{
                fontSize: 11, fontWeight: 700, letterSpacing: ".08em",
                textTransform: "uppercase", color: "var(--blue)", marginBottom: 7,
              }}
            >
              {title}
            </div>
            <div style={{ fontSize: 12.5, lineHeight: 1.7, color: "var(--t2)" }}>
              {items}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
