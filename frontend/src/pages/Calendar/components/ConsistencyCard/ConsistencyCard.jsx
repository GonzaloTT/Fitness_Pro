import "./ConsistencyCard.css";

export default function ConsistencyCard() {
  return (
    <section className="consistency-card">
      <h3>CONSISTENCIA OCTUBRE</h3>

      <div className="consistency-card__circle">
        <span>82%</span>
      </div>

      <div className="consistency-card__stats">
        <div>
          <strong>19</strong>
          <span>Entrenados</span>
        </div>

        <div>
          <strong>4</strong>
          <span>Descanso</span>
        </div>
      </div>
    </section>
  );
}