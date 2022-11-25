//Conexao com o BD
const Sequelize = require('sequelize');

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
const produto = sequelize.define('produtos', {
    nome:{type: Sequelize.TEXT},
    tecido:{type: Sequelize.TEXT},
    tamanho:{type: Sequelize.TEXT},
    preco:{type: Sequelize.DOUBLE},
    qtd:{type: Sequelize.INTEGER}
})
const cliente = sequelize.define('clientes', {
    nome:{type: Sequelize.TEXT},
    email:{type: Sequelize.TEXT},
    senha:{type: Sequelize.TEXT},
    estado:{type: Sequelize.TEXT},
    cidade:{type: Sequelize.TEXT},
    bairro:{type: Sequelize.TEXT},
    rua:{type: Sequelize.TEXT},
    numero:{type: Sequelize.INTEGER},
})
const img = sequelize.define('imagens', {
    nome:{type: Sequelize.TEXT},
    fk_produto:{type: Sequelize.INTEGER}
})
const carrinho = sequelize.define('carrinhos', {
    nome:{type: Sequelize.TEXT},
    produto:{type: Sequelize.TEXT}
})
carrinho.belongsTo(cliente, {
    constraint: true,
    foreignKey: 'fk_ciente'
})
module.exports = {
    produto: produto,
    cliente: cliente,
    img: img,
    carrinho: carrinho
}