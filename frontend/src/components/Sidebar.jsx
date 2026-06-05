import { Satellite, Waves, Route, ShieldAlert, Building2, Users } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon"><Satellite size={22} /></div>
        <div>
          <h2>Flood IQ</h2>
          <p>ICEYE-style demo</p>
        </div>
      </div>

      <nav className="nav">
        <a><Waves size={17} /> Flood observations</a>
        <a><Route size={17} /> Accessibility risk</a>
        <a><Building2 size={17} /> Critical assets</a>
        <a><ShieldAlert size={17} /> Response actions</a>
        <a><Users size={17} /> Customer value</a>
      </nav>

      <div className="sidebar-card">
        <h3>Product Need</h3>
        <p>
          Convert noisy flood observations into validated features, high-quality labels,
          and operational impact scores for FEMA, insurers, utilities, and emergency agencies.
        </p>
      </div>
    </aside>
  );
}
