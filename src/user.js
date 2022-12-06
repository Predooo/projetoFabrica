const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const session = require("express-session");
const cookie = require('cookie-parser');
const {produto, img, cores, cor, categorias, categoriaProduto, tamanhos, tamanhoProduto,
  tecidos, tecidoProduto, cliente, carrinho, Sequelize, sequelize} = require('./bd/import');
var erros = [];

router.use(session({
  secret: "amamosbiotecnologia",
  resave: true,
  saveUninitialized: true
}))
router.use(cookie());
router.use('/public', express.static('public'));

// Numero aleatorio
function shuffleArray(arr) {
for (let i = arr.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
return arr;
}

// body-parser
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// ROTAS USUARIO

router.get('/registro',(req, res)=>{
  res.render('registro', {erros:erros})
})
router.post('/registro',(req, res)=>{
  erros = [];
  req.body[7] = parseInt(req.body[7])
  if (!req.body[0]|| typeof req.body[0]== undefined || req.body[0]== null) {
    erros.push({ texto: "Informe seu nome!" })
  } if (!req.body[1] || typeof req.body[1] == undefined || req.body[1] == null) {
    erros.push({ texto: "Email Inválido!" })
  } if (!req.body[2] || typeof req.body[2] == undefined || req.body[2] == null) {
    erros.push({ texto: "Senha Inválida!" })
  } if (req.body[2].length < 6) {
    erros.push({ texto: "A senha deve ter no mínimo 6 caracteres!" })
  } if (req.body[2] != req.body[3]) {
    erros.push({ texto: "As senhas não estão iguais!" })
  } if (req.body[8]!='AC'&&req.body[8]!='AL'&&req.body[8]!='AP'&&
      req.body[8]!='AM'&&req.body[8]!='BA'&&req.body[8]!='CE'&&
      req.body[8]!='DF'&&req.body[8]!='ES'&&req.body[8]!='GO'&&
      req.body[8]!='MA'&&req.body[8]!='MT'&&req.body[8]!='MS'&&
      req.body[8]!='MG'&&req.body[8]!='PA'&&req.body[8]!='PB'&&
      req.body[8]!='PR'&&req.body[8]!='PE'&&req.body[8]!='PI'&&
      req.body[8]!='RJ'&&req.body[8]!='RN'&&req.body[8]!='RS'&&
      req.body[8]!='RO'&&req.body[8]!='RR'&&req.body[8]!='SC'&&
      req.body[8]!='SP'&&req.body[8]!='SE'&&req.body[8]!='TO'){
          erros.push({ texto: "Escolha um Estado!" })
  }if (!req.body[4]) {
      erros.push({ texto: "Informe a cidade!" })
  }if (!req.body[5]) {
      erros.push({ texto: "Informe o bairro!" })
  }if (!req.body[6]) {
    erros.push({ texto: "Informe a rua!" })
  }if (!req.body[7]||typeof req.body[7] != typeof(1)) {
    erros.push({ texto: "Informe um número!" })
  }
  if (erros.length > 0) {
    res.send({ resposta: erros, condicao: false});
  } else {
    cliente.findAll({ where: { email: req.body[2] } }).then((params) => {
      if (params.length > 0) {
        erros.push({ texto: "Já possui um usuário com este email!" })
        res.send({ resposta: erros, condicao: false});
      } else {
        const novoUsuario = new cliente({
          id: null,
          nome: req.body[0],
          email: req.body[1],
          senha: req.body[2],
          estado: req.body[8],
          cidade: req.body[4],
          bairro: req.body[5],
          rua: req.body[6],
          numero: req.body[7]
        })
        bcrypt.genSalt(10, (erro, salt) => {
          bcrypt.hash(novoUsuario.senha, salt, (erro, hash) => {
            if (erro) {
              erros.push({ texto: "Ocorreu um erro ao salvar usuário no Banco de Dados, tente novamente mais tarde!" })
              res.send({ resposta: erros, condicao: false});
            }
            novoUsuario.senha = hash;
            novoUsuario.save().then(() => {
              res.send({ resposta: erros, condicao: true});
            }).catch((err) => {
              erros.push({ texto: "Ocorreu um erro ao salvar usuário no Banco de Dados, tente novamente mais tarde!" })
              res.send({ resposta: erros, condicao: false});
            })
          })

        })
      }
    })
  }
})
router.get('/login',(req,res)=>{
    req.session.login = false;
    erro = erros
    erros = []
    res.cookie("Cookie", "Cookie pra dps",{maxAge:1000*60*60})
    res.render('login', {resposta: erro})
})
router.post('/logar',(req,res)=>{
  erros = []
  req.session.login = false;
  cliente.findOne({ where: { email: req.body.email } }).then((params) => {
    if (!params) {
      erros.push({ texto: "Email não consta na base de dados!" })
      res.redirect('/login')
    } else {
      let validar = bcrypt.compareSync(req.body.senha, params.senha);
      if (!validar) {
        erros.push({ texto: "Email ou senha incorretos!" })
        res.redirect('/login')
      } else {
        req.session.user = params.nome
        req.session.login = true
        res.redirect('/')
      }
    }
  }).catch(() => {
    erros.push({ texto: "Tente novamente mais tarde!" })
    res.redirect('/login')
  })
})
router.get('/logout', (req, res)=>{
  res.redirect('/login')
})
router.get('/',(req,res)=>{
  if(!req.cookies.produtos){
    produto.findAll().then((produtos)=>{
      produtos = shuffleArray(produtos)
      res.cookie("produtos", produtos, {maxAge:1000*60*60})
      res.cookie("pagina", 1, {maxAge:1000*60*60})
      res.render('index',{produtos: req.cookies.produtos, pagina: req.cookies.pagina})
    })
  }else{
    req.cookies.pagina = 2;
    res.render('index', {produtos: req.cookies.produtos, pagina: req.cookies.pagina})
  }
})
router.get('/perfil',(req,res)=>{
    res.cookie("Cookie", "Cookie pra dps",{maxAge:1000*60*60})
    cliente.findAll().then((clientes)=>{
      res.render('clientes',{clientes: clientes})
    })
})
router.get('/paginaRoupa',(req,res)=>{
  res.render('paginaRoupa', {})
})

module.exports = router;