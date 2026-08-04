const STATS = [
  { n: "6+",     label: "Years in production environments" },
  { n: "30+",    label: "Cybersecurity certifications" },
  { n: "3,000+", label: "IoT endpoints monitored" },
  { n: "99%",    label: "SLA adherence at peak" },
];

export default function StatsBar() {
  return (
    <div style={{ background: "var(--dark)", borderTop: "1px solid #1A1918" }}>
      <div
        className="stats-row"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 var(--e)",
        }}
      >
        {STATS.map(({ n, label }, i) => (
          <div
            key={n}
            style={{
              padding: "34px 28px",
              borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,.07)" : "none",
            }}
          >
            <div style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(30px, 3.5vw, 42px)",
              color: "#FFFFFF",
              letterSpacing: "-.035em",
              lineHeight: 1,
              marginBottom: 7,
            }}>
              {n}
            </div>
            <div style={{
              fontSize: 12,
              color: "rgba(255,255,255,.42)",
              lineHeight: 1.4,
            }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
