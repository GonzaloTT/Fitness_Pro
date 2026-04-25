import "./ExerciseList.css";

export default function ExerciseList() {
  const exercises = [
    { id: 1, name: "Bench Press", status: "completed" },
    { id: 2, name: "Incline Dumbbell Press", status: "active" },
    { id: 3, name: "Cable Fly", status: "pending" },
    { id: 4, name: "Lateral Raises", status: "pending" },
    { id: 5, name: "Tricep Pushdown", status: "pending" },
    { id: 6, name: "Overhead Extension", status: "pending" }
  ];

  return (
    <section className="exercise-list">
      <h2 className="exercise-list__title">
        Ejercicios
      </h2>

      <div className="exercise-list__items">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            className={`exercise-list__item exercise-list__item--${exercise.status}`}
          >
            <span className="exercise-list__name">
              {exercise.name}
            </span>

            <span className="exercise-list__status">
              {exercise.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}