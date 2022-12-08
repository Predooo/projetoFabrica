var express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const session = require("express-session");
const cookie = require('cookie-parser');
const {produto, img, cores, cor, categorias, categoriaProduto, tamanhos, tamanhoProduto, tecidos, tecidoProduto, cliente, carrinho, Sequelize, sequelize} = require('./bd/import');
const fs = require('fs')
var erros=[], path = require('path'), dataAtual = Date.now(); 
var config = {
  dest: path.resolve(__dirname, '..', 'public', 'uploads'),
  storage: multer.diskStorage({
      destination: (req, file, cb)=>{
          cb(null, path.resolve(__dirname, '..', 'public', 'uploads'))
      },
      filename:(req,file,cb)=>{
          const fileName = file.originalname + dataAtual + path.extname(file.originalname);
          cb(null, fileName);
      }
  }),
  limits:{
      fileSize: 2* 1024 * 1024,
  },
  fileFilter: (req, file, cb)=>{
      const allowedMimes = [
          'image/jpeg',
          'image/pjpeg',
          'image/png',
          'image/gif'
      ];
      if (allowedMimes.includes(file.mimetype)){
          cb(null, true);
      }else{
          cb(new Error('Formato invalido!'))
      }
  }
};

// ****** CONFIG
router.use(cookie());
router.use('/public', express.static('public'));
// body-parser
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/logout', (req, res)=>{
  res.redirect('/login')
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.cookie("Cookier", "Cookie pra dpss",{maxAge:1000*60})
  console.log(req.cookies.Cookier)
  res.render('admin', {})
});
// router.get('/',(req,res)=>{
//   if(req.session.admin=="0"){
//       res.redirect("/login")
//   }else{
//       res.cookie("Cookier", "Cookie pra dpss",{maxAge:1000*60})
//       console.log(req.cookies.Cookier)
//       res.render('admin', {})
//   }
// })
router.get('/addProduto',(req,res)=>{
  res.render('addProdutos', {})
})

router.post('/addProduto', (req,res)=>{
  dados = req.body
  pdt = { 
    codigo: dados.codigo,
    nome: dados.nome,
    preco: parseFloat(dados.preco),
    quantidade: dados.qtd
  }
  produto.findAll({where: pdt}).then(valor=>{
    if(valor[0]){
      res.send({condicao: false ,mensagem: "Já existe um produto com estas características!"})
    }else{
      res.cookie("pdt", pdt)
      produto.create(
        pdt
      ).then(()=>{
        res.send({condicao: true})
      }).catch((erro)=>{
        res.send({condicao: false,mensagem: "Ocorreu um erro interno"})
      })
      }
  }).catch(()=>{
    res.send({condicao: false,mensagem: "Ocorreu um erro interno"})
  })
})

router.post('/addImagens', multer(config).any('file', 'file1', 'file2', 'file3', 'file4', 'file5', 'file6', 'file7',), (req, res)=>{
  function salvaImagem(P){
    produto.findAll({where: req.cookies.pdt}).then((pdt)=>{
      const file = fs.createWriteStream(path.resolve(__dirname, '..', 'public', 'uploads')+`/${pdt[0].id}${P}`)
      req.on('data', chunk=>{
        file.write(chunk)
      })
      req.on('end', ()=>{
        img.create({
          nome: produto.id,
          fk_produto: produto.id
        })
        return res.send({condicao: true})
      })
    })
  }
  let P = req.headers['content-type']
  if(P=='image/jpeg'){
    P=".jpeg";
    return salvaImagem(P);
  } else if(P=="image/pjpeg"){
    P=".pjpeg";
    return salvaImagem(P);
  } else if(P=="image/png"){
    P=".png";
    return salvaImagem(P);
  } else if(P=="image/gif"){
    P=".gif";
    return salvaImagem(P);
  } else{
    res.send({condicao: false})
  }
})

router.post('/addCores', (req, res)=>{
  console.log(req.body)
  res.send({condicao: true})
})
module.exports = {router: router};