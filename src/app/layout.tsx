import "./globals.css";
import { MusicProvider } from "../context/MusicContext";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "App de Álbumes",
  description: "Buscador de álbumes con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <MusicProvider>
          <main style={styles.container}>
            <Navbar />
            {children}
          </main>
        </MusicProvider>
      </body>
    </html>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "1rem",
  },
};