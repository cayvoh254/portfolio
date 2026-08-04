const CYBER = [
  { name: "Google Cybersecurity Specialization",  issuer: "Google / Coursera",  year: "2024", featured: true },
  { name: "Certified Ethical Hacker (prep)",      issuer: "Cisco",              year: "2024" },
  { name: "Cybersecurity Training Programme",     issuer: "Lateral Connect",    year: "2025" },
  { name: "Threat Intelligence Analysis",         issuer: "ArcX",               year: "2025" },
  { name: "Penetration Testing, IR & Forensics",  issuer: "IBM",                year: "2023" },
  { name: "Operationalizing MITRE ATT&CK",        issuer: "AttackIQ Academy",   year: "2023" },
];

const OTHER = [
  {
    domain: "API & Application Security",
    certs: [
      { name: "APIsec Certified Practitioner",  issuer: "APIsec University", year: "2026", featured: true },
      { name: "OWASP API Security Top 10",       issuer: "APIsec University", year: "2026" },
    ],
  },
  {
    domain: "Networking",
    certs: [
      { name: "Network Security & Firewall Technologies", issuer: "Cisco",           year: "2024", featured: true },
      { name: "CCNA Switching & Routing",                 issuer: "Cisco",           year: "2014" },
    ],
  },
  {
    domain: "Cloud & Infrastructure",
    certs: [
      { name: "AZ-104 Azure Administrator (prep)", issuer: "Whizlabs",        year: "2025", featured: true },
      { name: "Introduction to Kubernetes",        issuer: "Linux Foundation", year: "2025" },
    ],
  },
];

function CertItem({ name, issuer, year, featured }: { name: string; issuer: string; year: string; featured?: boolean }) {
  return (
    <div className={`cert-item${featured ? " cert-item-featured" : ""}`}>
      <div>
        <div className="cert-name" style={{
          fontSize: featured ? 13.5 : 13,
          fontWeight: featured ? 600 : 500,
          color: "var(--lt-fg)", lineHeight: 1.3, marginBottom: 2,
        }}>
          {name}
        </div>
        <div style={{ fontSize: 11.5, color: "var(--lt-dim)" }}>{issuer}</div>
      </div>
      <div className="cert-year" style={{
        fontSize: 11.5, fontWeight: featured ? 600 : 500,
        color: featured ? "var(--gld)" : "var(--lt-dim)",
        whiteSpace: "nowrap",
      }}>
        {year}
      </div>
    </div>
  );
}

function DomainLabel({ label, count }: { label: string; count: number }) {
  return (
    <div className="cert-domain-label">
      {label} <span style={{ color: "var(--lt-brd)" }}>({count})</span>
    </div>
  );
}

export default function Certifications() {
  return (
    <section className="sec" id="certifications">
      <div className="wrap">
        {/* Header row */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", marginBottom: 48,
          flexWrap: "wrap", gap: 16,
        }}>
          <div className="sec-num">05 · Certifications</div>
          <a
            href="https://www.credly.com/users/kevin-kibe"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 12.5, fontWeight: 600, color: "var(--gld)",
              display: "inline-flex", alignItems: "center", gap: 5,
            }}
          >
            View all 30+ on Credly
            <svg viewBox="0 0 16 16" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="M3 8h10M8 3l5 5-5 5"/>
            </svg>
          </a>
        </div>

        {/* Banner */}
        <div style={{
          display: "grid", gridTemplateColumns: "auto 1fr",
          gap: "clamp(24px,5vw,60px)", alignItems: "center",
          background: "var(--dk)", borderRadius: 10,
          padding: "clamp(28px,4vw,44px)",
          marginBottom: 56,
        }}>
          <span style={{
            fontFamily: "var(--font-playfair, Georgia, serif)",
            fontSize: "clamp(52px,8vw,80px)",
            color: "var(--dk-fg)", lineHeight: 1,
            letterSpacing: "-.05em",
          }}>
            30<span style={{ color: "var(--dk-dim)" }}>+</span>
          </span>
          <p style={{ fontSize: "clamp(14px,1.6vw,16px)", color: "rgba(242,240,237,.55)", lineHeight: 1.75, maxWidth: "44ch" }}>
            Credentials across cybersecurity, cloud, networking, and AI, from
            foundational CCNA through Google Cybersecurity, IBM Pentesting,
            Cisco CEH, APIsec, and Kubernetes. All verifiable on{" "}
            <a href="https://www.credly.com/users/kevin-kibe" target="_blank" rel="noopener noreferrer"
              style={{ color: "var(--gld)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              Credly
            </a>{" "}and{" "}
            <a href="https://linkedin.com/in/kevinkgitau" target="_blank" rel="noopener noreferrer"
              style={{ color: "var(--gld)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              LinkedIn
            </a>.
          </p>
        </div>

        {/* Balanced two-column layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0 clamp(40px,6vw,80px)",
          alignItems: "start",
        }} className="cert-cols">

          {/* LEFT — Cybersecurity only */}
          <div>
            <div className="cert-domain">
              <DomainLabel label="Cybersecurity" count={6} />
              {CYBER.map(c => <CertItem key={c.name} {...c} />)}
            </div>
          </div>

          {/* RIGHT — API, Networking, Cloud stacked */}
          <div>
            {OTHER.map(g => (
              <div key={g.domain} className="cert-domain">
                <DomainLabel label={g.domain} count={g.certs.length} />
                {g.certs.map(c => <CertItem key={c.name} {...c} />)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
