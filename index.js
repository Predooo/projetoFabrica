// ***************MODULOS E APP****************
const express = require("express");
const cors = require('cors');
const PORT = 3000;
const HOST = '0.0.0.0';

// BD
const bd = require("./bd/bd")
const { or, and, gt, lt } = bd.Sequelize.Op;
var dates = Date.now(), erros=[];

// ROTAS, IMPORT
var userRouter = require('./rotas/user');
var adminRouter = require('./rotas/admin');

// Aplicacao
const app = express();

// CONFIG BASICA
app.use(cors());

// EJS
app.set('view engine', 'ejs'); 

// ROTAS, USE
app.use('/', userRouter);
app.use('/admin', adminRouter);

// servidor na porta 8000 :D
app.listen(PORT, HOST, () => { console.log("Foi!") })