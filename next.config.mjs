/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Incluye la base de datos SQLite en el despliegue (Vercel)
  outputFileTracingIncludes: {
    "/api/sitemap": ["./data/blog.db"],
    "/api/posts": ["./data/blog.db"],
    "/blog": ["./data/blog.db"],
    "/blog/[slug]": ["./data/blog.db"],
  },
  // Expone el sitemap en la URL estándar /sitemap.xml
  async rewrites() {
    return [{ source: "/sitemap.xml", destination: "/api/sitemap" }];
  },
};

export default nextConfig;
