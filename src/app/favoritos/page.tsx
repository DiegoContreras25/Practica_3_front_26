"use client";

import { useMusic } from "@/context/MusicContext";
import Link from "next/link";

export default function FavoritosPage() {
  const { favorites, removeFavorite } = useMusic();

  return (
    <section>
      <h1>Mis favoritos</h1>

      {favorites.length === 0 ? (
        <p>No hay álbumes en favoritos todavía.</p>
      ) : (
        <div style={styles.grid}>
          {favorites.map((album) => (
            <article key={album.collectionId} style={styles.card}>
              <img
                src={album.artworkUrl100}
                alt={album.collectionName}
                width={150}
                height={150}
                style={{ borderRadius: "8px" }}
              />

              <h3>{album.collectionName}</h3>
              <p>{album.artistName}</p>

              <div style={styles.actions}>
                <Link href={`/albums/${album.collectionId}`} style={styles.link}>
                  Ver detalle
                </Link>

                <button
                  onClick={() => removeFavorite(album.collectionId)}
                  style={styles.button}
                >
                  Eliminar
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "1rem",
    marginTop: "1rem",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "1rem",
    background: "#fff",
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    marginTop: "0.8rem",
  },
  link: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: 600,
  },
  button: {
    padding: "0.6rem 0.8rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  },
};