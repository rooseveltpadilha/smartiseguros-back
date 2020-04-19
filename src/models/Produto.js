const mongoose = require('mongoose');

const ProdutoSchema =  new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  
  tipo: {
    type: String,
    required: true
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

module.exports = mongoose.model('Produto', ProdutoSchema);