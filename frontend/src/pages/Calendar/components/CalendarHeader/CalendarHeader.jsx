import "./CalendarHeader.css";

export default function CalendarHeader({
  currentDate,
  onPrev,
  onNext
}) {
  const monthName =
    currentDate.toLocaleString("es-MX", {
      month: "long"
    });

  const year =
    currentDate.getFullYear();

  return (
    <section className="calendar-header">
      <div>
        <h1 className="calendar-header__title">
          {monthName.toUpperCase()} {year}
        </h1>

        <p className="calendar-header__subtitle">
          Disciplina constante. Sigue construyendo tu legado.
        </p>
      </div>

      <div className="calendar-header__actions">
        <button
          onClick={onPrev}
          className="calendar-header__btn calendar-header__btn--secondary"
        >
          ← Anterior
        </button>

        <button
          onClick={onNext}
          className="calendar-header__btn calendar-header__btn--primary"
        >
          Siguiente →
        </button>
      </div>
    </section>
  );
}