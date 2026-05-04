import "./RoutineHeader.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import clockIcon from "../../../../assets/icons/clock.png";
import kcalIcon from "../../../../assets/icons/streak.png";
import videoIcon from "../../../../assets/icons/video.png";

export default function RoutineHeader() {
  const navigate = useNavigate();

  const [routineStatus, setRoutineStatus] =
    useState("not_started");

  const routine = {
    day: "Monday",
    name: "Push Day",
    focus: "Chest • Shoulders • Triceps",
    duration: "75 min",
    calories: 420
  };

  const handleWorkoutCTA = async () => {
    if (routineStatus === "not_started") {
      setRoutineStatus("active");
      return;
    }

    if (routineStatus === "active") {
      try {
        await fetch(
          "http://localhost:5000/api/stats/demoUser/training",
          {
            method: "POST"
          }
        );

        setRoutineStatus("completed");

        alert(
          "Entrenamiento registrado correctamente"
        );
      } catch (error) {
        console.error(
          "Error guardando entrenamiento:",
          error
        );
      }
    }
  };

  const getButtonLabel = () => {
    switch (routineStatus) {
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
        <p className="routine-header__day">
          {routine.day}
        </p>

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
            <img
              src={kcalIcon}
              alt="Calories"
              className="kcal-icon"
            />
            {routine.calories} kcal expected
          </span>
        </div>
      </div>

      <div className="routine-header__actions">
        <button
          className="routine-header__camera-button"
          onClick={() => navigate("/camara")}
        >
          <img
            src={videoIcon}
            alt="Camera Mode"
          />
          Iniciar modo cámara
        </button>

        <button
          className={`routine-header__button ${
            routineStatus === "completed"
              ? "routine-header__button--completed"
              : ""
          }`}
          disabled={
            routineStatus === "completed"
          }
          onClick={handleWorkoutCTA}
        >
          {getButtonLabel()}
        </button>
      </div>
    </section>
  );
}