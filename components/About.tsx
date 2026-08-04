const TRACKS = [
  {
    icon: "⚙️",
    title: "Technical Support & IT Ops",
    desc: "Six years as the technical frontline — resolving complex incidents, communicating under pressure, owning problems from first alert through resolution.",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    desc: "Hands-on SIEM, web app and API security testing, container scanning, network lab, Active Directory attack and defense. Real practice, not just theory.",
  },
  {
    icon: "🚀",
    title: "Builder",
    desc: "AI-first product development. SaaS apps, mobile products, automation workflows — from concept to deployed product, end to end.",
  },
];

const BLUE_TAGS = ["Azure / Entra ID", "Wazuh SIEM", "OWASP ZAP", "Burp Suite", "Python"];
const GRAY_TAGS = ["SQL", "Linux", "Docker", "Kubernetes", "n8n", "Grafana", "Flutter"];

export default function About() {
  return (
    <section className="sec" id="about">
      <div className="slabel">About</div>
      <div
        className="stitle"
        style={{ fontFamily: "var(--font-dm-serif, 'DM Serif Display', Georgia, serif)" }}
      >
        Technical depth, security focus,<br />builder mindset.
      </div>

      <div
        className="about-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,5vw,72px)", alignItems: "start" }}
      >
        {/* Left: bio */}
        <div>
          {[
            <>I&apos;m a <strong style={{ color: "var(--t1)", fontWeight: 600 }}>Technical Support and IT professional</strong> with over six years of experience across enterprise infrastructure, cloud platforms, payment-enabled systems, and network operations. I solve hard technical problems, keep critical systems running, and communicate clearly with technical and non-technical stakeholders alike.</>,
            <>I&apos;ve been deliberately building toward <strong style={{ color: "var(--t1)", fontWeight: 600 }}>cybersecurity</strong> — through hands-on labs, real production security work, and a growing portfolio of certifications. SIEM deployments, web application and API security assessments, container vulnerability scanning, network segmentation, and Active Directory attack and defense — I don&apos;t just hold certifications, I practice the work.</>,
            <>I also <strong style={{ color: "var(--t1)", fontWeight: 600 }}>build products</strong>. AI-first tools, SaaS applications, mobile apps, and automation workflows — concept through deployment, end to end.</>,
          ].map((text, i) => (
            <p key={i} style={{ fontSize: 15, lineHeight: 1.8, color: "var(--t2)", marginBottom: i < 2 ? 16 : 0 }}>
              {text}
            </p>
          ))}

          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 24 }}>
            {BLUE_TAGS.map(t => <span key={t} className="tg tg-blue">{t}</span>)}
            {GRAY_TAGS.map(t => <span key={t} className="tg">{t}</span>)}
          </div>
        </div>

        {/* Right: track cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {TRACKS.map(({ icon, title, desc }) => (
            <div key={title} className="track-card">
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 20 }}>{icon}</span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-serif, 'DM Serif Display', Georgia, serif)",
                    fontSize: 17, color: "var(--t1)",
                  }}
                >
                  {title}
                </span>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "var(--t2)" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
