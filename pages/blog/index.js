import Link from "next/link";
import SEO from "@/components/SEO";
import { getAllPosts } from "@/lib/posts";

export default function Blog({ posts }) {
  return (
    <>
      <SEO
        title="Blog de SEO y Next.js: Guías y Tutoriales | Mi Sitio Optimizado"
        description="Artículos prácticos sobre SEO técnico, meta tags, Open Graph, sitemaps y optimización de rendimiento en Next.js."
        path="/blog"
      />

      <h1>Blog</h1>
      <ul style={{ listStyle: "none", marginTop: "1.5rem", display: "grid", gap: "1.25rem" }}>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} style={{ fontSize: "1.25rem", fontWeight: 600 }}>
              {post.title}
            </Link>
            <p style={{ opacity: 0.8 }}>{post.description}</p>
            <small style={{ opacity: 0.6 }}>Actualizado: {post.updated_at}</small>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  return { props: { posts: getAllPosts() }, revalidate: 60 };
}
