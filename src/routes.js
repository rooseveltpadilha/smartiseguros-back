const express = require('express');
const routes = express.Router();

const Corretor = require('./controllers/CorretorController');
const Produto = require('./controllers/ProdutoController');
const Seguradora = require('./controllers/SeguradoraController');

routes.get('/corretor', Corretor.index);
routes.post('/corretor', Corretor.store);
routes.delete('/corretor', Corretor.delete);

routes.get('/seguradora', Seguradora.index);
routes.post('/seguradora', Seguradora.store);
routes.delete('/seguradora/:id', Seguradora.delete);

routes.get('/produto', Produto.index);
routes.post('/seguradora/:seguradora_id/produto', Produto.store);
routes.delete('/produto/:id', Produto.delete);

module.exports = routes;