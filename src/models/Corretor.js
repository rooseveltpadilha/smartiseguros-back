const mongoose = require('mongoose');
const CorretorSchema =  new mongoose.Schema({
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

  estado: {
    type: String,
    required: true
  },

  cidade: {
    type: String,
    required: true
  },

  resumo: {
    type: String,
    required: true
  },

  tempoExperiencia: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  seguradoras: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seguradora'
  }],
});

module.exports = mongoose.model('Corretor', CorretorSchema);