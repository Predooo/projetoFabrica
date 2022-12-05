// ***************MODULOS E APP****************
const express = require("express");
const cors = require('cors');
const PORT = 8000;
const HOST = '0.0.0.0';

// BD
const bd = require("./src/bd/bd")

// ROTAS, IMPORT
var userRouter = require('./src/user');
var adminRouter = require('./src/admin');

// Aplicacao
const app = express();

// CONFIG BASICA
app.use(cors());

// EJS
app.set('view engine', 'ejs'); 

// ROTAS, USE
app.use('/', userRouter);
app.use('/admin', adminRouter.router);

app.use(express.json());
app.use(express.urlencoded( {extended:true} ));

// servidor na porta 8000 :D
app.listen(PORT, HOST, () => { console.log("Foi!") })