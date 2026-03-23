"use client";

import Link from "next/link";
import { Album } from "../types/album";
import { useMusic } from "../context/MusicContext";

type Props = {
  album: Album;
};

export default function AlbumCard({ album }: Props) {
  const { addFavorite, removeFavorite, isFavorite } = useMusic();
  const favorite = isFavorite(album.collectionId);

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFavorite(album.collectionId);
    } else {
      addFavorite(album);
    }
  };

  return (
    <article style={styles.card}>
      <img
        src={album.artworkUrl100}
        alt={album.collectionName}
        width={150}
        height={150}
        style={styles.image}
      />

      <h3>{album.collectionName}</h3>
      <p>{album.artistName}</p>

      <div style={styles.actions}>
        <Link href={`/albums/${album.collectionId}`} style={styles.detailLink}>
          Ver detalle
        </Link>

        <button onClick={handleFavoriteClick} style={styles.button}>
          {favorite ? "Quitar de favoritos" : "Añadir a favoritos"}
        </button>
      </div>
    </article>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    background: "#fff",
  },
  image: {
    borderRadius: "8px",
    objectFit: "cover",
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  detailLink: {
    textDecoration: "none",
    color: "#2563eb",
    fontWeight: 600,
  },
  button: {
    padding: "0.6rem 0.8rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  },
};