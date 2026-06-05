import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000/api" || "https://iceye-flood-management-demo.onrender.com";

export const api = {
  health: () => axios.get(`${API_BASE}/health/`).then(res => res.data),
  dashboard: () => axios.get(`${API_BASE}/dashboard/`).then(res => res.data),
  floodZones: () => axios.get(`${API_BASE}/flood-zones/`).then(res => res.data),
  roadRisks: () => axios.get(`${API_BASE}/road-risks/`).then(res => res.data),
  assets: () => axios.get(`${API_BASE}/assets/`).then(res => res.data),
  customers: () => axios.get(`${API_BASE}/customers/`).then(res => res.data),
  recommendations: () => axios.get(`${API_BASE}/recommendations/`).then(res => res.data),
  featureQuality: () => axios.get(`${API_BASE}/feature-quality/`).then(res => res.data),
};
