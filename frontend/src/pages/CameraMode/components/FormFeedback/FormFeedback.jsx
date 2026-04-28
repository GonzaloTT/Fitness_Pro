import "./FormFeedback.css";
import goodIcon  from "../../../../assets/icons/good.png";

const STATE_LABELS = {
  waiting:    { title: "Listo",        text: "Extiende el brazo para comenzar.",          icon: goodIcon, accent: "#C3F400" },
  going_up:   { title: "¡Subiendo!",   text: "Contrae el bícep con control.",             icon: goodIcon, accent: "#A3E635" },
  at_top:     { title: "¡Arriba!",     text: "Baja lentamente, controla la fase excéntrica.", icon: goodIcon, accent: "#A3E635" },
  going_down: { title: "Bajando…",     text: "Extiende bien el brazo antes del siguiente curl.", icon: goodIcon, accent: "#C3F400" },
};

export default function FormFeedback({ stats }) {
  const leftState  = stats?.state?.left  ?? "waiting";
  const rightState = stats?.state?.right ?? "waiting";

  // Mostrar el estado más "activo" de los dos brazos
  const priority = ["going_up", "at_top", "going_down", "waiting"];
  const activeState = priority.find(s => s === leftState || s === rightState) ?? "waiting";

  const badForm = stats?.bad_form?.left || stats?.bad_form?.right;
  const feedback = badForm
    ? { title: "Extiende más", text: "Baja el brazo completamente antes del siguiente curl.", icon: goodIcon, accent: "#EF4444" }
    : STATE_LABELS[activeState];

  return (
    <section className="form-feedback" style={{ borderLeftColor: feedback.accent }}>
      <div className="form-feedback__icon" style={{ background: `${feedback.accent}1F` }}>
        <img src={feedback.icon} alt="Feedback icon" />
      </div>
      <div>
        <span className="form-feedback__label">FEEDBACK DEL SISTEMA</span>
        <h3 className="form-feedback__title">{feedback.title}</h3>
        <p className="form-feedback__text">{feedback.text}</p>
      </div>
    </section>
  );
}
