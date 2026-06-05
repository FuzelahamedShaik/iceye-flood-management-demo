export default function AssetExposureTable({ assets }) {
  return (
    <div className="panel">
      <h2>Critical Infrastructure Exposure</h2>
      <p className="muted">Exposure and access impact for hospitals, shelters, utilities, and response assets.</p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Asset</th>
              <th>Type</th>
              <th>Exposure</th>
              <th>Access</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.id}>
                <td>{asset.asset}</td>
                <td>{asset.type}</td>
                <td>{Math.round(asset.exposure_score * 100)}%</td>
                <td>{asset.access_status}</td>
                <td><span className="priority-chip">{asset.operational_priority}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
