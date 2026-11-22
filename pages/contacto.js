import SEO from "@/components/SEO";

export default function Contacto() {
  return (
    <>
      <SEO
        title="Contacto: Asesoría en SEO y Next.js | Mi Sitio Optimizado"
        description="Escríbenos para resolver tus dudas sobre optimización SEO, rendimiento web y desarrollo con Next.js. Respondemos en 24 horas."
        path="/contacto"
      />

      <h1>Contacto</h1>
      <form style={{ display: "grid", gap: "1rem", maxWidth: 480, marginTop: "1.5rem" }} onSubmit={(e) => e.preventDefault()}>
        <label>
          Nombre
          <input name="nombre" required style={{ display: "block", width: "100%", padding: 8 }} />
        </label>
        <label>
          Correo
          <input name="email" type="email" required style={{ display: "block", width: "100%", padding: 8 }} />
        </label>
        <label>
          Mensaje
          <textarea name="mensaje" rows={4} required style={{ display: "block", width: "100%", padding: 8 }} />
        </label>
        <button type="submit" style={{ padding: 10, cursor: "pointer" }}>Enviar</button>
      </form>
    </>
  );
}
