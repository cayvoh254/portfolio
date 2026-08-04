const TRACKS = [
  {
    title: "Operations",
    desc: "Six years as the first call when infrastructure breaks. I've worked across ISPs, IoT platforms, and fintech — owning incidents from alert to resolution, writing runbooks, and building the monitoring that catches problems before users do.",
  },
  {
    title: "Security",
    desc: "SIEM deployments, web application and API assessments, container scanning, network segmentation, and Active Directory hardening. Certifications from Google, IBM, Cisco, and APIsec. The labs are ongoing — this isn't a career pivot, it's a progression.",
  },
  {
    title: "Product",
    desc: "I build things end-to-end. AI-powered SaaS, a family engagement app, a fintech analytics tool for the Kenyan market. I understand enough of the stack to move fast and make deliberate decisions.",
  },
];

const TOOLS = [
  "Azure", "Entra ID", "AWS", "Kubernetes", "Docker", "Linux",
  "Python", "Wazuh", "Burp Suite", "OWASP ZAP", "Grafana", "n8n",
  "Supabase", "Flutter", "SQL", "Zeek", "pfSense", "BloodHound",
];

export default function About() {
  return (
    <section className="sec" id="about">
      <div className="slabel">About</div>
      <h2 className="stitle">
        Infrastructure roots,<br />security trajectory.
      </h2>

      <div
        className="about-cols"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "start",
        }}
      >
        {/* Left: three tracks */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {TRACKS.map(({ title, desc }) => (
            <div key={title}>
              <div style={{
                fontSize: 13, fontWeight: 700, color: "var(--fg)",
                letterSpacing: ".02em", textTransform: "uppercase",
                marginBottom: 7,
              }}>
                {title}
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.78, color: "var(--fg2)" }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Right: bio + tools */}
        <div>
          <p style={{ fontSize: 15, lineHeight: 1.82, color: "var(--fg2)", marginBottom: 20 }}>
            I&apos;m a Technical Support and IT professional based in Nairobi, Kenya.
            My career has been in enterprise infrastructure — the kind where something
            is always on fire and the expectation is that you fix it without making it worse.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.82, color: "var(--fg2)", marginBottom: 32 }}>
            What distinguishes me is the combination: I understand networks and infrastructure
            because I&apos;ve maintained them under pressure. I understand security because
            I&apos;ve been building that practice for years — not to switch fields, but because
            operational context makes better security work.
          </p>

          <div style={{ marginBottom: 10 }}>
            <div style={{
              fontSize: 10.5, fontWeight: 700, letterSpacing: ".12em",
              textTransform: "uppercase", color: "var(--fg3)", marginBottom: 12,
            }}>
              Tools &amp; Technologies
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {TOOLS.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
