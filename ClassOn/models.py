from django.db import models

# Create your models here.
class schedule(models.Model):
    class_date = models.DateField(auto_now=False, auto_now_add=False)
    Starts = models.TimeField(auto_now=False, auto_now_add=False)
    Ends = models.TimeField(auto_now=False, auto_now_add=False)
    What_Students_Should_Read_About = models.TextField(max_length=None)
    What_Will_Be_taught = models.TextField(max_length=None)
    Students_Cohourt = models.IntegerField()

    def __str__(self):
        return f'Cohourt={self.Students_Cohourt}, Date={self.class_date}'

