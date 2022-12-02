const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const session = require("express-session");
const cookie = require('cookie-parser');
const { cliente, produto, img } = require('./bd/bd');
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
router.post('/cadastro',(req, res)=>{
req.body.numero = parseInt(req.body.numero)
  erros = []
  if (!req.body.nome|| typeof req.body.nome== undefined || req.body.nome== null) {
    erros.push({ texto: "Nome Inválido!" })
  } if (!req.body.email || typeof req.body.email == undefined || req.body.email == null) {
    erros.push({ texto: "Email Inválido!" })
  } if (!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null) {
    erros.push({ texto: "Senha Inválida!" })
  } if (req.body.senha.length < 6) {
    erros.push({ texto: "A senha deve ter no mínimo 6 caracteres!" })
  } if (req.body.senha != req.body.senha2) {
    erros.push({ texto: "As senhas não estão iguais!" })
  } if (req.body.estado!='AC'&&req.body.estado!='AL'&&req.body.estado!='AP'&&
      req.body.estado!='AM'&&req.body.estado!='BA'&&req.body.estado!='CE'&&
      req.body.estado!='DF'&&req.body.estado!='ES'&&req.body.estado!='GO'&&
      req.body.estado!='MA'&&req.body.estado!='MT'&&req.body.estado!='MS'&&
      req.body.estado!='MG'&&req.body.estado!='PA'&&req.body.estado!='PB'&&
      req.body.estado!='PR'&&req.body.estado!='PE'&&req.body.estado!='PI'&&
      req.body.estado!='RJ'&&req.body.estado!='RN'&&req.body.estado!='RS'&&
      req.body.estado!='RO'&&req.body.estado!='RR'&&req.body.estado!='SC'&&
      req.body.estado!='SP'&&req.body.estado!='SE'&&req.body.estado!='TO'){
          erros.push({ texto: "Escolha um Estado!" })
  }if (!req.body.cidade) {
      erros.push({ texto: "Informe a cidade!" })
  }if (!req.body.bairro) {
      erros.push({ texto: "Informe o bairro!" })
  }if (!req.body.rua) {
    erros.push({ texto: "Informe a rua!" })
  }if (!req.body.numero||typeof req.body.numero != typeof(1)) {
    erros.push({ texto: "Informe um número!" })
  }
  if (erros.length > 0) {
    res.render('registro', { erros: erros });
  } else {
    bd.cliente.findAll({ where: { email: req.body.email } }).then((params) => {
      if (params.length > 0) {
        erros.push({ texto: "Já possui um usuário com este email!" })
        res.render('registro', { erros: erros })
      } else {
        const novoUsuario = new bd.cliente({
          id: null,
          nome: req.body.nome,
          email: req.body.email,
          senha: req.body.senha,
          estado: req.body.estado,
          cidade: req.body.cidade,
          bairro: req.body.bairro,
          rua: req.body.rua,
          numero: req.body.numero
        })
        bcrypt.genSalt(10, (erro, salt) => {
          bcrypt.hash(novoUsuario.senha, salt, (erro, hash) => {
            if (erro) {
              erros.push({ texto: "Ocorreu um erro ao salvar usuário no Banco de Dados, tente novamente mais tarde!" })
              console.log("deu ruim", erro)
              res.redirect("/registro")
            }
            novoUsuario.senha = hash;
            novoUsuario.save().then(() => {
              res.redirect('/login')
            }).catch((err) => {
              erros.push({ texto: "Ocorreu um erro ao salvar usuário no Banco de Dados, tente novamente mais tarde!" })
              console.log(err+"Sla porr")
              res.redirect('/registro')
            })
          })

        })
      }
    })
  }
})
router.get('/login',(req,res)=>{
    res.cookie("Cookie", "Cookie pra dps",{maxAge:1000*60*60})
    res.render('login',{erros: erros})
    erros = []
})
router.post('/logar',(req,res)=>{
  req.session.login = false;
  cliente.findOne({ where: { email: req.body.email } }).then((params) => {
    console.log(params)
    if (!params) {
      erros.push({ texto: "Email não consta na base de dados!" })
      res.redirect('/login')
    } else {
      console.log(params.senha, req.body.senha+"AMEND")
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
    bd.cliente.findAll().then((clientes)=>{
      res.render('clientes',{clientes: clientes})
    })
})
router.get('/paginaRoupa',(req,res)=>{
  res.render('paginaRoupa', {})
})

module.exports = router;