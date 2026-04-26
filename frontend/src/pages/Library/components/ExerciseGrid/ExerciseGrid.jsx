import "./ExerciseGrid.css";

export default function ExerciseGrid({
  selectedFilter,
  search
}) {
  const exercises = [
    {
      name: "Press de banca",
      category: "Pecho",
      instructions: "Mantén escápulas retraídas y controla la bajada."
    },
    {
      name: "Dominadas",
      category: "Espalda",
      instructions: "Evita balancearte y sube el pecho hacia la barra."
    },
    {
      name: "Sentadilla",
      category: "Piernas",
      instructions: "Mantén espalda neutra y baja hasta paralelo."
    }
  ];

  const filteredExercises = exercises.filter((exercise) => {
    const matchesFilter =
      selectedFilter === "Todos" ||
      exercise.category === selectedFilter;

    const matchesSearch =
      exercise.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      exercise.category
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <section className="exercise-grid">
      {filteredExercises.map((exercise) => (
        <article
          key={exercise.name}
          className="exercise-card"
        >
          <span className="exercise-card__category">
            {exercise.category}
          </span>

          <h3>{exercise.name}</h3>

          <p>{exercise.instructions}</p>
        </article>
      ))}
    </section>
  );
}