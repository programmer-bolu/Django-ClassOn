from django.shortcuts import render

# Create your views here.
def organizations(request):
    return render(request, 'signup-pages/organization.html')


def students(request):
    return render(request, 'students.html')

def admin(request):
    return render(request, 'students.html')

def instructor(request):
    return render(request, 'students.html')