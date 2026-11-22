// Crea (o recrea) la base de datos SQLite con los posts del blog.
// Uso: npm run seed
import { DatabaseSync } from "node:sqlite";
import { mkdirSync } from "node:fs";
import path from "node:path";

const dir = path.join(process.cwd(), "data");
mkdirSync(dir, { recursive: true });

const db = new DatabaseSync(path.join(dir, "blog.db"));

db.exec(`
  DROP TABLE IF EXISTS posts;
  CREATE TABLE posts (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    slug        TEXT    NOT NULL UNIQUE,
    title       TEXT    NOT NULL,
    description TEXT    NOT NULL,
    content     TEXT    NOT NULL,
    image       TEXT    NOT NULL DEFAULT '/images/seo-image.png',
    updated_at  TEXT    NOT NULL
  );
`);

const insert = db.prepare(
  "INSERT INTO posts (slug, title, description, content, updated_at) VALUES (?, ?, ?, ?, ?)"
);

const posts = [
  [
    "que-es-seo-tecnico",
    "Qué es el SEO técnico y por qué importa",
    "Conoce los fundamentos del SEO técnico: rastreo, indexación, sitemaps y meta tags para posicionar tu web en Google.",
    "El SEO técnico asegura que los buscadores puedan rastrear e indexar tu sitio correctamente.",
    "2026-11-10",
  ],
  [
    "meta-tags-open-graph-nextjs",
    "Meta tags y Open Graph en Next.js",
    "Aprende a definir title, description y etiquetas Open Graph dinámicas en Next.js con el componente Head.",
    "Las etiquetas Open Graph controlan cómo se ve tu página al compartirla en redes sociales.",
    "2026-11-15",
  ],
  [
    "optimizacion-imagenes-next-image",
    "Optimización de imágenes con next/image",
    "Reduce el peso de tus imágenes y mejora el LCP usando next/image con formatos WebP y AVIF.",
    "next/image redimensiona y convierte imágenes automáticamente al formato más eficiente.",
    "2026-11-20",
  ],
];

for (const p of posts) insert.run(...p);

console.log(`Base de datos creada con ${posts.length} posts en data/blog.db`);
db.close();
