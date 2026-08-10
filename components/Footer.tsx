export default function Footer() {
  return (
    <footer
      className="dark-sec"
      style={{
        borderTop: "1px solid rgba(242,240,237,.07)",
        padding: "20px var(--e)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: 12, color: "var(--dk-dim)" }}>
        &copy; {new Date().getFullYear()} Kevin Gitau · Nairobi, Kenya
      </span>
    </footer>
  );
}
