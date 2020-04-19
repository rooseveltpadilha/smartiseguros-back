const mongoose = require('mongoose');
const CorretorSchema =  new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: String,
  usuario: String,
  senha: String,
  local: {
    estado: String,
    cidade: String,
  },
  resumo: String,
  data_de_cadastro: Date,
  tempo_de_exp: String,
  consultas_oferecidas: Number,
  seguradoras: [mongoose.Schema.Types.ObjectId],
});

module.exports = mongoose.model('Corretor', CorretorSchema);