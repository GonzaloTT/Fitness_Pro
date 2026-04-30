import "./RecordsCard.css";
import trophyIcon from "../../../../assets/icons/trophy.png";
import calendarIcon from "../../../../assets/icons/calendar1.png";

export default function RecordsCard() {
  return (
    <section className="records-card">
      <h3>RÉCORDS PERSONALES</h3>

      <div className="records-card__item">
        <div className="records-card__left">
          <img
            src={trophyIcon}
            alt="Mejor Racha"
            className="records-card__icon"
          />

          <span>Mejor Racha</span>
        </div>

        <strong>42 d</strong>
      </div>

      <div className="records-card__item">
        <div className="records-card__left">
          <img
            src={calendarIcon}
            alt="Mes más activo"
            className="records-card__icon"
          />

          <span>Mes más activo</span>
        </div>

        <strong>28 d</strong>
      </div>
    </section>
  );
}