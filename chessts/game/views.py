from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def play(request):
    # return HttpResponse("Hello, world! You're at the game index.")
    return render(request, 'game/board.html')