var express = require('express');
const router = express.Router();

// Multer
var path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + dates + path.extname(file.originalname));
  }
})
var upload = multer({ storage });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/',(req,res)=>{
  if(req.session.admin=="0"){
      res.redirect("/login")
  }else{
      res.cookie("Cookier", "Cookie pra dpss",{maxAge:1000*60})
      console.log(req.cookies.Cookier)
      res.render('admin', {})
  }
})
router.get('/addProduto',(req,res)=>{
  res.render('addProduto', {})
})
router.post('/postAddProduto',(req,res)=>{
  pdt = {id: null,
      nome: req.body.nome,
      tecido: req.body.tecido,
      tamanho: req.body.tamanho,
      preco: req.body.preco,
      qtd: req.body.qtd
  }
  res.cookie("novoProduto", pdt)
  res.render('addImagens', {})
})
router.post('/postAddImagens', upload.any('img0','img1','img2','img3','img4','img5','img6',), (req,res)=>{
  bd.produto.create(
      req.cookies.novoProduto
  ).then(()=>{
      bd.produto.findOne({where:{nome:req.cookies.novoProduto.nome}}).then((produto)=>{
          img = ""
          req.files.forEach(function (item) {
              img = item.originalname + dates + path.extname(item.originalname)
              bd.img.create({nome: img,
              fk_produto: produto.id})
          })
          res.render('admin', {})
      })
      
  }).catch((erro)=>{
      res.render('admin', {erro:erro})
  })
})
router.get('/paginaRoupa',(req,res)=>{
  res.render('paginaRoupa', {})
})

module.exports = router;