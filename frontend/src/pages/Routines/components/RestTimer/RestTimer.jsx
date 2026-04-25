import "./RestTimer.css";

export default function RestTimer() {
  const timer = {
    time: "01:30",
    status: "idle" // idle | running | paused
  };

  return (
    <section className="rest-timer">
      <div className="rest-timer__header">
        <h2 className="rest-timer__title">Descanso</h2>
      </div>

      <div className="rest-timer__display">
        {timer.time}
      </div>

      <div className="rest-timer__controls">
        <button className="rest-timer__button">
          Start
        </button>

        <button className="rest-timer__button rest-timer__button--secondary">
          Pause
        </button>

        <button className="rest-timer__button rest-timer__button--secondary">
          Reset
        </button>
      </div>
    </section>
  );
}