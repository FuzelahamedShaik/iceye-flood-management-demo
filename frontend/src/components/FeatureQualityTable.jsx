export default function FeatureQualityTable({ rows }) {
  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <h2>Feature & Label Quality</h2>
          <p>Shows how raw observations become trustworthy training labels.</p>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Zone</th>
              <th>SAR conf.</th>
              <th>Rainfall</th>
              <th>Flow index</th>
              <th>Interpretation</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.zone}>
                <td>{row.zone}</td>
                <td>{Math.round(row.sar_observation_confidence * 100)}%</td>
                <td>{row.rainfall_mm_24h} mm</td>
                <td>{Math.round(row.flow_accumulation_index * 100)}%</td>
                <td>{row.interpretation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
