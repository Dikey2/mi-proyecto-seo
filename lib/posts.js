// Acceso a la base de datos SQLite de posts (data/blog.db).
import { DatabaseSync } from "node:sqlite";
import path from "node:path";

const DB_PATH = path.join(process.cwd(), "data", "blog.db");

function query(sql, ...params) {
  const db = new DatabaseSync(DB_PATH, { readOnly: true });
  try {
    // Convertimos las filas a objetos planos para que Next.js pueda serializarlas.
    return db.prepare(sql).all(...params).map((row) => ({ ...row }));
  } finally {
    db.close();
  }
}

export function getAllPosts() {
  return query(
    "SELECT slug, title, description, image, updated_at FROM posts ORDER BY updated_at DESC"
  );
}

export function getPostBySlug(slug) {
  return query("SELECT * FROM posts WHERE slug = ?", slug)[0] ?? null;
}
