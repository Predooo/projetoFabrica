//Conexao com o BD
const Sequelize = require('sequelize');

const sequelize = new Sequelize('sistemaloja', 'root', 'mynewpassword',{
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
}