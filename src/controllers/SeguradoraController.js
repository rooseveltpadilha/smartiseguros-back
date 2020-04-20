const Seguradora = require('../models/Seguradora');

module.exports = {
  async index(req, resp) {
    const seguradoras = await Seguradora.find({});

    return resp.json(seguradoras);
  },

  async store(req, resp) {
    const { nome, usuario, senha, telefone, resumo, estado, cidade } = req.body;

    try {
      const seguradora = await Seguradora.create({
        nome,
        usuario, 
        senha, 
        telefone, 
        resumo, 
        estado, 
        cidade, 
      });

      console.log(`Seguradora ${usuario} created with success`);
      return resp.status(200).json(seguradora);
    } 
    catch(err) {
      return resp.status(400).json(err);
    }
  },

  async delete(req, resp) {
    const { id } = req.params;

    await Seguradora.findByIdAndDelete(id);
    return resp.status(200).json({ message: `Seguradora ${id} has been removed` });
  }
}
