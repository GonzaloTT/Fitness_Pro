import "./RepsCounter.css";

export default function RepsCounter({ stats }) {
  const leftReps  = stats?.reps?.left  ?? "--";
  const rightReps = stats?.reps?.right ?? "--";
  const total     = stats ? (stats.reps.left + stats.reps.right) : "--";

  return (
    <section className="reps-counter">
      <span className="reps-counter__label">REPETICIONES COMPLETADAS</span>
      <div className="reps-counter__numbers">
        <span className="reps-counter__current">{String(total).padStart(2, "0")}</span>
        <span className="reps-counter__total">total</span>
      </div>
      <div className="reps-counter__arms">
        <div className="reps-counter__arm">
          <span className="reps-counter__arm-label">IZQ</span>
          <span className="reps-counter__arm-value">{leftReps}</span>
        </div>
        <div className="reps-counter__divider" />
        <div className="reps-counter__arm">
          <span className="reps-counter__arm-label">DER</span>
          <span className="reps-counter__arm-value">{rightReps}</span>
        </div>
      </div>
      {stats && (
        <div className="reps-counter__meta">
          <span>{stats.fps} FPS</span>
          {stats.cpu_temp > 0 && <span>CPU {stats.cpu_temp.toFixed(0)}°C</span>}
        </div>
      )}
    </section>
  );
}
