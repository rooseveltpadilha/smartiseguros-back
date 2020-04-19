const mongoose = require('mongoose');

const ProdutosSchema =  new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  tipo: {
    saúde: {
      type: String,
      required: true
    },
    viagem: {
      type: String,
      required: true
    },
  },
  limites: {
    idade_maxima: {
      type: Number,
      required: true
    },
    idade_minima: {
      type: Number,
      required: true
    }
  },
  custo: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Produtos', ProdutosSchema);