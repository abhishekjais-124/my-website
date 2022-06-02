from django.shortcuts import render
from django.core.mail import send_mail

# Create your views here.

def home(request):
    return render(request,'app/index.html')

def send_message(request):
    if request.method == 'POST':
        subject = "Message from portfolio by " + request.POST.get('sname', 'Unknown')
        message = request.POST.get('message', '')
        email = 'abhishekjais124124@gmail.com'
        print(subject,message,email)
        send_mail(
            subject,
            message,
            email,
            ['abhishekjaiswal124@gmail.com'],
            fail_silently=False,
        )
        print("sent")
    return render(request,'app/index.html')
    