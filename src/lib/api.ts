import { Album } from "../types/album";

const BASE_URL = "https://itunes.apple.com";

export async function searchAlbums(term: string): Promise<Album[]> {
  const response = await fetch(
    `${BASE_URL}/search?term=${encodeURIComponent(term)}&entity=album&limit=20`
  );

  if (!response.ok) {
    throw new Error("Error al buscar álbumes");
  }

  const data = await response.json();

  return data.results ?? [];
}

export async function getAlbumById(id: string): Promise<Album | null> {
  const response = await fetch(
    `${BASE_URL}/lookup?id=${id}&entity=album`
  );

  if (!response.ok) {
    throw new Error("Error al obtener el detalle del álbum");
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    return null;
  }

  return data.results[0];
}