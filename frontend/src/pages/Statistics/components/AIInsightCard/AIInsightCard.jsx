import "./AIInsightCard.css";

export default function AIInsightCard({ period }) {
  return (
    <section className="ai-insight">
      <h2>AI Insight</h2>

      <p>
        {period === "weekly"
          ? "Your weekly consistency improved by 12%."
          : "Your monthly performance trend is positive with sustained progress."}
      </p>
    </section>
  );
}