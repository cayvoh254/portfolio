import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { SECURITY_LABS, PRODUCTS, type Status } from "@/lib/projects";

const BADGE: Record<Status, string> = {
  "Live lab": "badge badge-live",
  "Shipped":  "badge badge-shipped",
  "Beta":     "badge badge-beta",
  "In dev":   "badge badge-dev",
  "Stealth":  "badge badge-stealth",
};

function LabCard({ lab }: { lab: typeof SECURITY_LABS[number] }) {
  return (
    <Link
      href={`/projects/${lab.slug}`}
      className="proj-card"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 12 }}>
        <span className={BADGE[lab.status]}>{lab.status}</span>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14.5, fontWeight: 600, color: "var(--lt-fg)", letterSpacing: "-.01em", marginBottom: 6 }}>
          {lab.name}
        </div>
        <div style={{ fontSize: 11, color: "var(--gld)", fontWeight: 500, marginBottom: 8, letterSpacing: ".01em" }}>
          {lab.stack}
        </div>
        <p style={{ fontSize: 12.5, color: "var(--lt-muted)", lineHeight: 1.7 }}>
          {lab.summary}
        </p>
      </div>
      <div style={{
        display: "flex", justifyContent: "flex-end", alignItems: "center",
        marginTop: 14, paddingTop: 10, borderTop: "1px solid var(--lt-brd)",
        fontSize: 11.5, fontWeight: 600, color: "var(--gld)", gap: 4,
      }}>
        View project
        <svg viewBox="0 0 16 16" width={11} height={11} fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path d="M3 8h10M8 3l5 5-5 5"/>
        </svg>
      </div>
    </Link>
  );
}

function ProductCard({ p }: { p: typeof PRODUCTS[number] }) {
  return (
    <a
      href={p.href}
      target={p.href !== "#" ? "_blank" : undefined}
      rel={p.href !== "#" ? "noopener noreferrer" : undefined}
      className="proj-card"
    >
      <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 12 }}>
        <span className={BADGE[p.status]}>{p.status}</span>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14.5, fontWeight: 600, color: "var(--lt-fg)", letterSpacing: "-.01em", marginBottom: 6 }}>
          {p.name}
        </div>
        <div style={{ fontSize: 11, color: "var(--gld)", fontWeight: 500, marginBottom: 8, letterSpacing: ".01em" }}>
          {p.stack}
        </div>
        <p style={{ fontSize: 12.5, color: "var(--lt-muted)", lineHeight: 1.7 }}>
          {p.desc}
        </p>
      </div>
      <div style={{
        display: "flex", justifyContent: "flex-end", alignItems: "center",
        marginTop: 14, paddingTop: 10, borderTop: "1px solid var(--lt-brd)",
      }}>
        {p.href !== "#" ? (
          <svg viewBox="0 0 24 24" width={13} height={13} fill="none"
            stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
            style={{ color: "var(--gld)" }}>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width={13} height={13} fill="none"
            stroke="currentColor" strokeWidth={1.8} strokeLinecap="round"
            style={{ color: "var(--lt-brd)" }}>
            <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
          </svg>
        )}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section className="sec sec-alt" id="projects">
      <div className="wrap">
        <FadeIn>
          <div style={{ marginBottom: 32 }}>
            <div className="sec-num">Projects</div>
          </div>
        </FadeIn>

        <div style={{ marginBottom: 36 }}>
          <div style={{ marginBottom: 14 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lt-dim)" }}>
              Security Labs
            </span>
          </div>
          <div className="proj-grid">
            {SECURITY_LABS.map((lab, i) => (
              <FadeIn key={lab.slug} delay={i * 0.06}>
                <LabCard lab={lab} />
              </FadeIn>
            ))}
          </div>
        </div>

        <div>
          <div style={{ marginBottom: 14 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lt-dim)" }}>
              Products
            </span>
          </div>
          <div className="proj-grid">
            {PRODUCTS.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.06}>
                <ProductCard p={p} />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
