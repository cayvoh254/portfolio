import Link from "next/link";
import { FadeIn } from "./FadeIn";

export default function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap">
        <FadeIn>
          <div style={{ marginBottom: 28 }}>
            <div className="sec-num">About</div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div style={{ maxWidth: "72ch" }}>
            <p style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(19px, 2.2vw, 24px)",
              color: "var(--lt-fg)",
              lineHeight: 1.45,
              letterSpacing: "-.02em",
              fontWeight: 400,
              marginBottom: 20,
            }}>
              Background spanning network operations, cloud platform support,
              regulated fintech, and large-scale IoT. Security running in
              parallel across SIEM deployment, penetration testing, and Active
              Directory hardening. Independent products built for the Kenyan
              and East African market.
            </p>

            <Link
              href="/about"
              style={{
                fontSize: 13, fontWeight: 600, color: "var(--gld)",
                display: "inline-flex", alignItems: "center", gap: 5,
                textDecoration: "none",
              }}
            >
              Read more
              <svg viewBox="0 0 16 16" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path d="M3 8h10M8 3l5 5-5 5"/>
              </svg>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
