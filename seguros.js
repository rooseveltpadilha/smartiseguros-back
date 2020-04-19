const seguro = {
  'saude': {
    'nome': 'Plano de saúde',
    'descricao': 'Com ampla rede médica e os melhores hospitais, o plano Bradesco tem a melhor rede médica. Reembolso, exames, consultas, internações e cirurgias, tudo para manter você tranquilo.',
    'empresa': 'SulAmérica',
    'url': 'http://sulamericasaudesa.com.br/imagens/logo_sulamerica.gif',
  },
  'odonto': {
    'nome': 'Plano dental',
    'descricao': 'Atendimento como você merece. Os melhores planos e profissionais a um preço que cabe no seu bolso. Confira as vantagens de contar com Amil Dental.',
    'empresa': 'Amil',
    'url': 'https://www.amildental.com.br/file/general/Amil_dental_Positiva_Colorida_RGB-01-min.png',
  },
  'celular': {
    'nome': 'Proteção sob medida para seu aparelho',
    'descricao': 'Seu celular é sua ferramenta de comunicação com o mundo, seu companheiro de todas as horas. Com o seguro para smartphone da Porto Seguro você não corre o risco de ficar sem o aparelho se algum imprevisto acontecer. Você protege seu celular em todo o País e, se quiser, pode contratar a cobertura de garantia internacional e deixar seu smartphone seguro até fora do Brasil.',
    'empresa': 'Porto Seguro',
    'url': 'https://porto-seguro-celular.com/img/logo-porto-seguro.png',
  },
  'bike': {
    'nome': 'Seguro de Bike',
    'descricao': 'Com o seguro de bicicleta da Porto Seguro é pedalar e relaxar. O Porto Seguro Bike é uma solução completa, que cuida não só da bicicleta e do ciclista, mas dos terceiros.',
    'empresa': 'Porto Seguro',
    'url': 'https://porto-seguro-celular.com/img/logo-porto-seguro.png',
  },
  'carro': {
    'nome': '',
    'descricao': 'Não espere um incidente para se arrepender de um não ter um seguro. Entre em contato com os corretores de seguro.',
    'empresa': 'Allianz',
    'url': 'https://www.allianz.com.br/drba02-theme/images/allianz-seguros.png',
  },
  'residencial': {
    'nome': '',
    'descricao': '',
    'empresa': '',
    'url': '',
  },
  'viagem_nacional': {
    'nome': '',
    'descricao': '',
    'empresa': '',
    'url': '',
  },
  'viagem_internacional': {
    'nome': '',
    'descricao': '',
    'empresa': '',
    'url': '',
  },

}

const tags = [
  'saude',
  'odonto',
  'celular',
  'bike',
  'carro',
  'residencial',
  'viagem_nacional',
  'viagem_internacional'
]

//vai receber as tags
const tags = []
var resultado = []

for (var i in tags) {
  resultado.concat(seguros[tags[i]])
}

return resultado