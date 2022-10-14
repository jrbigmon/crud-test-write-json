const express = require('express');
const routes = express.Router();
const produtoController = require('../controller/produtoController');

routes.get('/', produtoController.showAll);

routes.get('/criar', produtoController.viewCreate);
routes.post('/criar', produtoController.create);

routes.get('/:id', produtoController.showOne);

module.exports = routes;