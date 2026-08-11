import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { LABS, getLabBySlug } from "@/lib/writeups";
import { LAB_PREVIEWS } from "@/lib/labPreviews";

export async function generateStaticParams() {
  return LABS.map(l => ({ slug: l.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const lab = getLabBySlug(slug);
  if (!lab) return { title: "Project not found" };
  return {
    title: lab.title,
    description: lab.overview.slice(0, 160),
  };
}

export default async function ProjectPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const lab = getLabBySlug(slug);
  if (!lab) notFound();

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68 }}>
        <article className="sec">
          <div className="wrap" style={{ maxWidth: 860 }}>

            {/* Back link */}
            <FadeIn>
              <Link
                href="/#writeups"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 12.5, fontWeight: 600, color: "var(--lt-muted)",
                  textDecoration: "none", marginBottom: 40,
                }}
              >
                <svg viewBox="0 0 16 16" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path d="M13 8H3M8 3l-5 5 5 5"/>
                </svg>
                All writeups
              </Link>
            </FadeIn>

            {/* Header */}
            <FadeIn delay={0.05}>
              <div style={{ marginBottom: 32 }}>
                <div className="sec-num" style={{ marginBottom: 12 }}>Technical Writeup</div>
                <h1 style={{
                  fontFamily: "var(--font-playfair, Georgia, serif)",
                  fontSize: "clamp(28px, 4vw, 44px)",
                  color: "var(--lt-fg)",
                  letterSpacing: "-.03em",
                  lineHeight: 1.1,
                  fontWeight: 400,
                  marginBottom: 10,
                }}>
                  {lab.title}
                </h1>
                <div style={{ fontSize: 12, color: "var(--gld)", fontWeight: 500, letterSpacing: ".01em" }}>
                  {lab.subtitle}
                </div>
              </div>
            </FadeIn>

            {/* Technical visual */}
            {LAB_PREVIEWS[lab.slug] && (
              <FadeIn delay={0.08}>
                <div className="lab-figure">
                  {LAB_PREVIEWS[lab.slug]}
                </div>
              </FadeIn>
            )}

            {/* Overview */}
            <FadeIn delay={0.1}>
              <p style={{
                fontSize: 15, lineHeight: 1.8, color: "var(--lt-muted)",
                marginBottom: 40, maxWidth: "72ch",
              }}>
                {lab.overview}
              </p>
            </FadeIn>

            {/* Techniques */}
            <FadeIn delay={0.12}>
              <div style={{ marginBottom: 36 }}>
                <div style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: ".16em",
                  textTransform: "uppercase", color: "var(--lt-dim)", marginBottom: 16,
                }}>
                  Techniques Practiced
                </div>
                <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {lab.techniques.map((t, i) => (
                    <li key={i} style={{
                      fontSize: 13.5, color: "var(--lt-muted)", lineHeight: 1.7,
                      paddingLeft: 16, position: "relative",
                    }}>
                      <span style={{
                        position: "absolute", left: 0, top: ".65em",
                        width: 6, height: 1, background: "var(--gld)",
                      }} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* MITRE + Tools horizontal rows */}
            <FadeIn delay={0.14}>
              <div style={{
                borderTop: "1px solid var(--lt-brd)",
                paddingTop: 28,
                display: "flex", flexDirection: "column", gap: 22,
                marginBottom: 40,
              }}>
                <div>
                  <div style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: ".16em",
                    textTransform: "uppercase", color: "var(--lt-dim)", marginBottom: 10,
                  }}>
                    MITRE ATT&amp;CK
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {lab.mitre.map(m => (
                      <span key={m} style={{
                        fontSize: 11.5, color: "var(--gld)",
                        fontFamily: "ui-monospace, monospace", fontWeight: 500,
                        padding: "4px 10px",
                        border: "1px solid rgba(184,134,11,.3)",
                        borderRadius: 4,
                      }}>
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: ".16em",
                    textTransform: "uppercase", color: "var(--lt-dim)", marginBottom: 10,
                  }}>
                    Tools
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {lab.tools.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* GitHub link */}
            <FadeIn delay={0.16}>
              <a
                href={lab.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
              >
                <svg viewBox="0 0 24 24" width={15} height={15} fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                View on GitHub
              </a>
            </FadeIn>

          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
