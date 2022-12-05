const cliente = require('./cliente');
const produto = require('./produto');
const {sequelize, Sequelize} = require ('./bd');
module.exports = {
    produto: produto.produto,
    img: produto.img,
    cores: produto.cores,
    cor: produto.cor,
    categorias: produto.categorias,
    categoriaProduto: produto.categoriaProduto,
    tamanhos: produto.tamanhos,
    tamanhoProduto: produto.tamanhoProduto,
    tecidos: produto.tecidos,
    tecidoProduto: produto.tecidoProduto,
    cliente: cliente.cliente,
    carrinho: cliente.carrinho,
    Sequelize: Sequelize,
    sequelize: sequelize,
}