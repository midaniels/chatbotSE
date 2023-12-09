# urls.py

from django.urls import path
from chatbot_app.views import chatbot_index


urlpatterns = [
    path('chatbot/', chatbot_index, name='chatbot_index'),

]
