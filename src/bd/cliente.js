setImmediate(() => {
    const {sequelize, Sequelize} = require ('./bd');

    const cliente = sequelize.define('clientes', {
        nome:{type: Sequelize.TEXT},
        email:{type: Sequelize.TEXT},
        senha:{type: Sequelize.TEXT},
        estado:{type: Sequelize.TEXT},
        cidade:{type: Sequelize.TEXT},
        bairro:{type: Sequelize.TEXT},
        rua:{type: Sequelize.TEXT},
        numero:{type: Sequelize.INTEGER}
    })
    const carrinho = sequelize.define('carrinhos', {
        nome:{type: Sequelize.TEXT},
        codigo:{type: Sequelize.TEXT},
        produto:{type: Sequelize.TEXT},
        cor:{type: Sequelize.TEXT},
        preco:{type: Sequelize.TEXT}
    })
    carrinho.belongsTo(cliente, {
        constraint: true,
        foreignKey: 'fk_ciente'
    })

    module.exports = {
        cliente: cliente,
        carrinho: carrinho
    }
});