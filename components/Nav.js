import Link from "next/link";

export default function Nav() {
  return (
    <nav style={{ display: "flex", gap: "1.5rem", padding: "1rem 0", borderBottom: "1px solid #8884", marginBottom: "2rem" }}>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contacto">Contacto</Link>
    </nav>
  );
}
