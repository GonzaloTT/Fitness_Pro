import "./ExerciseTable.css";

export default function ExerciseTable() {
  const activeExercise = {
    name: "Incline Dumbbell Press",
    sets: [
      { set: 1, reps: 12, weight: "25 kg", status: "completed" },
      { set: 2, reps: 10, weight: "27.5 kg", status: "completed" },
      { set: 3, reps: 8, weight: "30 kg", status: "active" },
      { set: 4, reps: 8, weight: "30 kg", status: "pending" }
    ]
  };

  return (
    <section className="exercise-table">
      <div className="exercise-table__header">
        <h2 className="exercise-table__title">
          Detalles de ejercicios
        </h2>

        <span className="exercise-table__exercise-name">
          {activeExercise.name}
        </span>
      </div>

      <table className="exercise-table__table">
        <thead>
          <tr>
            <th>Set</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {activeExercise.sets.map((setData) => (
            <tr
              key={setData.set}
              className={`exercise-table__row exercise-table__row--${setData.status}`}
            >
              <td>{setData.set}</td>
              <td>{setData.reps}</td>
              <td>{setData.weight}</td>
              <td>{setData.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}