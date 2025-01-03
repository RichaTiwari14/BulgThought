"""
URL configuration for bulgthoughts project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import path
from BulgThoughtsApp.views import BulgThoughtRegistrationAPI, ContactAPI, PostPoemAPI
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', admin.site.urls),
    path('registration/', BulgThoughtRegistrationAPI.as_view(), name='registration_api'),
    path('contact/', ContactAPI.as_view(), name='contact_api'),
    path('post-poem/', PostPoemAPI.as_view(), name='post_poem_api'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)