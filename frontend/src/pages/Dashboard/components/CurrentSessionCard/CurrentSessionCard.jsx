import "./CurrentSessionCard.css";
import clockIcon from "../../../../assets/icons/clock.png";

export default function CurrentSessionCard() {
  const currentSession = {
    active: true,
    routineName: "Push Day",
    currentExercise: "Incline Dumbbell Press",
    completedExercises: 2,
    totalExercises: 6
  };

  return (
    <div className="session-card">
      <div className="session-card__header">
        <h2 className="session-card__title">Sesion actual</h2>
        <img src={clockIcon} alt="Clock Icon" className="session-card__icon" />
      </div>

      {currentSession.active ? (
        <>
          <div className="session-card__content">
            <h3 className="session-card__routine">
              {currentSession.routineName}
            </h3>

            <p className="session-card__exercise">
              Ejercicio actual:
              <span> {currentSession.currentExercise}</span>
            </p>

            <p className="session-card__progress">
              {currentSession.completedExercises} / {currentSession.totalExercises} Ejercicios completados
            </p>
          </div>

          <button className="session-card__button">
            Reanudar sesion
          </button>
        </>
      ) : (
        <p className="session-card__empty">
          No hay sesion de entrenamiento activa.
        </p>
      )}
    </div>
  );
}