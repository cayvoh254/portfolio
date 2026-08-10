import Link from "next/link";
import { FadeIn } from "./FadeIn";

const FEATURED = [
  { name: "Cloud & Network Security",       issuer: "Cyber Shujaa" },
  { name: "APIsec Certified Practitioner",  issuer: "APIsec University" },
  { name: "CCNA Switching & Routing",       issuer: "Cisco" },
  { name: "AZ-104 Azure Administrator",     issuer: "Whizlabs" },
];

export default function Certifications() {
  return (
    <section className="sec" id="certifications">
      <div className="wrap">
        <FadeIn>
          <div style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "flex-end", marginBottom: 32,
            flexWrap: "wrap", gap: 16,
          }}>
            <div className="sec-num">Certifications &amp; Education</div>
            <Link
              href="/certifications"
              style={{
                fontSize: 12.5, fontWeight: 600, color: "var(--gld)",
                display: "inline-flex", alignItems: "center", gap: 5,
                textDecoration: "none",
              }}
            >
              View all credentials
              <svg viewBox="0 0 16 16" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path d="M3 8h10M8 3l5 5-5 5"/>
              </svg>
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 clamp(40px,6vw,80px)" }} className="cert-cols">

            {/* Left — selected credentials */}
            <div>
              <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: ".16em",
                textTransform: "uppercase", color: "var(--lt-dim)", marginBottom: 4,
              }}>
                Selected Credentials
              </div>
              {FEATURED.map((c, i) => (
                <div key={c.name} style={{
                  padding: "13px 0",
                  borderBottom: i < FEATURED.length - 1 ? "1px solid var(--lt-brd)" : "none",
                }}>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--lt-fg)", lineHeight: 1.3, marginBottom: 2 }}>
                    {c.name}
                  </div>
                  <div style={{ fontSize: 11.5, color: "var(--lt-dim)" }}>{c.issuer}</div>
                </div>
              ))}
              <a
                href="https://www.credly.com/users/kevin-kibe"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 5,
                  marginTop: 16, fontSize: 12, fontWeight: 600, color: "var(--lt-muted)",
                  textDecoration: "none",
                }}
              >
                30+ credentials on Credly
                <svg viewBox="0 0 16 16" width={11} height={11} fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path d="M3 8h10M8 3l5 5-5 5"/>
                </svg>
              </a>
            </div>

            {/* Right — education */}
            <div>
              <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: ".16em",
                textTransform: "uppercase", color: "var(--lt-dim)", marginBottom: 4,
              }}>
                Education
              </div>
              <div style={{ padding: "13px 0", borderBottom: "1px solid var(--lt-brd)" }}>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--lt-fg)", lineHeight: 1.3, marginBottom: 2 }}>
                  B.Sc. Business Information Technology
                </div>
                <div style={{ fontSize: 11.5, color: "var(--lt-dim)" }}>Jomo Kenyatta University · Second Class Upper</div>
              </div>

              <div style={{ padding: "13px 0", borderBottom: "1px solid var(--lt-brd)" }}>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--lt-fg)", lineHeight: 1.3, marginBottom: 2 }}>
                  Google Cybersecurity Specialization
                </div>
                <div style={{ fontSize: 11.5, color: "var(--lt-dim)" }}>Google / Coursera</div>
              </div>

              <div style={{ padding: "13px 0" }}>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--lt-fg)", lineHeight: 1.3, marginBottom: 2 }}>
                  Penetration Testing, IR &amp; Forensics
                </div>
                <div style={{ fontSize: 11.5, color: "var(--lt-dim)" }}>IBM</div>
              </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
