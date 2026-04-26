import "./RepsCounter.css";

export default function RepsCounter() {
  return (
    <section className="reps-counter">
      <span className="reps-counter__label">
        REPETICIONES COMPLETADAS
      </span>

      <div className="reps-counter__numbers">
        <span className="reps-counter__current">08</span>
        <span className="reps-counter__total">/12</span>
      </div>
    </section>
  );
}