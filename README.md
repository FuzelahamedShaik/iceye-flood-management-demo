# ICEYE Flood Impact Intelligence Demo

A production-style local demo showing how satellite-derived flood observations, hydrological indicators, terrain features, road networks, and infrastructure layers can be converted into operational flood impact intelligence.

## What this demo shows

- Flood risk zones with probability and observation confidence
- Road blockage and accessibility-loss indicators
- Critical infrastructure exposure
- Community isolation risk
- Decision recommendations for emergency response
- FEMA / NOAA / USGS-style dummy data model
- Django REST API backend
- React + Leaflet frontend

## Tech Stack

Backend:
- Python
- Django
- Django REST Framework
- django-cors-headers

Frontend:
- React
- Vite
- Axios
- React Leaflet / Leaflet
- CSS dashboard layout

## Folder Structure

```text
iceye-flood-impact-intelligence/
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   ├── flood_api/
│   └── flood/
│       ├── dummy_data.py
│       ├── serializers.py
│       ├── urls.py
│       └── views.py
└── frontend/
    ├── package.json
    ├── index.html
    ├── vite.config.js
    └── src/
        ├── App.jsx
        ├── api.js
        ├── main.jsx
        ├── styles.css
        └── components/
```

---

## Run Backend

```bash
cd backend
python -m venv venv
```

Windows:

```bash
venv\Scripts\activate
```

Mac/Linux:

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run Django server:

```bash
python manage.py migrate
python manage.py runserver
```

Backend runs at:

```text
http://127.0.0.1:8000
```

Useful API endpoints:

```text
http://127.0.0.1:8000/api/health/
http://127.0.0.1:8000/api/dashboard/
http://127.0.0.1:8000/api/flood-zones/
http://127.0.0.1:8000/api/road-risks/
http://127.0.0.1:8000/api/assets/
http://127.0.0.1:8000/api/recommendations/
```

---

## Run Frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## Product Story

This demo is designed to explain the ICEYE Flood Data Scientist role in a practical way:

> The product need is not only flood detection. The product need is reliable hydrological feature engineering, label quality, uncertainty-aware validation, and operational impact scoring.

The dashboard turns dummy satellite/hydrological/geospatial observations into:

- risk scores
- road disruption alerts
- exposed critical assets
- community isolation signals
- decision recommendations

This helps a recruiter or technical interviewer understand how the candidate thinks about ICEYE’s business problem.

---

## Notes

This is a local demo using static dummy data. It does not connect to real ICEYE, FEMA, NOAA, or USGS APIs.
