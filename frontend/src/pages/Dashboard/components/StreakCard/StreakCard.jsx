import "./StreakCard.css";
import streakIcon from "../../../../assets/icons/streak.png";

export default function StreakCard() {
  const streakDays = 0;

  return (
    <div className="streak-card">
      <div className="streak-card__header">
        <h2 className="streak-card__title">Racha actual</h2>
        <img src={streakIcon} alt="Streak Icon" className="streak-card__icon" />
      </div>

      <div className="streak-card__body">
        <p className="streak-card__days">{streakDays}</p>
        <span className="streak-card__label">Dias de actividad</span>
      </div>

      <p className="streak-card__message">
        Sigue asi — 3 dias mas para tu siguiente recompensa.
      </p>
    </div>
  );
}