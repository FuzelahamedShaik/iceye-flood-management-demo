import { CheckCircle2 } from "lucide-react";

export default function RecommendationPanel({ recommendation }) {
  if (!recommendation) return null;

  return (
    <div className="panel recommendation-panel">
      <p className="eyebrow">Operational Decision Support</p>
      <h2>{recommendation.priority_zone}</h2>
      <h3>{recommendation.risk_posture}</h3>
      <p>{recommendation.reason}</p>

      <div className="actions-list">
        {recommendation.recommended_actions.map((action, index) => (
          <div className="action-item" key={index}>
            <CheckCircle2 size={18} />
            <span>{action}</span>
          </div>
        ))}
      </div>

      <div className="governance-note">
        {recommendation.model_governance_note}
      </div>
    </div>
  );
}
