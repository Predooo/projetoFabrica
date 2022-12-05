const {sequelize, Sequelize} = require ('./bd');
// PRODUTO
const produto = sequelize.define('produtos', {
    codigo:{type: Sequelize.TEXT},
    nome:{type: Sequelize.TEXT},
    preco:{type: Sequelize.DOUBLE},
    quantidade:{type: Sequelize.INTEGER}
})
// IMAGEM
const img = sequelize.define('imagens', {
    codigo:{type: Sequelize.TEXT},
    nome:{type: Sequelize.TEXT}
})
img.belongsTo(produto, {
    constraint: true,
    foreignKey: 'fk_produto'
})
// COR
const cores = sequelize.define('cores', {
    nome:{type: Sequelize.TEXT},
    codigoRGB:{type: Sequelize.TEXT}
})
const cor = sequelize.define('cor', {
    codigo:{type: Sequelize.TEXT},
    descricao:{type: Sequelize.TEXT},
    qtd:{type: Sequelize.INTEGER},
    preco:{type: Sequelize.DOUBLE}
})
cor.belongsTo(produto, {
    constraint: true,
    foreignKey: 'fk_produtos'
})
cor.belongsTo(cores, {
    constraint: true,
    foreignKey: 'fk_cores'
})
// CATEGORIA
const categorias = sequelize.define('categorias', {
    nome:{type: Sequelize.TEXT}
})
const categoriaProduto = sequelize.define('categoriaProduto', {})
categoriaProduto.belongsTo(produto, {
    constraint: true,
    foreignKey: 'fk_produtos'
})
categoriaProduto.belongsTo(categorias, {
    constraint: true,
    foreignKey: 'fk_categorias'
})
// TAMANHO
const tamanhos = sequelize.define('tamanhos', {
    nome:{type: Sequelize.TEXT}
})
const tamanhoProduto = sequelize.define('tamanhoProduto', {
    codigo:{type: Sequelize.TEXT},
    descricao:{type: Sequelize.TEXT},
    qtd:{type: Sequelize.INTEGER},
    preco:{type: Sequelize.DOUBLE}
})
tamanhoProduto.belongsTo(produto, {
    constraint: true,
    foreignKey: 'fk_produtos'
})
tamanhoProduto.belongsTo(tamanhos, {
    constraint: true,
    foreignKey: 'fk_tamanhos'
})
// TECIDO
const tecidos = sequelize.define('tecidos', {
    nome:{type: Sequelize.TEXT},
    descricao:{type: Sequelize.TEXT}
})
const tecidoProduto = sequelize.define('tecidoProduto', {
    codigo:{type: Sequelize.TEXT},
    qtd:{type: Sequelize.INTEGER},
    preco:{type: Sequelize.DOUBLE}
})
tecidoProduto.belongsTo(produto, {
    constraint: true,
    foreignKey: 'fk_produtos'
})
tecidoProduto.belongsTo(tecidos, {
    constraint: true,
    foreignKey: 'fk_tecidos'
})

// produto.sync({force:true})
// img.sync({force:true})
// cores.sync({force:true})
// cor.sync({force:true})
// categorias.sync({force:true})
// categoriaProduto.sync({force:true})
// tamanhos.sync({force:true})
// tamanhoProduto.sync({force:true})
// tecidos.sync({force:true})
// tecidoProduto.sync({force:true})
module.exports = {
    produto: produto,
    img: img,
    cores: cores,
    cor: cor,
    categorias: categorias,
    categoriaProduto: categoriaProduto,
    tamanhos: tamanhos,
    tamanhoProduto: tamanhoProduto,
    tecidos: tecidos,
    tecidoProduto: tecidoProduto
}