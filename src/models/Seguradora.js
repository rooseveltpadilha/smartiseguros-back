const mongoose = require('mongoose');
const SeguradoraSchema =  new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: String,
  usuario: String,
  senha: String,
  telefone: Number,
  resumo: String,
  local: {
    estado: String,
    cidade: String,
  },
  corretoresCadastrados: Number,
  corretores: [mongoose.Schema.Types.ObjectId],
  produtos: [{
    _id: mongoose.Schema.Types.ObjectId,
    nome: String,
    tipo: {
      saúde: String,
      viagem: String,
    },
    limites: {
      idade_maxima: Number,
      idade_minima: Number
    },
    custo: Number
  }]
});

module.exports = mongoose.model('Seguradora', SeguradoraSchema);