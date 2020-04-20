const express = require('express');
const routes = express.Router();

const Corretor = require('./controllers/CorretorController');
const Produto = require('./controllers/ProdutoController');

routes.get('/corretor', Corretor.index)
routes.post('/corretor', Corretor.store)
routes.delete('/corretor', Corretor.delete)

routes.get('/produto', Produto.index)
routes.post('/produto', Produto.store)
routes.delete('/produto', Produto.delete)

module.exports = routes;