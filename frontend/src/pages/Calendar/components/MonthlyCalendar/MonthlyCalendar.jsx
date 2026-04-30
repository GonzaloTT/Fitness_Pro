import "./MonthlyCalendar.css";

export default function MonthlyCalendar({
  currentDate
}) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth =
    new Date(year, month, 1);

  const lastDayOfMonth =
    new Date(year, month + 1, 0);

  const daysInMonth =
    lastDayOfMonth.getDate();

  let startOffset =
    firstDayOfMonth.getDay();

  startOffset =
    startOffset === 0 ? 6 : startOffset - 1;

  const trainedDays = [
    1,2,3,5,6,7,9,10,11,12,15,
    16,17,18,19,20,21,22,23
  ];

  const today = new Date();

  const calendarCells = [];

  for (let i = 0; i < startOffset; i++) {
    calendarCells.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarCells.push(day);
  }

  return (
    <section className="monthly-calendar">
      <div className="monthly-calendar__header">
        <span>Vista mensual</span>
      </div>

      <div className="monthly-calendar__weekdays">
        {["L","M","X","J","V","S","D"].map(day => (
          <span key={day}>{day}</span>
        ))}
      </div>

      <div className="monthly-calendar__grid">
        {calendarCells.map((day, index) => {
          const isToday =
            day &&
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          const isTrained =
            trainedDays.includes(day);

          return (
            <div
              key={index}
              className={`
                calendar-day
                ${isTrained ? "calendar-day--trained" : ""}
                ${isToday ? "calendar-day--today" : ""}
                ${!day ? "calendar-day--empty" : ""}
              `}
            >
              {day}
            </div>
          );
        })}
      </div>
    </section>
  );
}