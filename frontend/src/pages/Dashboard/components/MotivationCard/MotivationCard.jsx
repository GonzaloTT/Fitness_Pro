import "./MotivationCard.css";
import zapIcon from "../../../../assets/icons/zap.png";

export default function MotivationCard() {
  const motivationalQuotes = [
    "La disciplina vence a la motivacion.",
    "Un pequeño progreso aun es progreso.",
    "Entrena como la persona que quieres ser.",
    "El exito comienza con la consistencia.",
    "Tu unica competencia eres tu.",
    "No excusas. Solo resultados.",
    "Trabaja mas duro que la ultima vez."
  ];

  const today = new Date().getDay();
  const quote = motivationalQuotes[today];

  return (
    <div className="motivation-card">
      <div className="motivation-card__header">
        <h2 className="motivation-card__title">Consejo del dia</h2>
        <img src={zapIcon} alt="Zap Icon" className="motivation-card__icon" />
      </div>

      <blockquote className="motivation-card__quote">
        "{quote}"
      </blockquote>

      <p className="motivation-card__footer">
        Un consejo nuevo todos los dias.
      </p>
    </div>
  );
}