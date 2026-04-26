import "./StatsPeriodToggle.css";

export default function StatsPeriodToggle({
  period,
  setPeriod
}) {
  return (
    <div className="stats-toggle">
      <button className={`stats-toggle__button ${
          period === "weekly"
            ? "stats-toggle__button--active"
            : ""
        }`}
        onClick={() => setPeriod("weekly")}>
        Semanal
      </button>

      <button className={`stats-toggle__button ${
          period === "monthly"
            ? "stats-toggle__button--active"
            : ""
        }`}
        onClick={() => setPeriod("monthly")}>
        Mensual
      </button>
    </div>
  );
}