type Cert = { name: string; issuer: string; year: string };

const CERT_GROUPS: { category: string; certs: Cert[] }[] = [
  {
    category: "API & Application Security",
    certs: [
      { name: "APIsec Certified Practitioner",    issuer: "APIsec University", year: "2026" },
      { name: "OWASP API Security Top 10",         issuer: "APIsec University", year: "2026" },
    ],
  },
  {
    category: "Cybersecurity",
    certs: [
      { name: "Google Cybersecurity Specialization",  issuer: "Google / Coursera",  year: "2024" },
      { name: "Certified Ethical Hacker (prep)",      issuer: "Cisco",              year: "2024" },
      { name: "Cybersecurity Training Programme",     issuer: "Lateral Connect",    year: "2025" },
      { name: "Threat Intelligence Analysis",         issuer: "ArcX",               year: "2025" },
      { name: "Penetration Testing, IR & Forensics",  issuer: "IBM",                year: "2023" },
      { name: "Operationalizing MITRE ATT&CK",        issuer: "AttackIQ Academy",   year: "2023" },
    ],
  },
  {
    category: "Networking",
    certs: [
      { name: "Network Security & Firewall Technologies", issuer: "Cisco",          year: "2024" },
      { name: "CCNA Switching & Routing",                 issuer: "Cisco",          year: "2014" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    certs: [
      { name: "AZ-104 Azure Administrator (prep)",    issuer: "Whizlabs",           year: "2025" },
      { name: "Introduction to Kubernetes",           issuer: "Linux Foundation",   year: "2025" },
    ],
  },
];

export default function Certifications() {
  return (
    <section className="sec" id="certifications">
      {/* Header */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr auto",
        gap: 20, alignItems: "end", marginBottom: 48,
      }}>
        <div>
          <div className="slabel">Certifications</div>
          <h2 className="stitle" style={{ marginBottom: 0 }}>
            30+ credentials
          </h2>
        </div>
        <a
          href="https://www.credly.com/users/kevin-kibe"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          style={{ alignSelf: "center", flexShrink: 0 }}
        >
          <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor">
            <path d="M12 2L3.5 6.5v5.25C3.5 16.85 7.2 21.6 12 23c4.8-1.4 8.5-6.15 8.5-11.25V6.5L12 2z"/>
          </svg>
          View all on Credly
        </a>
      </div>

      {/* Groups */}
      <div
        className="cert-cols"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 60px" }}
      >
        {CERT_GROUPS.map(({ category, certs }) => (
          <div key={category} style={{ marginBottom: 36 }}>
            <div style={{
              fontSize: 10.5, fontWeight: 700, letterSpacing: ".12em",
              textTransform: "uppercase", color: "var(--fg3)",
              paddingBottom: 12, borderBottom: "1px solid var(--brd)",
              marginBottom: 0,
            }}>
              {category}
            </div>
            {certs.map(({ name, issuer, year }) => (
              <div key={name} className="cert-row">
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 500, color: "var(--fg)", lineHeight: 1.35 }}>
                    {name}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--fg3)", marginTop: 2 }}>
                    {issuer}
                  </div>
                </div>
                <div style={{
                  fontSize: 12, fontWeight: 500, color: "var(--fg3)",
                  whiteSpace: "nowrap",
                }}>
                  {year}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Banner */}
      <div style={{
        marginTop: 8,
        background: "var(--dark)",
        borderRadius: 12,
        padding: "32px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        flexWrap: "wrap",
      }}>
        <div>
          <div style={{
            fontFamily: "var(--font-playfair, Georgia, serif)",
            fontSize: "clamp(36px,5vw,56px)",
            color: "#fff",
            letterSpacing: "-.04em",
            lineHeight: 1,
            marginBottom: 6,
          }}>
            30<span style={{ color: "rgba(255,255,255,.3)" }}>+</span>
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,.45)" }}>
            Certifications across cybersecurity, cloud, networking, and AI
          </div>
        </div>
        <a
          href="https://www.credly.com/users/kevin-kibe"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 13, fontWeight: 600, color: "#fff",
            border: "1.5px solid rgba(255,255,255,.2)", borderRadius: 8,
            padding: "10px 20px", transition: "border-color .18s",
            flexShrink: 0,
          }}
        >
          Verify credentials →
        </a>
      </div>
    </section>
  );
}
