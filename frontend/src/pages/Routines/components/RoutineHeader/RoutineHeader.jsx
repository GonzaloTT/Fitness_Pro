import "./RoutineHeader.css";
import clockIcon from "../../../../assets/icons/clock.png";
import kcalIcon from "../../../../assets/icons/streak.png";
import videoIcon from "../../../../assets/icons/video.png";
import { useNavigate } from "react-router-dom";

export default function RoutineHeader() {
  const navigate = useNavigate();

  const routine = {
    day: "Monday",
    name: "Push Day",
    focus: "Chest • Shoulders • Triceps",
    duration: "75 min",
    calories: 420,
    status: "not_started" // not_started | active | completed
  };

  const getButtonLabel = () => {
    switch (routine.status) {
      case "active":
        return "Finish Workout";
      case "completed":
        return "Completed";
      default:
        return "Start Workout";
    }
  };

  return (
    <section className="routine-header">
      <div className="routine-header__info">
        <p className="routine-header__day">{routine.day}</p>

        <h1 className="routine-header__name">
          {routine.name}
        </h1>

        <p className="routine-header__focus">
          {routine.focus}
        </p>

        <div className="routine-header__stats">
            <span className="routine-header__stat">
                <img src={clockIcon} alt="Duration" />
                {routine.duration}
            </span>
            <span className="routine-header__stat">
                <img src={kcalIcon} alt="Calories" className="kcal-icon" />
                {routine.calories} kcal expected
            </span>
        </div>
      </div>

    <div className="routine-header__actions">
      <button className="routine-header__camera-button" onClick={() => navigate("/camara")}>
        <img src={videoIcon} alt="Camera Mode" />
        Iniciar modo cámara
      </button>

      <button
        className={`routine-header__button ${
          routine.status === "completed"
            ? "routine-header__button--completed"
            : ""
        }`}
        disabled={routine.status === "completed"}
      >
        {getButtonLabel()}
      </button>
    </div>
    </section>
  );
}