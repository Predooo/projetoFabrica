//Conexao com o BD
const Sequelize = require('sequelize');
const cliente = require('./cliente');
const produto = require('./produto');

const sequelize = new Sequelize('sistemaloja', 'root', 'predolinde',{
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
})
sequelize.authenticate().then(()=>{
    console.log("Conectado ao banco de dados!")
}).catch((erro)=>{
    console.log("Falha ao se conectar ao banco: "+ erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
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
    carrinho: cliente.carrinho
}