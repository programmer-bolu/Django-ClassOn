from django.shortcuts import render
from .models import schedule
import datetime
# Create your views here.
def index(request):
    time = datetime.datetime.now()
    time = time.strftime("%B-%d-%Y")
    schedules = schedule.objects.all()
    return render(request, 'pages/index.html', {'schedules': schedules, 'date': time})
