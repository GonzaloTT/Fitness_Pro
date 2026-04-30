import "./CalendarHeader.css";

export default function CalendarHeader() {
  return (
    <section className="calendar-header">
      <div>
        <h1 className="calendar-header__title">OCTUBRE</h1>
        <p className="calendar-header__subtitle">
          Disciplina constante. Sigue construyendo tu legado.
        </p>
      </div>

      <div className="calendar-header__actions">
        <button className="calendar-header__btn calendar-header__btn--secondary">
          ← Anterior
        </button>

        <button className="calendar-header__btn calendar-header__btn--primary">
          Siguiente →
        </button>
      </div>
    </section>
  );
}