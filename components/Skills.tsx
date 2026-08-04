const SKILLS = [
  {
    cat: "Security Operations",
    items: "Wazuh · SIEM · Log Analysis · Detection Engineering · Incident Response · Threat Intelligence · MITRE ATT&CK · Container Scanning",
  },
  {
    cat: "Offensive Security",
    items: "Penetration Testing · Web App Testing · API Security · OWASP Top 10 · Burp Suite · OWASP ZAP · BloodHound · Kerberoasting · Active Directory",
  },
  {
    cat: "Cloud & Infrastructure",
    items: "Azure · Entra ID · AWS CloudWatch · Google Cloud · Kubernetes · Docker · Linux · Windows Server · pfSense · VLANs · TCP/IP",
  },
  {
    cat: "Monitoring & Automation",
    items: "Grafana · Prometheus · Azure App Insights · SolarWinds · PRTG · Zeek · Wireshark · n8n · Zapier · Python · Bash",
  },
  {
    cat: "Development",
    items: "TypeScript · React · Next.js · Flutter · Dart · Supabase · Firebase · REST APIs · SQL · PostgreSQL · Postman",
  },
  {
    cat: "ITSM & Tooling",
    items: "Jira · ServiceNow · BMC Remedy · MS SQL Server · Sysmon · Claude API · Lovable · Vercel · Git",
  },
];

export default function Skills() {
  return (
    <section className="sec sec-alt" id="skills">
      <div className="wrap">
        <div style={{ marginBottom: 48 }}>
          <div className="sec-num">04 — Skills</div>
        </div>

        <div>
          {SKILLS.map((s, i) => (
            <div key={s.cat} className="skill-row" style={{
              paddingBottom: i === SKILLS.length - 1 ? 0 : 18,
            }}>
              <div style={{
                fontSize: 12, fontWeight: 700, color: "var(--lt-fg)",
                letterSpacing: ".01em", paddingTop: 1,
              }}>
                {s.cat}
              </div>
              <div style={{
                fontSize: 13.5, color: "var(--lt-muted)", lineHeight: 1.7,
              }}>
                {s.items}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
