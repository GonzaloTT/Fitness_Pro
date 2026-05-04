import { useState, useEffect } from "react";
import "./Statistics.css";

import MainLayout from "../../components/layout/MainLayout/MainLayout";

import StatsHeader from "./components/StatsHeader/StatsHeader";
import StatsPeriodToggle from "./components/StatsPeriodToggle/StatsPeriodToggle";
import TrainingFrequencyChart from "./components/TrainingFrequencyChart/TrainingFrequencyChart";
import WeightProgressChart from "./components/WeightProgressChart/WeightProgressChart";
import AIInsightCard from "./components/AIInsightCard/AIInsightCard";

export default function Statistics() {
  const [period, setPeriod] = useState("weekly");

  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch(
          "http://localhost:5000/api/stats/demoUser"
        );

        const data = await response.json();

        setStats(data);
      } catch (error) {
        console.error(
          "Error loading stats:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (loading) {
    return (
      <MainLayout>
        <p>Cargando estadísticas...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="statistics">
        <StatsHeader />

        <StatsPeriodToggle
          period={period}
          setPeriod={setPeriod}
        />

        <TrainingFrequencyChart
          period={period}
          data={stats?.trainingFrequency || []}
        />

        <WeightProgressChart
          period={period}
          data={stats?.weightHistory || []}
        />

        <AIInsightCard
          period={period}
          stats={stats}
        />
      </section>
    </MainLayout>
  );
}