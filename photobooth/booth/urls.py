from django.urls import path
from booth import views

from django.conf import settings
from django.conf.urls.static import static
from .views import  AppointmentTemplateView, ManageAppointmentTemplateView


urlpatterns = [
     path('', views.home, name='home'),
     path('portfolio/', views.portfolio, name='portfolio'),
     path('printing_page/', views.printing_page, name='printing_page'),
     path('branding_page/', views.branding_page, name='branding_page'),
     path('all_services/', views.all_services, name='all_services'),
     path('template_page/', views.template_page, name='template_page'),

     path('dashboard/', views.dashboard, name='dashboard'),
     path('about/', views.about, name='about'), 
     path('services/', views.services, name='services'),
     path("make-an-appointment/", AppointmentTemplateView.as_view(), name="appointment"),
     path('success_message/', views.success_message, name='success_message'),
     path("manage-appointments/", ManageAppointmentTemplateView.as_view(), name="manage"),

]
 

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
