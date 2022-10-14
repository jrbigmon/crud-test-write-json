const ProdutoModel = require('../model/produtoModel');
const { v4: geradorId} = require('uuid');

const produtoController = {
    showAll: (req, res) => {
        const produtos = ProdutoModel.findAll();
        return res.send(produtos);
    },
    showOne: (req, res) => {
        const {id} = req.params
        const produto = ProdutoModel.findByField('id', id);
        return produto ? res.send(produto) : res.send('Produto Não Encontrado!');
    },
    viewCreate: (req, res) => {
        res.render('./adm/produto/create');
    },
    create: (req, res) => {
        const {name, description, price} = req.body;
        // const image = req.file.filename;
        const produto = {id: geradorId(), name, description, price: Number(price)}
        ProdutoModel.save(produto);
        return res.send(produto);
    },
    update: (req, res) => {
        const {id} = req.params;
        const {name, description, price} = req.body;
        const produto = {name, description, price};
        ProdutoModel.update(id, produto);
        return res.send(produto);
    },
    delete: (req, res) => {
        const {id} = req.params;
        const produtos = ProdutoModel.findAll();
        ProdutoModel.delete(id);
        return res.send(produtos);
    },
};

module.exports = produtoController;
