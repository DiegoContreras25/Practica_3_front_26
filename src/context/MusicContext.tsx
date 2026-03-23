"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Album } from "@/types/album";

type MusicContextType = {
  favorites: Album[];
  addFavorite: (album: Album) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Album[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (album: Album) => {
    setFavorites((prev) => {
      const exists = prev.some(
        (fav) => fav.collectionId === album.collectionId
      );

      if (exists) return prev;
      return [...prev, album];
    });
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((fav) => fav.collectionId !== id));
  };

  const isFavorite = (id: number) => {
    return favorites.some((fav) => fav.collectionId === id);
  };

  const value = useMemo(
    () => ({
      favorites,
      addFavorite,
      removeFavorite,
      isFavorite,
    }),
    [favorites]
  );

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);

  if (!context) {
    throw new Error("useMusic debe usarse dentro de MusicProvider");
  }

  return context;
}