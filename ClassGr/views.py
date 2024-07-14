from django.shortcuts import render
from .models import schedule
# Create your views here.
def index(request):
    schedules = schedule.objects.all()
    format_schedule = schedules[::-1]

    return render(request, 'pages/index.html', {'schedules': format_schedule})

