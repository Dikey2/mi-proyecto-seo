import Image from "next/image";
import Link from "next/link";
import SEO from "@/components/SEO";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export default function Post({ post }) {
  return (
    <article>
      {/* Meta tags generados dinámicamente con los datos del post */}
      <SEO
        title={`${post.title} | Blog Mi Sitio Optimizado`}
        description={post.description}
        path={`/blog/${post.slug}`}
        image={post.image}
        type="article"
      />

      <Link href="/blog">← Volver al blog</Link>
      <h1 style={{ margin: "1rem 0" }}>{post.title}</h1>
      <small style={{ opacity: 0.6 }}>Actualizado: {post.updated_at}</small>
      <Image
        src={post.image}
        width={800}
        height={400}
        alt={post.title}
        style={{ width: "100%", height: "auto", borderRadius: 8, margin: "1.5rem 0" }}
      />
      <p>{post.content}</p>
    </article>
  );
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((p) => ({ params: { slug: p.slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { notFound: true };
  return { props: { post }, revalidate: 60 };
}
