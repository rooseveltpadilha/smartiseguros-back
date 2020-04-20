const Produto = require('../models/Produto');

module.exports = {
  async index(req, resp) {
    const produtos = await Produto.find({})

    return resp.json(produtos)
  },

  async store(req, resp) {
    const { nome, tipo, idade_maxima, idade_minima, custo } = req.body;

    try {
      const produto = await Produto.create({
        nome,
        tipo,
        idade_maxima,
        idade_minima,
        custo
      })
      console.log(`Produto ${nome} created with success`);
      return resp.json(produto);
    }catch(err) {
      return resp.status(400).json({ message: err })
    }

  },

  async delete(req, resp) {
    const { id } = req.body;

    await Produto.findByIdAndDelete({ _id: id })

    return resp.json({ message: `Produto by id:${id} has been removed` })
  }
}