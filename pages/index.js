import Image from "next/image";
import dynamic from "next/dynamic";
import SEO from "@/components/SEO";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  return (
    <>
      <SEO
        title="Optimización SEO y Rendimiento en Next.js | Mi Sitio Optimizado"
        description="Aprende técnicas avanzadas de SEO y rendimiento en Next.js: meta tags dinámicos, sitemaps, imágenes optimizadas y lazy loading."
        path="/"
      />

      <h1>Bienvenido a mi página optimizada</h1>
      <p style={{ margin: "1rem 0" }}>Aprende cómo mejorar el rendimiento y SEO en Next.js.</p>
      <Image
        src="/images/seo-image.png"
        width={800}
        height={400}
        alt="Ejemplo de imagen optimizada"
        priority
        style={{ width: "100%", height: "auto", borderRadius: 8 }}
      />
      <div style={{ marginTop: "2rem" }}>
        <DynamicComponent />
      </div>
    </>
  );
}
