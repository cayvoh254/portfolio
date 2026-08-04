const TOOLS = [
  "Azure", "Entra ID", "Wazuh", "Burp Suite", "OWASP ZAP",
  "Python", "Kubernetes", "Docker", "Linux", "Grafana",
  "Zeek", "pfSense", "BloodHound", "n8n", "Supabase", "Flutter",
];

export default function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap">
        <div style={{ marginBottom: 48 }}>
          <div className="sec-num">01 · About</div>
        </div>

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(48px,7vw,96px)",
            alignItems: "start",
          }}
        >
          {/* Left — pull quote */}
          <div>
            <p style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(22px,2.8vw,30px)",
              color: "var(--lt-fg)",
              lineHeight: 1.35,
              letterSpacing: "-.02em",
              fontWeight: 400,
              marginBottom: 32,
            }}>
              &ldquo;Technical support is where you learn how systems actually
              break, and who to call when they do.&rdquo;
            </p>

            <p style={{
              fontSize: 14.5,
              lineHeight: 1.82,
              color: "var(--lt-muted)",
              marginBottom: 18,
            }}>
              Six years as the person who gets paged when production is down.
              I&apos;ve maintained infrastructure for an enterprise ISP, a distributed
              IoT platform serving 3,000+ field endpoints, and two fintech platforms
              in regulated environments.
            </p>

            <p style={{
              fontSize: 14.5,
              lineHeight: 1.82,
              color: "var(--lt-muted)",
              marginBottom: 32,
            }}>
              That background gives me something most security candidates don&apos;t have:
              I know what it feels like when a misconfigured firewall takes down a city
              block&apos;s broadband at 2 a.m. I understand networks, logs, and failure modes
              from the inside.
            </p>

            <p style={{
              fontSize: 14.5,
              lineHeight: 1.82,
              color: "var(--lt-muted)",
            }}>
              Alongside the security work, I build products: a fintech analytics
              tool for the Kenyan market, an AI-powered SaaS, a family app, and
              more. I move from concept to deployed product without needing a team.
            </p>
          </div>

          {/* Right — three tracks + tools */}
          <div>
            {[
              {
                label: "Operations",
                text: "Enterprise infrastructure across telecom, climate tech, and fintech. I debug distributed systems, own incidents end-to-end, and build the automation that stops the same incident twice.",
              },
              {
                label: "Security",
                text: "SIEM deployments, web app and API assessments, AD attack and defence, container scanning. Certifications from Google, IBM, Cisco, APIsec. The labs run continuously.",
              },
              {
                label: "Building",
                text: "SaaS, mobile apps, automation platforms. I know enough of the stack to ship products without waiting for a team to form around me.",
              },
            ].map(({ label, text }, i) => (
              <div key={label} style={{
                paddingTop: i > 0 ? 24 : 0,
                paddingBottom: 24,
                borderBottom: "1px solid var(--lt-brd)",
              }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: ".14em",
                  textTransform: "uppercase", color: "var(--gld)", marginBottom: 8,
                }}>
                  {label}
                </div>
                <p style={{ fontSize: 13.5, lineHeight: 1.75, color: "var(--lt-muted)" }}>
                  {text}
                </p>
              </div>
            ))}

            <div style={{ marginTop: 28 }}>
              <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: ".16em",
                textTransform: "uppercase", color: "var(--lt-dim)", marginBottom: 12,
              }}>
                Technologies
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {TOOLS.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
