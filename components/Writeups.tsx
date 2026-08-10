import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { LABS } from "@/lib/writeups";

export default function Writeups() {
  return (
    <section className="sec" id="writeups">
      <div className="wrap">
        <FadeIn>
          <div style={{ marginBottom: 32 }}>
            <div className="sec-num">Technical Writeups</div>
            <p style={{ fontSize: 14, color: "var(--lt-muted)", marginTop: 8, maxWidth: "52ch", lineHeight: 1.7 }}>
              Detailed documentation covering detection engineering, penetration
              testing, network security, and Active Directory.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {LABS.map((lab, i) => (
            <FadeIn key={lab.slug} delay={i * 0.05}>
              <Link
                href={`/projects/${lab.slug}`}
                style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "center", gap: 16,
                  padding: "18px 0",
                  borderBottom: "1px solid var(--lt-brd)",
                  textDecoration: "none", color: "inherit",
                }}
                className="writeup-row"
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: 14.5, fontWeight: 600, color: "var(--lt-fg)",
                    letterSpacing: "-.01em", marginBottom: 4,
                  }}>
                    {lab.title}
                  </div>
                  <div style={{ fontSize: 11.5, color: "var(--gld)", fontWeight: 500 }}>
                    {lab.subtitle}
                  </div>
                </div>
                <span style={{
                  fontSize: 12, fontWeight: 600, color: "var(--lt-dim)",
                  display: "inline-flex", alignItems: "center", gap: 4,
                  flexShrink: 0, whiteSpace: "nowrap",
                }}>
                  Read writeup
                  <svg viewBox="0 0 16 16" width={11} height={11} fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path d="M3 8h10M8 3l5 5-5 5"/>
                  </svg>
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
