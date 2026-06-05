import { useEffect, useMemo, useState } from "react";
import { api } from "./api";
import Sidebar from "./components/Sidebar";
import TopSummary from "./components/TopSummary";
import FloodMap from "./components/FloodMap";
import ZoneDetails from "./components/ZoneDetails";
import RoadRiskTable from "./components/RoadRiskTable";
import AssetExposureTable from "./components/AssetExposureTable";
import RecommendationPanel from "./components/RecommendationPanel";
import FeatureQualityTable from "./components/FeatureQualityTable";
import CustomerSegments from "./components/CustomerSegments";

export default function App() {
  const [summary, setSummary] = useState(null);
  const [zones, setZones] = useState([]);
  const [roads, setRoads] = useState([]);
  const [assets, setAssets] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [recommendations, setRecommendations] = useState(null);
  const [featureQuality, setFeatureQuality] = useState([]);
  const [selectedZone, setSelectedZone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.dashboard(),
      api.floodZones(),
      api.roadRisks(),
      api.assets(),
      api.customers(),
      api.recommendations(),
      api.featureQuality(),
    ])
      .then(([dashboard, floodZones, roadRisks, criticalAssets, customerData, recs, quality]) => {
        setSummary(dashboard);
        setZones(floodZones);
        setRoads(roadRisks);
        setAssets(criticalAssets);
        setCustomers(customerData);
        setRecommendations(recs);
        setFeatureQuality(quality);
        setSelectedZone(floodZones[0]);
      })
      .finally(() => setLoading(false));
  }, []);

  const selectedRoads = useMemo(() => {
    if (!selectedZone) return roads;
    return roads.filter((road) => road.zone === selectedZone.name);
  }, [roads, selectedZone]);

  const selectedAssets = useMemo(() => {
    if (!selectedZone) return assets;
    return assets.filter((asset) => asset.zone === selectedZone.name);
  }, [assets, selectedZone]);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader" />
        <p>Loading flood impact intelligence...</p>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content">
        <section className="hero">
          <div>
            <p className="eyebrow">US Market Demo • SAR + Hydrology + Impact Intelligence</p>
            <h1>Flood Impact Intelligence Platform</h1>
            <p className="hero-text">
              A production-style demo showing how ICEYE-like satellite observations,
              hydrological signals, terrain features, road networks, and critical
              infrastructure data can be converted into operational flood impact decisions.
            </p>
          </div>
          <div className="hero-badge">
            <span>Director View</span>
            <strong>Decision-grade risk intelligence</strong>
          </div>
        </section>

        <TopSummary summary={summary} />

        <section className="dashboard-grid">
          <div className="panel map-panel">
            <div className="panel-header">
              <div>
                <h2>Flood Risk Map</h2>
                <p>Click a zone to inspect hydrological signals, label confidence, and exposure.</p>
              </div>
            </div>
            <FloodMap zones={zones} selectedZone={selectedZone} onSelectZone={setSelectedZone} />
          </div>

          <ZoneDetails zone={selectedZone} />
        </section>

        <section className="dashboard-grid">
          <RecommendationPanel recommendation={recommendations} />
          <FeatureQualityTable rows={featureQuality} />
        </section>

        <section className="dashboard-grid">
          <RoadRiskTable roads={selectedRoads} />
          <AssetExposureTable assets={selectedAssets} />
        </section>

        <CustomerSegments customers={customers} />
      </main>
    </div>
  );
}
