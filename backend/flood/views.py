from rest_framework.decorators import api_view
from rest_framework.response import Response
from .dummy_data import (
    FLOOD_ZONES,
    ROAD_RISKS,
    CRITICAL_ASSETS,
    CUSTOMER_SEGMENTS,
    RECOMMENDATIONS,
    compute_dashboard_summary,
)

@api_view(["GET"])
def health(request):
    return Response({"status": "ok", "service": "ICEYE Flood Impact Intelligence Demo API"})

@api_view(["GET"])
def dashboard(request):
    return Response(compute_dashboard_summary())

@api_view(["GET"])
def flood_zones(request):
    state = request.query_params.get("state")
    data = FLOOD_ZONES
    if state:
        data = [z for z in data if z["state"].lower() == state.lower()]
    return Response(data)

@api_view(["GET"])
def road_risks(request):
    return Response(ROAD_RISKS)

@api_view(["GET"])
def critical_assets(request):
    return Response(CRITICAL_ASSETS)

@api_view(["GET"])
def customer_segments(request):
    return Response(CUSTOMER_SEGMENTS)

@api_view(["GET"])
def recommendations(request):
    return Response(RECOMMENDATIONS)

@api_view(["GET"])
def feature_quality(request):
    rows = []
    for zone in FLOOD_ZONES:
        rows.append({
            "zone": zone["name"],
            "sar_observation_confidence": zone["observation_confidence"],
            "rainfall_mm_24h": zone["rainfall_mm_24h"],
            "soil_saturation": zone["soil_saturation"],
            "terrain_slope": zone["terrain_slope"],
            "flow_accumulation_index": zone["flow_accumulation_index"],
            "label_quality": zone["label_quality"],
            "interpretation": "Physically plausible flood signal" if zone["observation_confidence"] > 0.8 else "Needs validation before training label use",
        })
    return Response(rows)
