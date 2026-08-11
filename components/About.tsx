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
              My background runs through telecommunications, climate tech,
              fintech, and startup environments within these industries. The
              core of the work has always been production systems and cloud
              infrastructure: Azure-hosted platforms, microservices
              architecture, distributed IoT, and application support under real
              commercial pressure. Security is a second discipline built
              deliberately alongside: application hardening, penetration
              testing, SIEM engineering, and Active Directory defense. Also
              builds independent products.
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
