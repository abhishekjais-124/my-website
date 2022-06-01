from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request,'app/index.html')

def send_message(request):
    print("Hello")
    return render(request,'app/index.html')
    