import "./TrainingFrequencyChart.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function TrainingFrequencyChart({ period }) {
  const weeklyData = [
    { label: "Mon", value: 1 },
    { label: "Tue", value: 0 },
    { label: "Wed", value: 1 },
    { label: "Thu", value: 1 },
    { label: "Fri", value: 0 },
    { label: "Sat", value: 1 },
    { label: "Sun", value: 1 }
  ];

  const monthlyData = [
    { label: "W1", value: 4 },
    { label: "W2", value: 5 },
    { label: "W3", value: 3 },
    { label: "W4", value: 6 }
  ];

  const data =
    period === "weekly"
      ? weeklyData
      : monthlyData;

  return (
    <section className="stats-chart">
      <h2>Training Frequency</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}
        margin={{
      top: 10,
      right: 20,
      left: -10,
      bottom: 0
      }}
        >
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