const express = require('express');
const routes = express.Router();

routes.post('/', (req, resp) => {
  return resp.json(req.body)
})

module.exports = routes;