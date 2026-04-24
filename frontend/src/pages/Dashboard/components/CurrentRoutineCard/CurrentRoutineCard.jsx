import "./CurrentRoutineCard.css";
import sessionIcon from "../../../../assets/icons/session.png";

export default function CurrentRoutineCard() {
  const currentRoutine = {
    name: "Push Day",
    focus: "Chest • Shoulders • Triceps",
    exercises: 6,
    duration: "75 min"
  };

  return (
    <div className="routine-card">
      <div className="routine-card__header">
        <h2 className="routine-card__title">Rutina actual</h2>
        <img src={sessionIcon} alt="Routine Icon" className="routine-card__icon" />
      </div>

      <div className="routine-card__content">
        <h3 className="routine-card__name">{currentRoutine.name}</h3>
        <p className="routine-card__focus">{currentRoutine.focus}</p>

        <div className="routine-card__stats">
          <span>{currentRoutine.exercises} Ejercicios</span>
          <span>{currentRoutine.duration}</span>
        </div>
      </div>

      <button className="routine-card__button">
        Iniciar entrenamiento
      </button>
    </div>
  );
}