from django.urls import path
from . import views
from django.contrib.auth.views import LogoutView
urlpatterns = [
    path('',views.home,name="home"),
    path('about',views.about,name="about"),
    path('tickers/',views.stocktickers,name="tickers"),
    path('search/',views.search,name="search"),
]