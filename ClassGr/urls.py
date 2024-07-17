from . import views
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name='static-pages/home.html'), name='home'),
    path('signup/', TemplateView.as_view(template_name='static-pages/createanaccount.html'), name='createaccount'),
    path('about/', TemplateView.as_view(template_name='static-pages/about.html'), name='about'),
    path('feedback/', TemplateView.as_view(template_name='static-pages/feedback.html'), name='feedback'),
    path('features/', TemplateView.as_view(template_name='static-pages/features.html'), name='features'),
]