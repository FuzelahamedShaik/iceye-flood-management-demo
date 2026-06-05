import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";

function getColor(level) {
  if (level === "Severe") return "#dc2626";
  if (level === "High") return "#f97316";
  if (level === "Moderate") return "#2563eb";
  return "#14b8a6";
}

function getRadius(probability) {
  return 12 + probability * 28;
}

export default function FloodMap({ zones, selectedZone, onSelectZone }) {
  return (
    <MapContainer center={[32.5, -92.5]} zoom={4} className="map-container">
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {zones.map((zone) => (
        <CircleMarker
          key={zone.id}
          center={[zone.lat, zone.lng]}
          radius={getRadius(zone.flood_probability)}
          pathOptions={{
            color: getColor(zone.risk_level),
            fillColor: getColor(zone.risk_level),
            fillOpacity: selectedZone?.id === zone.id ? 0.7 : 0.38,
            weight: selectedZone?.id === zone.id ? 4 : 2,
          }}
          eventHandlers={{
            click: () => onSelectZone(zone),
          }}
        >
          <Popup>
            <div className="popup">
              <strong>{zone.name}</strong>
              <span>{zone.county}, {zone.state}</span>
              <hr />
              <p>Flood probability: {Math.round(zone.flood_probability * 100)}%</p>
              <p>Observation confidence: {Math.round(zone.observation_confidence * 100)}%</p>
              <p>Rainfall 24h: {zone.rainfall_mm_24h} mm</p>
              <p>Risk level: {zone.risk_level}</p>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
