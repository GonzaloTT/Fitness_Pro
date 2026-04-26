import "./AchievementsCard.css";
import streakIcon from "../../../../assets/icons/streak.png";
import zapIcon from "../../../../assets/icons/zap.png";
import sessionIcon from "../../../../assets/icons/session.png";

export default function AchievementsCard() {
  const achievements = [
     {
      title: "7 Day Streak",
      icon: streakIcon
    },
    {
      title: "First 100 Workouts",
      icon: sessionIcon
    },
    {
      title: "Consistency Master",
      icon: zapIcon
    }
  ];

  return (
    <section className="achievements-card">
      <h2>Logros</h2>

    <div className="achievements-card__list">
        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="achievement-item"
          >
            <img
              src={achievement.icon}
              alt={achievement.title}
              className="achievement-item__icon"
            />

            <span>{achievement.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}