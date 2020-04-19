const Corretor = require('../models/Corretor')

module.exports = {
  async index(req, resp) {
    const { user } = req.headers;

    const users = await Corretor.find({ usuario: user })
    return resp.json(users)
  },

  async store(req, resp) {
    const { nome, usuario, senha, estado, cidade, resumo, tempoExperiencia } = req.body;

    const userExists = await Corretor.findOne({ usuario: nome })
    if(userExists) {
      console.log(`User ${usuario} already exists.`)
      return response.json(userExists)
    }

    const corretor = await Corretor.create({
      nome, 
      usuario, 
      senha, 
      estado, 
      cidade, 
      resumo,
      tempoExperiencia
    })

    console.log(`User ${usuario} created with success`);
    return resp.json(corretor);
  },
}