import Link from "next/link";

export default function HomePage() {
  return (
    <section>
      <h1>Aplicación de álbumes con Next.js</h1>
      <p>
        Busca álbumes de tus artistas favoritos y guarda los que más te gusten.
      </p>

      <div style={styles.links}>
        <Link href="/albums" style={styles.link}>
          Ir a búsqueda de álbumes
        </Link>
        <Link href="/favoritos" style={styles.link}>
          Ver favoritos
        </Link>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  links: {
    display: "flex",
    gap: "1rem",
    marginTop: "1.5rem",
  },
  link: {
    padding: "0.8rem 1rem",
    borderRadius: "8px",
    background: "#111",
    color: "#fff",
    textDecoration: "none",
  },
};