import requests
import json


mongeralaegon = requests.get('https://gateway.gr1d.io/sandbox/mongeralaegon/v1/modeloproposta?cnpj=11321351000110&completo=true&canalVenda=4',
                headers={
                    'X-Api-Key': 'd6395df3-35a7-49e9-921f-d8b14a38c940'
                })

res = json.loads(mongeralaegon.text)
print("Mongeralageon")
for i in res['Valor'][0]['produtos']:
    print('Seguro: {} | Idade mínima: {} | Idade máxima: {}'.format(i['descricao'], i['idadeMinima'], i['idadeMaxima']))



url = 'https://gateway.gr1d.io/sandbox/travelace/v1/beneficios?idioma=portugues&tipoTarifa=1&nacional=true'
seguro_viagem = requests.get(url, headers={
    'X-Api-Key': '6f6ce3cb-c2bb-4007-a3de-421a1152a413'
})
res = json.loads(seguro_viagem.text)
print('\nSeguro viagem nacional')

for i in res['beneficios']:
    print('Seguro: {}'.format(i['descricao']))



url = 'https://gateway.gr1d.io/sandbox/travelace/v1/beneficios?idioma=portugues&tipoTarifa=1&nacional=false'
seguro_viagem = requests.get(url, headers={
    'X-Api-Key': '6f6ce3cb-c2bb-4007-a3de-421a1152a413'
})
res = json.loads(seguro_viagem.text)
print('\nSeguro viagem exterior')

for i in res['beneficios']:
    print('Seguro: {}'.format(i['descricao']))
