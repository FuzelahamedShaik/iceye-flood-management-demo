from rest_framework import serializers

class FloodZoneSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    state = serializers.CharField()
    county = serializers.CharField()
    lat = serializers.FloatField()
    lng = serializers.FloatField()
    flood_probability = serializers.FloatField()
    observation_confidence = serializers.FloatField()
    rainfall_mm_24h = serializers.IntegerField()
    river_stage = serializers.CharField()
    soil_saturation = serializers.FloatField()
    terrain_slope = serializers.FloatField()
    flow_accumulation_index = serializers.FloatField()
    exposed_buildings = serializers.IntegerField()
    estimated_population_exposed = serializers.IntegerField()
    risk_level = serializers.CharField()
    label_quality = serializers.CharField()

class RoadRiskSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    road = serializers.CharField()
    zone = serializers.CharField()
    road_type = serializers.CharField()
    blockage_probability = serializers.FloatField()
    expected_delay_min = serializers.IntegerField()
    alternative_route_available = serializers.BooleanField()
    status = serializers.CharField()

class CriticalAssetSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    asset = serializers.CharField()
    type = serializers.CharField()
    zone = serializers.CharField()
    exposure_score = serializers.FloatField()
    access_status = serializers.CharField()
    operational_priority = serializers.CharField()
