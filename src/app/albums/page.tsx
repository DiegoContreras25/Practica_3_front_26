"use client";

import { useEffect, useState } from "react";
import AlbumCard from "@/components/AlbumCard";
import { searchAlbums } from "@/lib/api";
import { Album } from "@/types/album";

export default function AlbumsPage() {
  const [artist, setArtist] = useState("");
  const [query, setQuery] = useState("");
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (!artist.trim()) return;
    setQuery(artist.trim());
  };

  useEffect(() => {
    if (!query) return;

    const fetchAlbums = async () => {
      try {
        setLoading(true);
        setError("");

        const results = await searchAlbums(query);
        setAlbums(results);
      } catch (err) {
        setError("No se pudieron cargar los álbumes");
        setAlbums([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, [query]);

  return (
    <section>
      <h1>Búsqueda de álbumes</h1>

      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Escribe un artista, por ejemplo Coldplay"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>
          Buscar
        </button>
      </div>

      {loading && <p>Cargando álbumes...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && albums.length > 0 && (
        <div style={styles.grid}>
          {albums.map((album) => (
            <AlbumCard key={album.collectionId} album={album} />
          ))}
        </div>
      )}

      {!loading && query && albums.length === 0 && !error && (
        <p>No se encontraron álbumes para "{query}".</p>
      )}
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  searchBox: {
    display: "flex",
    gap: "0.75rem",
    margin: "1rem 0 2rem",
  },
  input: {
    flex: 1,
    padding: "0.8rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "0.8rem 1rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "1rem",
  },
};