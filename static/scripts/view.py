# views.py

from django.shortcuts import render

def chatbot_index(request):
    return render(request, 'chatbot_final/index.html')
