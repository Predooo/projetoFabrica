const {sequelize, Sequelize} = require ('./bd');
// PRODUTO
const produto = sequelize.define('produtos', {
    codigo:{type: Sequelize.TEXT},
    nome:{type: Sequelize.TEXT},
    preco:{type: Sequelize.INTEGER}
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
    nome:{type: Sequelize.TEXT}
})
const cor = sequelize.define('cor', {
    qtd:{type: Sequelize.INTEGER},
    preco:{type: Sequelize.INTEGER}
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
    descricao:{type: Sequelize.TEXT}
})
const tamanhoProduto = sequelize.define('tamanhoProduto', {
    qtd:{type: Sequelize.INTEGER},
    preco:{type: Sequelize.INTEGER}
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
    descricao:{type: Sequelize.TEXT},
    qtd:{type: Sequelize.INTEGER},
    preco:{type: Sequelize.INTEGER}
})
const tecidoProduto = sequelize.define('tecidoProduto', {
    qtd:{type: Sequelize.INTEGER},
    preco:{type: Sequelize.INTEGER}
})
tecidoProduto.belongsTo(produto, {
    constraint: true,
    foreignKey: 'fk_produtos'
})
tecidoProduto.belongsTo(tecidos, {
    constraint: true,
    foreignKey: 'fk_tecidos'
})

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