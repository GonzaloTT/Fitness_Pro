import "./FormFeedback.css";
import goodIcon from "../../../../assets/icons/good.png"

export default function FormFeedback() {
  return (
    <section className="form-feedback">
      <div className="form-feedback__icon"><img src={goodIcon} alt="Good Icon"/></div>

      <div>
        <span className="form-feedback__label">
          FEEDBACK DEL SISTEMA
        </span>

        <h3 className="form-feedback__title">
          ¡Buen ritmo!
        </h3>

        <p className="form-feedback__text">
          Extiende más el brazo en la fase excéntrica.
        </p>
      </div>
    </section>
  );
}