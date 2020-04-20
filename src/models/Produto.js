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

  idade_maxima: {
    type: Number,
    required: true
  },

  idade_minima: {
    type: Number,
    required: true
  },

  custo: {
    type: Number,
    required: true
  },

  seguradora: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seguradora',
    require: true
  }
});

module.exports = mongoose.model('Produto', ProdutoSchema);