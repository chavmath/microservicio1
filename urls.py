from microservicio1 import views
from django.urls import path

app_name = 'microservicio1'

urlpatterns = [
   path('', views.index, name='index')
]
