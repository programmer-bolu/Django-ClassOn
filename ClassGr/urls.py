from . import views
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('', views.index, name='home'),
    path('reportbug/', TemplateView.as_view(template_name='pages/reportbug.html'), name='reportbug'),
]