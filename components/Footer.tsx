export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--brd)",
      padding: "20px var(--e)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 12,
    }}>
      <span style={{ fontSize: 13, color: "var(--fg3)" }}>
        © {new Date().getFullYear()} Kevin Gitau · Nairobi, Kenya
      </span>
      <div style={{ display: "flex", gap: 20 }}>
        {[
          { href: "https://github.com/cayvoh254",          label: "GitHub" },
          { href: "https://linkedin.com/in/kevinkgitau",   label: "LinkedIn" },
          { href: "https://www.credly.com/users/kevin-kibe", label: "Credly" },
        ].map(({ href, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="foot-a">
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
