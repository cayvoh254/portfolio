export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--bd)",
        padding: "18px var(--e)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 12, color: "var(--t3)",
      }}
    >
      <span>© {year} Kevin Gitau</span>
      <div style={{ display: "flex", gap: 16 }}>
        {[
          { href: "https://github.com/cayvoh254", label: "GitHub" },
          { href: "https://linkedin.com/in/kevinkgitau", label: "LinkedIn" },
          { href: "https://www.credly.com/users/kevin-kibe", label: "Credly" },
        ].map(({ href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="foot-link"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
