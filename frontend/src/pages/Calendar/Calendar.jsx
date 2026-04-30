import "./Calendar.css";

import MainLayout from "../../components/layout/MainLayout/MainLayout";

import CalendarHeader from "./components/CalendarHeader/CalendarHeader";
import MonthlyCalendar from "./components/MonthlyCalendar/MonthlyCalendar";
import StreakSummary from "./components/StreakSummary/StreakSummary";
import ConsistencyCard from "./components/ConsistencyCard/ConsistencyCard";
import RecordsCard from "./components/RecordsCard/RecordsCard";

export default function Calendar() {
  return (
    <MainLayout>
      <section className="calendar-page">
        <CalendarHeader />

        <div className="calendar-page__grid">
          <MonthlyCalendar />

          <aside className="calendar-page__sidebar">
            <StreakSummary />
            <ConsistencyCard />
            <RecordsCard />
          </aside>
        </div>
      </section>
    </MainLayout>
  );
}