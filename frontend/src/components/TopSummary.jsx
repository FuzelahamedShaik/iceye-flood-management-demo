import { Activity, AlertTriangle, Route, Building2, Users, Target } from "lucide-react";

const cards = [
  ["active_flood_zones", "Active zones", Activity],
  ["severe_or_high_zones", "Severe / high", AlertTriangle],
  ["roads_at_risk", "Roads at risk", Route],
  ["critical_assets_exposed", "Assets exposed", Building2],
  ["estimated_population_exposed", "Population exposed", Users],
  ["average_observation_confidence", "Avg confidence", Target],
];

function formatValue(key, value) {
  if (key === "average_observation_confidence") return `${Math.round(value * 100)}%`;
  if (typeof value === "number") return value.toLocaleString();
  return value;
}

export default function TopSummary({ summary }) {
  return (
    <section className="summary-grid">
      {cards.map(([key, label, Icon]) => (
        <div className="metric-card" key={key}>
          <div className="metric-icon"><Icon size={20} /></div>
          <span>{label}</span>
          <strong>{formatValue(key, summary?.[key])}</strong>
        </div>
      ))}
    </section>
  );
}
