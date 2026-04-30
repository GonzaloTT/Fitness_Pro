import "./StreakSummary.css";
import streakIcon from "../../../../assets/icons/streak.png";

export default function StreakSummary() {
  return (
    <section className="streak-summary">
      <span className="streak-summary__label">
        RACHA ACTUAL
      </span>

      <h2 className="streak-summary__value">
        8 <span>Días</span>
      </h2>

      <p className="streak-summary__message">
        <img
          src={streakIcon}
          alt="Racha"
          className="streak-summary__icon"
        />
        ¡Mantén el ritmo!
      </p>
    </section>
  );
}