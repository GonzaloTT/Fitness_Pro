import "./TrainingFrequencyChart.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function TrainingFrequencyChart() {
  const data = [
    { day: "Mon", value: 1 },
    { day: "Tue", value: 0 },
    { day: "Wed", value: 1 },
    { day: "Thu", value: 1 },
    { day: "Fri", value: 0 },
    { day: "Sat", value: 1 },
    { day: "Sun", value: 1 }
  ];

  return (
    <section className="stats-chart">
      <h2>Training Frequency</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#71717A" />
          <YAxis stroke="#71717A" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
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