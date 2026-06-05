export default function ZoneDetails({ zone }) {
  if (!zone) return null;

  return (
    <div className="panel detail-panel">
      <div className="risk-pill">{zone.risk_level}</div>
      <h2>{zone.name}</h2>
      <p className="muted">{zone.county}, {zone.state}</p>

      <div className="detail-list">
        <div><span>Flood probability</span><strong>{Math.round(zone.flood_probability * 100)}%</strong></div>
        <div><span>Observation confidence</span><strong>{Math.round(zone.observation_confidence * 100)}%</strong></div>
        <div><span>24h rainfall</span><strong>{zone.rainfall_mm_24h} mm</strong></div>
        <div><span>River stage</span><strong>{zone.river_stage}</strong></div>
        <div><span>Soil saturation</span><strong>{Math.round(zone.soil_saturation * 100)}%</strong></div>
        <div><span>Flow accumulation</span><strong>{Math.round(zone.flow_accumulation_index * 100)}%</strong></div>
        <div><span>Exposed buildings</span><strong>{zone.exposed_buildings.toLocaleString()}</strong></div>
        <div><span>Population exposed</span><strong>{zone.estimated_population_exposed.toLocaleString()}</strong></div>
      </div>

      <div className="label-quality">
        <span>Label quality</span>
        <p>{zone.label_quality}</p>
      </div>
    </div>
  );
}
