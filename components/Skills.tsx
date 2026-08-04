const SKILLS = [
  {
    category: "Security Operations",
    items: ["Wazuh / SIEM", "Log Analysis", "Detection Engineering", "Incident Response", "Threat Intelligence", "MITRE ATT&CK", "Container Scanning"],
  },
  {
    category: "Offensive Security",
    items: ["Penetration Testing", "Web App Testing", "API Security", "OWASP Top 10", "Burp Suite", "OWASP ZAP", "BloodHound", "Active Directory"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["Azure", "Entra ID", "AWS CloudWatch", "Google Cloud", "Kubernetes", "Docker", "Linux", "Windows Server", "pfSense", "VLANs"],
  },
  {
    category: "Monitoring & Automation",
    items: ["Grafana", "Prometheus", "Azure App Insights", "SolarWinds", "PRTG", "n8n", "Zapier", "Python", "Bash"],
  },
  {
    category: "Development",
    items: ["TypeScript", "React", "Next.js", "Flutter", "Dart", "Supabase", "Firebase", "REST APIs", "Postman", "SQL"],
  },
  {
    category: "ITSM & Tooling",
    items: ["Jira", "ServiceNow", "BMC Remedy", "MS SQL Server", "PostgreSQL", "Zeek", "Wireshark", "Sysmon", "Lovable"],
  },
];

export default function Skills() {
  return (
    <section className="sec" id="skills">
      <div className="slabel">Skills</div>
      <h2 className="stitle">Tools of the trade</h2>

      <div
        className="sk-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}
      >
        {SKILLS.map(({ category, items }) => (
          <div key={category} className="skill-block">
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: ".1em",
              textTransform: "uppercase", color: "var(--fg3)", marginBottom: 12,
            }}>
              {category}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {items.map(item => (
                <div key={item} style={{
                  fontSize: 13.5, color: "var(--fg2)", lineHeight: 1.5,
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  <span style={{
                    width: 4, height: 4, borderRadius: "50%",
                    background: "var(--brd2, #D0CCC7)", flexShrink: 0,
                  }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
