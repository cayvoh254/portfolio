const CERTS = [
  { name: "APIsec Certified Practitioner",        issuer: "APIsec University",  year: "2026" },
  { name: "OWASP API Security Top 10",            issuer: "APIsec University",  year: "2026" },
  { name: "Introduction to Kubernetes",           issuer: "Linux Foundation",   year: "2025" },
  { name: "AZ-104 Azure Admin Prep",              issuer: "Whizlabs",           year: "2025" },
  { name: "Threat Intelligence Analysis",         issuer: "ArcX",               year: "2025" },
  { name: "Cybersecurity Training Programme",     issuer: "Lateral Connect",    year: "2025" },
  { name: "Network Security & Firewall Tech",     issuer: "Cisco",              year: "2024" },
  { name: "Certified Ethical Hacker",             issuer: "Cisco",              year: "2024" },
  { name: "Google Cybersecurity Specialization",  issuer: "Google",             year: "2024" },
  { name: "Penetration Testing, IR & Forensics",  issuer: "IBM",                year: "2023" },
  { name: "Operationalizing MITRE ATT&CK",        issuer: "AttackIQ",           year: "2023" },
  { name: "CCNA Switching & Routing",             issuer: "Cisco",              year: "2014" },
];

export default function Certifications() {
  return (
    <section className="sec" id="certifications">
      <div className="slabel">Certifications</div>
      <div className="stitle">30+ and growing</div>

      {/* Big number banner */}
      <div
        style={{
          display: "grid", gridTemplateColumns: "auto 1fr", gap: 40,
          alignItems: "center", background: "#1c1c1e", borderRadius: 14,
          padding: "36px 40px", marginBottom: 20,
        }}
        className="cert-top"
      >
        <div
          style={{
            fontFamily: "var(--font-dm-serif, 'DM Serif Display', Georgia, serif)",
            fontSize: 80, color: "#fff", lineHeight: 1, letterSpacing: "-.04em",
          }}
        >
          30
          <span
            style={{
              fontFamily: "var(--font-dm-serif, 'DM Serif Display', Georgia, serif)",
              fontSize: 40, color: "rgba(255,255,255,.4)",
            }}
          >
            +
          </span>
        </div>
        <div>
          <h3
            style={{
              fontFamily: "var(--font-dm-serif, 'DM Serif Display', Georgia, serif)",
              fontSize: 22, color: "#fff", marginBottom: 8,
            }}
          >
            Cybersecurity, cloud, networking, and AI.
          </h3>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,.55)", maxWidth: "44ch" }}>
            From foundational CCNA through APIsec, Google Cybersecurity, Cisco CEH, Kubernetes,
            and Azure administration. All credentials verifiable on{" "}
            <a
              href="https://www.credly.com/users/kevin-kibe"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              Credly
            </a>{" "}
            and{" "}
            <a
              href="https://linkedin.com/in/kevinkgitau"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              LinkedIn
            </a>.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div
        className="cert-grid"
        style={{
          display: "grid", gridTemplateColumns: "repeat(3,1fr)",
          gap: 1, background: "var(--bd)",
          border: "1px solid var(--bd)", borderRadius: 10, overflow: "hidden",
        }}
      >
        {CERTS.map(({ name, issuer, year }) => (
          <div key={name} className="ci">
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--t1)", lineHeight: 1.3 }}>
              {name}
            </div>
            <div style={{ fontSize: 11, color: "var(--t3)", marginTop: 3 }}>
              {issuer} · {year}
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 12.5, color: "var(--t3)", textAlign: "center", marginTop: 10 }}>
        Showing 12 of 30+ —{" "}
        <a
          href="https://www.credly.com/users/kevin-kibe"
          target="_blank"
          rel="noopener noreferrer"
          className="cert-more-link"
        >
          view all on Credly →
        </a>
      </p>
    </section>
  );
}
