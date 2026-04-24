import "./Dashboard.css";
import MainLayout from "../../components/layout/MainLayout/MainLayout";

import StreakCard from "./components/StreakCard/StreakCard";
import MotivationCard from "./components/MotivationCard/MotivationCard";
import CurrentSessionCard from "./components/CurrentSessionCard/CurrentSessionCard";
import CurrentRoutineCard from "./components/CurrentRoutineCard/CurrentRoutineCard";

export default function Dashboard() {
  return (
    <MainLayout>
      <section className="dashboard">
        <h1 className="dashboard__title">Dashboard</h1>

        <div className="dashboard__grid">
          <StreakCard />
          <MotivationCard />
          <CurrentSessionCard />
          <CurrentRoutineCard />
        </div>
      </section>
    </MainLayout>
  );
}