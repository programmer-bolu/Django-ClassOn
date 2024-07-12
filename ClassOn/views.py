from django.shortcuts import render
from .models import schedule
import datetime
# Create your views here.
def index(request):
    date = datetime.datetime.now()
    date = date.strftime("%m-%d-%Y")
    schedules = schedule.objects.all()
    
    for items in schedules:
        items.class_date = items.class_date.strftime("%m-%d-%Y")
        print(items.class_date)

        # if schedules < time:
        #     items.class_date = False
        # elif schedules > time:
        #     True
        # else:
        #     'data'

    
    return render(request, 'pages/index.html', {'schedules': schedules, 'date': date})
