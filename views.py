from django.shortcuts import render
import requests

# Create your views here.
def index(request):

    if request.method == "POST":
        identity = request.POST.get('identity')
        url = f"https://srienlinea.sri.gob.ec/sri-catastro-sujeto-servicio-internet/rest/ConsolidadoContribuyente/existePorNumeroRuc?numeroRuc={identity}"
        response = requests.get(url)
        response = response.content
        response = response.decode('utf-8')

        identity = identity[:-3]
        return render(request, 'intro.html',
                      {
                          'message': response,
                          'identity': identity
                      })
    
    return render(request, 'intro.html')
