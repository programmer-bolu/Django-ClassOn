from django.shortcuts import render

# Create your views here.
def organizations(request):
    return render(request, 'signup-pages/organization.html')


def students(request):
    return render(request, 'signup-pages/student.html')

def admin(request):
    return render(request, 'signup-pages/admin.html')

def instructor(request):
    return render(request, 'signup-pages/instructor.html')