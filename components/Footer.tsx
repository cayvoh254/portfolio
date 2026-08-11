export default function Footer() {
  return (
    <footer
      className="dark-sec"
      style={{ borderTop: "1px solid rgba(242,240,237,.08)" }}
    >
      <div
        className="wrap"
        style={{
          padding: "24px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 12.5, color: "rgba(242,240,237,.4)" }}>
          {"© "}{new Date().getFullYear()}{" Kevin Gitau · Nairobi, Kenya"}
        </span>

        <a
          href="/#top"
          className="foot-link"
          style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12.5 }}
        >
          Back to top
          <svg viewBox="0 0 16 16" width={11} height={11} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 13V3M3 8l5-5 5 5"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}
