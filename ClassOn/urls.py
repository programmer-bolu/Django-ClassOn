from . import views
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('', views.index, name='home'),
    path('about/', TemplateView.as_view(template_name='pages/about.html'), name='about'),
]