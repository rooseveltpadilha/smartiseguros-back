const express = require('express');
const routes = express.Router();

const Corretor = require('./controllers/CorretorController');

routes.get('/corretor', Corretor.index)
routes.post('/corretor', Corretor.store)

module.exports = routes;