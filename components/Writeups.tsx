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
                  display: "flex", alignItems: "center", gap: 20,
                  padding: "20px 0",
                  borderBottom: "1px solid var(--lt-brd)",
                  textDecoration: "none", color: "inherit",
                }}
                className="writeup-row"
              >
                <span className="wu-num">{String(i + 1).padStart(2, "0")}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="wu-title">{lab.title}</div>
                  <div className="wu-sub">{lab.subtitle}</div>
                </div>
                <svg
                  viewBox="0 0 16 16" width={12} height={12} fill="none"
                  stroke="currentColor" strokeWidth={1.8} strokeLinecap="round"
                  style={{ flexShrink: 0, color: "var(--lt-dim)" }}
                >
                  <path d="M3 8h10M8 3l5 5-5 5"/>
                </svg>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
