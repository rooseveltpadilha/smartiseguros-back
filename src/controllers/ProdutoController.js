const Produto = require('../models/Produto');
const Seguradora = require('../models/Seguradora');

module.exports = {
  async index(req, resp) {
    const produtos = await Produto.find({});

    return resp.json(produtos);
  },

  async store(req, resp) {
    const { nome, tipo, idade_maxima, idade_minima, custo } = req.body;
    const { seguradora_id } = req.params;

    const seguradoraLogged = await Seguradora.findById(seguradora_id);
    if(!seguradoraLogged) {
      return resp.status(400).json({ error: 'Seguradora not exists' })
    }

    try {
      const produto = await Produto.create({
        nome,
        tipo,
        idade_maxima,
        idade_minima,
        custo,
        seguradora: seguradora_id
      })

      seguradoraLogged.produtos.push(produto)
      await seguradoraLogged.save()

      console.log(`Produto ${nome} created with success`);
      return resp.json(produto);
    }catch(err) {
      return resp.status(400).json({ message: err })
    }
  },

  async delete(req, resp) {
    const { id } = req.params;
    await Produto.findByIdAndDelete(id);

    return resp.json({ message: `Produto by id:${id} has been removed` });
  }
}