import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link href="/" style={styles.link}>
        Inicio
      </Link>
      <Link href="/albums" style={styles.link}>
        Buscar álbumes
      </Link>
      <Link href="/favoritos" style={styles.link}>
        Favoritos
      </Link>
    </nav>
  );
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    display: "flex",
    gap: "1rem",
    padding: "1rem 0",
    borderBottom: "1px solid #ddd",
    marginBottom: "2rem",
  },
  link: {
    textDecoration: "none",
    fontWeight: 600,
    color: "#111",
  },
};