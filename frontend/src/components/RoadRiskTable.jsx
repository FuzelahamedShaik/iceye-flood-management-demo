export default function RoadRiskTable({ roads }) {
  return (
    <div className="panel">
      <h2>Road Accessibility Risk</h2>
      <p className="muted">Road blockage probability and expected response delay for the selected zone.</p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Road</th>
              <th>Type</th>
              <th>Blockage</th>
              <th>Delay</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {roads.map((road) => (
              <tr key={road.id}>
                <td>{road.road}</td>
                <td>{road.road_type}</td>
                <td>{Math.round(road.blockage_probability * 100)}%</td>
                <td>{road.expected_delay_min} min</td>
                <td><span className="status-chip">{road.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
