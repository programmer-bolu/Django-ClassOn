from django.urls import path, re_path
from . import views

urlpatterns = [
    path('organization', views.organization, name='organizatioin-complete')
]