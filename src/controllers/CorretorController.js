const Corretor = require('../models/Corretor')

module.exports = {
  async index(req, resp) {
    const users = await Corretor.find({})

    return resp.json(users)
  },

  async store(req, resp) {
    const { nome, usuario, senha, estado, cidade, resumo, tempoExperiencia } = req.body;

    const userExists = await Corretor.findOne({ usuario: nome })
    if(userExists) {
      console.log(`User ${usuario} already exists.`)
      return response.json(userExists)
    }
    try{
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
    }catch(err) {
      return resp.status(400).json({ message: err })
    }
  },

  async delete(req, resp) {
    const { id } = req.body;

    await Corretor.findByIdAndDelete({ _id: id })

    return resp.json({ message: `Corretor by id:${id} has been removed` })
  }
}