from django.urls import path
from . import views

urlpatterns = [
    path('signup/organization/', views.organizations, name='createorganization'),
    path('signup/student/', views.students, name='createstudent'),
    path('signup/admin/', views.admin, name='createadmin'),
    path('signup/instructor/', views.instructor, name='createinstructor'),
]