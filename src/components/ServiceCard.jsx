export default function ServiceCard({ titulo, descripcion, icono }) {
  return (
    <article className="service-card">
      <div className="service-card__icono">{icono}</div>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </article>
  );
}
