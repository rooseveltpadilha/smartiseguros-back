const mongoose = require('mongoose');
const ClienteSchema =  new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: String,
  usuario: String,
  senha: String,
  local: {
    estado: String,
    cidade: String,
  },
  resumo: String,
  produtos: [{
    id_seguradora: mongoose.Schema.Types.ObjectId,
    id_corretor: mongoose.Schema.Types.ObjectId
  }],
  respostas: [{
    id_corretor: mongoose.Schema.Types.ObjectId,
    object_chat: String,
    adquirido: {
      _id: mongoose.Schema.Types.ObjectId
    }
  }]
});

module.exports = mongoose.model('Cliente', ClienteSchema);