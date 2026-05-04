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

export default function TrainingFrequencyChart({
  period,
  data
}) {
  const now = new Date();

  const formattedData =
    period === "weekly"
      ? data
          .filter(entry => {
            const date = new Date(entry.date);

            const diffDays =
              (now - date) / (1000 * 60 * 60 * 24);

            return diffDays <= 7;
          })
          .map(entry => ({
            label: new Date(entry.date)
              .toLocaleDateString("es-MX", {
                weekday: "short"
              }),
            value: entry.trained ? 1 : 0
          }))

      : data
          .reduce((weeks, entry) => {
            const date = new Date(entry.date);

            const week =
              Math.ceil(date.getDate() / 7);

            const existingWeek =
              weeks.find(
                w => w.label === `W${week}`
              );

            if (existingWeek) {
              existingWeek.value += 1;
            } else {
              weeks.push({
                label: `W${week}`,
                value: 1
              });
            }

            return weeks;
          }, []);

  return (
    <section className="stats-chart">
      <h2>Training Frequency</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={formattedData}
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

          <XAxis
            dataKey="label"
            stroke="#71717A"
          />

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
            activeDot={{
              r: 8,
              fill: "#C3F400"
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}