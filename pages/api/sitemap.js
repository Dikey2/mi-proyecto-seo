import { getAllPosts } from "@/lib/posts";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mi-proyecto-seo-ylgm.onrender.com";

export default async function handler(req, res) {
  const today = new Date().toISOString().split("T")[0];

  // Rutas estáticas del sitio
  const staticPages = [
    { path: "/", changefreq: "daily", priority: "1.0", lastmod: today },
    { path: "/blog", changefreq: "daily", priority: "0.9", lastmod: today },
    { path: "/contacto", changefreq: "monthly", priority: "0.5", lastmod: today },
  ];

  // Rutas dinámicas obtenidas de la base de datos
  const postPages = getAllPosts().map((post) => ({
    path: `/blog/${post.slug}`,
    changefreq: "weekly",
    priority: "0.8",
    lastmod: post.updated_at,
  }));

  const urls = [...staticPages, ...postPages]
    .map(
      (u) => `  <url>
    <loc>${BASE_URL}${u.path}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.status(200).send(sitemap);
}
