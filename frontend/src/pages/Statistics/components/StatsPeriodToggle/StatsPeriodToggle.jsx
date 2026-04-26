import "./StatsPeriodToggle.css";

export default function StatsPeriodToggle() {
  return (
    <div className="stats-toggle">
      <button className="stats-toggle__button stats-toggle__button--active">
        Semanal
      </button>

      <button className="stats-toggle__button">
        Mensual
      </button>
    </div>
  );
}