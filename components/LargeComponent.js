export default function LargeComponent() {
  const items = Array.from({ length: 20 }, (_, i) => `Elemento ${i + 1}`);

  return (
    <section>
      <h2>Componente cargado con Lazy Loading</h2>
      <p>Este componente se descarga en un chunk separado, solo cuando se necesita.</p>
      <ul style={{ paddingLeft: "1.25rem" }}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
