import { getAllPosts } from "@/lib/posts";

// Devuelve los posts guardados en la base de datos (data/blog.db)
export default function handler(req, res) {
  res.status(200).json(getAllPosts());
}
