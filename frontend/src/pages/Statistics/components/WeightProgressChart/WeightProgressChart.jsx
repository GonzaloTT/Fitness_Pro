import "./WeightProgressChart.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function WeightProgressChart({ period }) {
  const weeklyData = [
    { label: "Mon", weight: 78 },
    { label: "Tue", weight: 77.8 },
    { label: "Wed", weight: 77.6 },
    { label: "Thu", weight: 77.4 },
    { label: "Fri", weight: 77.2 }
  ];

  const monthlyData = [
    { label: "W1", weight: 78 },
    { label: "W2", weight: 77.5 },
    { label: "W3", weight: 77 },
    { label: "W4", weight: 76.8 }
  ];

  const data =
    period === "weekly"
      ? weeklyData
      : monthlyData;


  return (
    <section className="stats-chart">
      <h2>Weight Progress</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} 
      margin={{
      top: 10,
      right: 20,
      left: -10,
      bottom: 0
    }}>
      <CartesianGrid
      stroke="#27272A"
      vertical={false}
    />
          <XAxis dataKey="label" stroke="#71717A" />
          <YAxis stroke="#71717A" />
          <Tooltip 
            contentStyle={{
            backgroundColor: "#18181B",
            border: "1px solid #27272A",
            borderRadius: "12px"
          }}
          />
          <Line
            type="monotone"
            dataKey="weight"
            stroke="#C3F400"
            strokeWidth={3}
            dot={{ fill: "#C3F400", r: 6 }}
            activeDot={{ r: 8, fill: "#C3F400" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}