import { useState } from "react";
import "./Calendar.css";

import MainLayout from "../../components/layout/MainLayout/MainLayout";

import CalendarHeader from "./components/CalendarHeader/CalendarHeader";
import MonthlyCalendar from "./components/MonthlyCalendar/MonthlyCalendar";
import StreakSummary from "./components/StreakSummary/StreakSummary";
import ConsistencyCard from "./components/ConsistencyCard/ConsistencyCard";
import RecordsCard from "./components/RecordsCard/RecordsCard";

export default function Calendar() {
  const [currentDate, setCurrentDate] =
    useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate(prev =>
      new Date(
        prev.getFullYear(),
        prev.getMonth() - 1,
        1
      )
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(prev =>
      new Date(
        prev.getFullYear(),
        prev.getMonth() + 1,
        1
      )
    );
  };

  return (
    <MainLayout>
      <section className="calendar-page">
        <CalendarHeader
          currentDate={currentDate}
          onPrev={handlePrevMonth}
          onNext={handleNextMonth}
        />

        <div className="calendar-page__grid">
          <MonthlyCalendar currentDate={currentDate} />

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