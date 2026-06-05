from django.urls import path
from . import views

urlpatterns = [
    path("health/", views.health),
    path("dashboard/", views.dashboard),
    path("flood-zones/", views.flood_zones),
    path("road-risks/", views.road_risks),
    path("assets/", views.critical_assets),
    path("customers/", views.customer_segments),
    path("recommendations/", views.recommendations),
    path("feature-quality/", views.feature_quality),
]
