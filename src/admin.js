var express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const session = require("express-session");
const cookie = require('cookie-parser');
const bd = require('./bd/bd');

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

router.post('/addProduto', multer(config).any('file', 'file1', 'file2', 'file3', 'file4', 'file5', 'file6', 'file7',), (req,res)=>{
  pdt = {nome: req.body.nome,
    tecido: req.body.tecido,
    tamanho: req.body.tamanho,
    preco: req.body.preco,
    qtd: req.body.qtd
  }
  res.cookie("novoProduto", pdt)
  produto.create(
      req.cookies.novoProduto
  ).then(()=>{
    produto.findOne({where: req.cookies.novoProduto}).then((produto)=>{
      req.files.forEach((imgObj)=>{
        img.create({
          nome: imgObj.originalname + dataAtual + path.extname(imgObj.originalname),
          fk_produto: produto.id
        })
      })
    })
  }).catch((erro)=>{
      res.render('admin', {erro:erro})
  })
})
module.exports = {router: router};