import "./MonthlyCalendar.css";

export default function MonthlyCalendar() {
  const days = Array.from({ length: 35 }, (_, i) => i + 1);

  const trainedDays = [1,2,3,5,6,7,9,10,11,12,15,16,17,18,19,20,21,22,23];

  return (
    <section className="monthly-calendar">
      <div className="monthly-calendar__header">
        <span>Vista mensual</span>
        <span>2026</span>
      </div>

      <div className="monthly-calendar__weekdays">
        {["L","M","X","J","V","S","D"].map(day => (
          <span key={day}>{day}</span>
        ))}
      </div>

      <div className="monthly-calendar__grid">
        {days.map(day => (
          <div
            key={day}
            className={`calendar-day ${
              trainedDays.includes(day)
                ? "calendar-day--trained"
                : ""
            } ${
              day === 23
                ? "calendar-day--today"
                : ""
            }`}
          >
            {day <= 31 ? day : ""}
          </div>
        ))}
      </div>
    </section>
  );
}