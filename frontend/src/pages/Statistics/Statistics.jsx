import { useState } from "react";
import "./Statistics.css";

import MainLayout from "../../components/layout/MainLayout/MainLayout";

import StatsHeader from "./components/StatsHeader/StatsHeader";
import StatsPeriodToggle from "./components/StatsPeriodToggle/StatsPeriodToggle";
import TrainingFrequencyChart from "./components/TrainingFrequencyChart/TrainingFrequencyChart";
import WeightProgressChart from "./components/WeightProgressChart/WeightProgressChart";
import AIInsightCard from "./components/AIInsightCard/AIInsightCard";

export default function Statistics() {
  const [period, setPeriod] = useState("weekly");

  return (
    <MainLayout>
      <section className="statistics">
        <StatsHeader />
        <StatsPeriodToggle period={period} setPeriod={setPeriod}/>
        <TrainingFrequencyChart period={period}/>
        <WeightProgressChart period={period}/>
        <AIInsightCard period={period}/>
      </section>
    </MainLayout>
  );
}