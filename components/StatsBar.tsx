const STATS = [
  { n: "6+",     sub: "Years" },
  { n: "30+",    sub: "Certifications" },
  { n: "3,000+", sub: "Endpoints" },
  { n: "99%",    sub: "SLA" },
];

export default function StatsBar() {
  return (
    <div style={{
      background: "var(--dk2)",
      borderBottom: "1px solid rgba(242,240,237,.06)",
    }}>
      <div className="wrap">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          borderLeft: "1px solid rgba(242,240,237,.06)",
        }}>
          {STATS.map(({ n, sub }) => (
            <div key={n} style={{
              padding: "28px 28px 24px",
              borderRight: "1px solid rgba(242,240,237,.06)",
            }}>
              <div style={{
                fontFamily: "var(--font-playfair, Georgia, serif)",
                fontSize: "clamp(28px,3.5vw,38px)",
                color: "var(--dk-fg)",
                letterSpacing: "-.04em",
                lineHeight: 1,
                marginBottom: 5,
              }}>
                {n}
              </div>
              <div style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--dk-dim)",
              }}>
                {sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
