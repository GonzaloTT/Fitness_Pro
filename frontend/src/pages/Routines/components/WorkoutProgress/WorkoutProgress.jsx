import "./WorkoutProgress.css";

export default function WorkoutProgress() {
  const progress = {
    completedExercises: 2,
    totalExercises: 6
  };

  const percentage =
    (progress.completedExercises / progress.totalExercises) * 100;

  return (
    <section className="workout-progress">
      <div className="workout-progress__header">
        <h2 className="workout-progress__title">
          Progreso 
        </h2>

        <span className="workout-progress__stats">
          {progress.completedExercises} / {progress.totalExercises} Exercises
        </span>
      </div>

      <div className="workout-progress__bar">
        <div
          className="workout-progress__fill"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="workout-progress__percentage">
        {Math.round(percentage)}% Completado
      </p>
    </section>
  );
}