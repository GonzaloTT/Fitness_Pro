import "./WeightProgressChart.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function WeightProgressChart() {
  const data = [
    { week: "W1", weight: 78 },
    { week: "W2", weight: 77.5 },
    { week: "W3", weight: 77 },
    { week: "W4", weight: 76.8 }
  ];

  return (
    <section className="stats-chart">
      <h2>Weight Progress</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="week" stroke="#71717A" />
          <YAxis stroke="#71717A" />
          <Tooltip />
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