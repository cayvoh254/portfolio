import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Certifications",
  description: "30+ credentials across cybersecurity, cloud, networking, and AI. Verifiable on Credly and LinkedIn.",
};

const CYBER = [
  { name: "Cloud & Network Security",            issuer: "Cyber Shujaa",      featured: true  },
  { name: "Google Cybersecurity Specialization", issuer: "Google / Coursera", featured: false },
  { name: "Certified Ethical Hacker (prep)",     issuer: "Cisco" },
  { name: "Cybersecurity Training Programme",    issuer: "Lateral Connect" },
  { name: "Threat Intelligence Analysis",        issuer: "ArcX" },
  { name: "Penetration Testing, IR & Forensics", issuer: "IBM" },
  { name: "Operationalizing MITRE ATT&CK",       issuer: "AttackIQ Academy" },
];

const OTHER = [
  {
    domain: "API & Application Security",
    certs: [
      { name: "APIsec Certified Practitioner", issuer: "APIsec University", featured: true  },
      { name: "OWASP API Security Top 10",      issuer: "APIsec University" },
    ],
  },
  {
    domain: "Networking",
    certs: [
      { name: "Network Security & Firewall Technologies", issuer: "Cisco", featured: true },
      { name: "CCNA Switching & Routing",                 issuer: "Cisco" },
    ],
  },
  {
    domain: "Cloud & Infrastructure",
    certs: [
      { name: "AZ-104 Azure Administrator (prep)", issuer: "Whizlabs",        featured: true },
      { name: "Introduction to Kubernetes",        issuer: "Linux Foundation" },
    ],
  },
];

type CertItemProps = { name: string; issuer: string; featured?: boolean };

function CertItem({ name, issuer, featured }: CertItemProps) {
  return (
    <div style={{ padding: "12px 0", borderBottom: "1px solid var(--lt-brd)" }}>
      <div style={{
        fontSize: featured ? 13.5 : 13,
        fontWeight: featured ? 600 : 500,
        color: "var(--lt-fg)", lineHeight: 1.3, marginBottom: 2,
      }}>
        {name}
      </div>
      <div style={{ fontSize: 11.5, color: "var(--lt-dim)" }}>{issuer}</div>
    </div>
  );
}

export default function CertificationsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68 }}>
        <section className="sec">
          <div className="wrap">

            <FadeIn>
              <Link
                href="/"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 12.5, fontWeight: 600, color: "var(--lt-muted)",
                  textDecoration: "none", marginBottom: 40,
                }}
              >
                <svg viewBox="0 0 16 16" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path d="M13 8H3M8 3l-5 5 5 5"/>
                </svg>
                Kevin Gitau
              </Link>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "flex-end", marginBottom: 32,
                flexWrap: "wrap", gap: 16,
              }}>
                <div className="sec-num">Certifications &amp; Education</div>
                <a
                  href="https://www.credly.com/users/kevin-gitau1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 12.5, fontWeight: 600, color: "var(--gld)",
                    display: "inline-flex", alignItems: "center", gap: 5,
                    textDecoration: "none",
                  }}
                >
                  View all 30+ on Credly
                  <svg viewBox="0 0 16 16" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path d="M3 8h10M8 3l5 5-5 5"/>
                  </svg>
                </a>
              </div>
            </FadeIn>

            {/* 30+ stat block */}
            <FadeIn delay={0.08}>
              <div style={{
                display: "grid", gridTemplateColumns: "auto 1fr",
                gap: "clamp(24px,5vw,60px)", alignItems: "center",
                background: "var(--dk)", borderRadius: 10,
                padding: "clamp(28px,4vw,44px)",
                marginBottom: 48,
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
                  <a href="https://www.credly.com/users/kevin-gitau1" target="_blank" rel="noopener noreferrer"
                    style={{ color: "var(--gld)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                    Credly
                  </a>{" "}and{" "}
                  <a href="https://linkedin.com/in/kevinkgitau" target="_blank" rel="noopener noreferrer"
                    style={{ color: "var(--gld)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                    LinkedIn
                  </a>.
                </p>
              </div>
            </FadeIn>

            {/* Full cert grid */}
            <FadeIn delay={0.12}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0 clamp(40px,6vw,80px)",
                alignItems: "start",
              }} className="cert-cols">

                <div>
                  <div className="cert-domain-label">
                    Cybersecurity <span style={{ color: "var(--lt-brd)" }}>({CYBER.length})</span>
                  </div>
                  {CYBER.map(c => <CertItem key={c.name} {...c} />)}
                </div>

                <div>
                  {OTHER.map(g => (
                    <div key={g.domain} style={{ marginBottom: 32 }}>
                      <div className="cert-domain-label">
                        {g.domain} <span style={{ color: "var(--lt-brd)" }}>({g.certs.length})</span>
                      </div>
                      {g.certs.map(c => <CertItem key={c.name} {...c} />)}
                    </div>
                  ))}

                  <div>
                    <div className="cert-domain-label">Education</div>
                    <CertItem name="B.Sc. Business Information Technology" issuer="Jomo Kenyatta University · Second Class Upper" featured />
                  </div>
                </div>

              </div>
            </FadeIn>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
