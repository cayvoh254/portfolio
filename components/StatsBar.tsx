const STATS = [
  { value: "6+",     label: "Years experience" },
  { value: "30+",    label: "Certifications" },
  { value: "3,000+", label: "Endpoints monitored" },
  { value: "99%",    label: "Peak SLA" },
  { value: "4+",     label: "Products shipped" },
];

export default function StatsBar() {
  return (
    <div style={{ background: "#1c1c1e", color: "#fff", padding: "0 var(--e)" }}>
      <div
        className="stats-inner"
        style={{
          maxWidth: 1180, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(5,1fr)",
        }}
      >
        {STATS.map(({ value, label }, i) => (
          <div
            key={label}
            className={i >= 3 ? "sc-hide" : ""}
            style={{
              padding: "22px 24px",
              borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,.08)" : "none",
              paddingLeft: i === 0 ? 0 : 24,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-dm-serif, 'DM Serif Display', Georgia, serif)",
                fontSize: 28, color: "#fff", letterSpacing: "-.02em", lineHeight: 1,
              }}
            >
              {value}
            </div>
            <div
              style={{
                fontSize: 11, fontWeight: 600, textTransform: "uppercase",
                letterSpacing: ".06em", color: "rgba(255,255,255,.45)", marginTop: 4,
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
