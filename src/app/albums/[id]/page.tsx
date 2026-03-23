"use client";

import { useEffect, useState } from "react";
import { getAlbumById } from "@/lib/api";
import { Album } from "@/types/album";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function AlbumDetailPage({ params }: Props) {
  const [album, setAlbum] = useState<Album | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [albumId, setAlbumId] = useState("");

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      setAlbumId(resolvedParams.id);
    };

    resolveParams();
  }, [params]);

  useEffect(() => {
    if (!albumId) return;

    const fetchAlbum = async () => {
      try {
        setLoading(true);
        setError("");

        const result = await getAlbumById(albumId);
        setAlbum(result);
      } catch (err) {
        setError("No se pudo cargar el detalle del álbum");
      } finally {
        setLoading(false);
      }
    };

    fetchAlbum();
  }, [albumId]);

  if (loading) return <p>Cargando detalle...</p>;
  if (error) return <p>{error}</p>;
  if (!album) return <p>Álbum no encontrado.</p>;

  return (
    <section>
      <h1>{album.collectionName}</h1>
      <p>
        <strong>Artista:</strong> {album.artistName}
      </p>
      <img
        src={album.artworkUrl100.replace("100x100", "300x300")}
        alt={album.collectionName}
        width={300}
        height={300}
        style={{ borderRadius: "12px" }}
      />

      {album.releaseDate && (
        <p>
          <strong>Lanzamiento:</strong>{" "}
          {new Date(album.releaseDate).toLocaleDateString("es-ES")}
        </p>
      )}

      {album.primaryGenreName && (
        <p>
          <strong>Género:</strong> {album.primaryGenreName}
        </p>
      )}

      {album.trackCount && (
        <p>
          <strong>Número de pistas:</strong> {album.trackCount}
        </p>
      )}
    </section>
  );
}