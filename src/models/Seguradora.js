const mongoose = require('mongoose');

const SeguradoraSchema =  new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },

  usuario: {
    type: String,
    required: true,
    unique: true
  },

  senha: {
    type: String,
    required: true
  },

  telefone: {
    type: Number,
    required: true
  },

  resumo: {
    type: String,
    required: true
  },
  
  estado: {
    type: String,
    required: true
  },

  cidade: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  corretores: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Corretor'
  }],

  produtos: [{
    ref: 'Produto'
  }]
});

module.exports = mongoose.model('Seguradora', SeguradoraSchema);