# Practica_3_front_26

# 🎵 Aplicación de Álbumes con Next.js

## 📌 Descripción

Esta aplicación web permite buscar álbumes musicales utilizando la API pública de iTunes, visualizar sus detalles y gestionar una lista de favoritos accesible desde cualquier parte de la aplicación.

El proyecto ha sido desarrollado con **Next.js (App Router)** y hace uso de **React Hooks** y **Context API** para la gestión del estado.

---

## 🚀 Funcionalidades

### 🏠 Página principal (/)

* Muestra el título de la aplicación
* Incluye navegación hacia:

  * Búsqueda de álbumes
  * Lista de favoritos

---

### 🔍 Página de búsqueda (/albums)

* Campo de texto para introducir un artista
* Botón para realizar la búsqueda
* Consulta a la API de iTunes
* Muestra una lista de álbumes con:

  * Nombre del álbum
  * Imagen
  * Nombre del artista
  * Enlace a detalle
  * Botón para añadir a favoritos

---

### 📀 Página de detalle (/albums/[id])

* Ruta dinámica
* Muestra:

  * Nombre del álbum
  * Nombre del artista
  * Imagen
  * Información adicional (fecha, género, número de pistas)

---

### ❤️ Página de favoritos (/favoritos)

* Lista de álbumes guardados
* Permite eliminar álbumes de favoritos

---

## 🧠 Gestión de estado

Se utiliza **Context API** para compartir el estado global:

* Lista de favoritos
* Función para añadir favoritos
* Función para eliminar favoritos
* Función para comprobar si un álbum ya está en favoritos

---

## ⚙️ Tecnologías utilizadas

* Next.js (App Router)
* React
* TypeScript
* Context API
* Hooks:

  * useState
  * useEffect
  * useMemo

---

## 🌐 API utilizada

Se utiliza la API pública de iTunes:

Ejemplo de búsqueda:

https://itunes.apple.com/search?term=coldplay&entity=album&limit=20

---

## 📁 Estructura del proyecto

```bash
src/
  app/
    page.tsx
    albums/
      page.tsx
      [id]/
        page.tsx
    favoritos/
      page.tsx
  components/
    Navbar.tsx
    AlbumCard.tsx
  context/
    MusicContext.tsx
  lib/
    api.ts
  types/
    album.ts
```

---

## ▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
```

2. Instalar dependencias

```bash
npm install
```

3. Ejecutar en modo desarrollo

```bash
npm run dev
```

4. Abrir en el navegador

```bash
http://localhost:3000
```

---

## 🧩 Decisiones técnicas

* Se utiliza **App Router** de Next.js
* Los componentes que usan estado están marcados con `'use client'`
* El estado global se implementa mediante **Context API**
* Se separa la lógica de API en `lib/api.ts`
* Se evita duplicar álbumes en favoritos

---

## ⭐ Mejoras implementadas (opcional)

* Prevención de duplicados en favoritos
* Indicadores de carga durante las peticiones
* Uso de alias (`@/`) para imports más limpios

---

## 📚 Conclusión

Este proyecto demuestra el uso de Next.js junto con React para construir una aplicación interactiva, utilizando buenas prácticas como separación de responsabilidades, gestión de estado global y consumo de APIs externas.

---
