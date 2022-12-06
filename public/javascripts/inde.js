var x = 0, y = 0, cor=1, tamanho = 0,tecido = 0;
$(document).ready(function() {
  $(window).scroll(function() {
    x+=1
    a = $(document).scrollTop()
    if(x==1){
      a = $(document).scrollTop()
      b = a
    }
    if (a > b) {
      $("#seta").addClass("seta-none")
      $("#seta").removeClass("seta")
      $("#footer").addClass("footer-none")
      $("#footer").removeClass("footer")
      b=a
    } else {
      $("#seta").addClass("seta");
      $("#seta").removeClass("seta-none")
      $("#footer").addClass("footer")
      $("#footer").removeClass("footer-none")
      b=a
    }
  });
  $("#seta1").click(function(){
    var carrinho = $("#opcaoCarrinho"), perfil = $("#perfil"), logout= $("#logout");
    if(y==0){
      $('#seta1').addClass("rodar")
      perfil.addClass('perfil');
      perfil.removeClass('perfil-none');
      carrinho.addClass('perfil');
      carrinho.removeClass('perfil-none');
      logout.addClass('perfil');
      logout.removeClass('perfil-none');
      y+=1
    } else{
      $('#seta1').removeClass("rodar")
      perfil.addClass('perfil-none');
      perfil.removeClass('perfil');
      carrinho.addClass('perfil-none');
      carrinho.removeClass('perfil');
      logout.addClass('perfil-none');
      logout.removeClass('perfil');
      y=0
    }
    });
});
function alerta(titulo, conteudo, botao, link){
  if(!conteudo){
    conteudo = ""
  }if(!botao){
    botao = "Ok!";
  }
  a=" "
  if(titulo.length>35){
    a = " style='text-align: justify;' "
  }
  mensagem = `
  <div class="alert" id="alerta">
    <h4${a}>${titulo}</h4>
    <p>
      ${conteudo}
    </p>
    <button>
    <a href="${link}" class="aAlerta">
      <div style="width: 100%; height:100%; margin: 6px 0px"> 
        ${botao}
      </div>
    </a>
    </button>
  </div>`;
  if(!link){
    mensagem = `
    <div class="alert" id="alerta">
      <h4${a}>${titulo}</h4>
      <p>
        ${conteudo}
      </p>
      <button onclick="rmAlerta()">
        ${botao}
      </button>
    </div>`;
  }
  let body = $('body')
  body.append(mensagem);
}
function rmAlerta(){
  $("#alerta").remove();
}
function registro(){
  const form = document.querySelector("#form")
  arrayDados = form.querySelectorAll('input')
  dados = []
  for(cont=0; cont<arrayDados.length; cont++){
    if(arrayDados[cont].value==""){
      return alerta("Por favor, informe todos seus dados!")
    }else{
      dados.push(arrayDados[cont].value)
    }
    if(cont==(arrayDados.length-1)){
      dados.push(document.querySelector('#estado').value)
      fetch("registro", {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(dados)
      })
      .then(json=>json.json())
      .then(resposta=>{
        if(resposta.condicao){
          document.querySelector('#registro').style.display = "none"
          alerta('Registro feito com sucesso!', 'Agora você já pode comprar roupas na melhor loja SportFitnes do Brasil!', '/login','Login')
        }else{
          msg = "Verifique o(s) seguintes detalhes: \n"
          for(cont=0; cont<resposta.resposta.length;cont++){
            msg = msg + "\n" + resposta.resposta[cont].texto
          }
          alerta("Verifique o(s) seguintes detalhes: \n", msg, "Ok!")
        }
      })
    }
  }
}
function addcor(){
if(!cor||cor==1){
  cor=1
  h3 = $("#h3cor");
  h3.append('<button type="button" onclick="rmcor()" id="-cores"><img src="public/imagens/menos.png" style="height: 100%; width: 100%; border-radius: 50%;"></button>');
}
div = $(`#cor${cor}`);
cor=cor+1
$(`#file${cor}`).remove()
div1=`<div id="cor${cor}">
<h2>${cor}° Tecido/cor:</h2>
<span style="margin-top: 1%;" class="input-group-text" id="inputGroup-sizing-sm">Nome:</span>
<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="nomecor${cor}" required placeholder="Preto">
<span style="margin-top: 1%;" class="input-group-text" id="inputGroup-sizing-sm">Quantidade:</span>
<input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="qtdcor${cor}" required placeholder="10">
<span style="margin-top: 1%;" class="input-group-text" id="inputGroup-sizing-sm">Preço extra:</span>
<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="precocor${cor}" required placeholder="5.00">
<div class="mb-3" style="margin-top: 1%;">
  <input class="form-control" type="file" id="file${cor}" name="file${cor}} multiple accept="image/jpeg, image/png" value="file${cor}" required>
</div>
</div>`
div.after(div1);
if(cor==7){
  $('#h3imagens').remove();
  $('#divimagens').remove();
}
}
function rmcor(){
  if(cor==2){
    bMcores = $('#-cores')
    bMcores.remove()
  }
  a = `#cor${cor}`
  rm = $(a)
  rm.remove()

  if(cor==7){
    $('#formularioRoupas').append(`
    <h3 id="h3imagens">Insira as imagens</h3>
    <div id="divimagens">
      <div class="mb-3" style="margin-top: 1%;" id="file${cor}">
        <input class="form-control" type="file" name="file${cor} multiple accept="image/jpeg, image/png" value="file${cor}">
      </div>
    </div>
    `);
  }else{
    $('#divimagens').prepend(`
    <div class="mb-3" style="margin-top: 1%;" id="file${cor}">
      <input class="form-control" type="file" name="file${cor} multiple accept="image/jpeg, image/png" value="file${cor}">
    </div>
  `)
  }
  cor=cor-1
}
function addtecido(){
  if(!tecido||tecido==1){
    tecido=1
    h3 = $("#h3tecido");
    h3.append('<button type="button" onclick="rmtecido()" id="-tecidos"><img src="public/imagens/menos.png" style="height: 100%; width: 100%; border-radius: 50%;"></button>');
  }
  div = $(`#divtecidos${tecido}`)
  tecido=tecido+1
  div1=`<div id="divtecidos${tecido}"><h2>${tecido}° tecido:</h2><span style="margin-top: 1%;" class="input-group-text" id="inputGroup-sizing-sm">Nome:</span><input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="nometecido${tecido}" required><span style="margin-top: 1%;" class="input-group-text" id="inputGroup-sizing-sm">Descricao:</span><input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="descricaotecido${tecido}" required><span style="margin-top: 1%;" class="input-group-text" id="inputGroup-sizing-sm">Quantidade:</span><input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="qtdtecido${tecido}" required><span style="margin-top: 1%;" class="input-group-text" id="inputGroup-sizing-sm">Preço extra:</span><input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="precotecido${tecido}" required></div>`
  div.after(div1);
}
function rmtecido(){
  if(tecido==2){
    bMtecidoes = $('#-tecidos')
    bMtecidoes.remove()
  }
  a = `#divtecidos${tecido}`
  rm = $(a)
  rm.remove()
  tecido=tecido-1
}
function addtamanho(){
  if(!tamanho||tamanho==1){
    tamanho=1
    h3 = $("#h3tamanho");
    h3.append('<button type="button" onclick="rmtamanho()" id="-tamanhos"><img src="public/imagens/menos.png" style="height: 100%; width: 100%; border-radius: 50%;"></button>');
  }
  div = $(`#divtamanhos${tamanho}`)
  tamanho=tamanho+1
  div1=`<div id="divtamanhos${tamanho}"><h2>${tamanho}° tamanho:</h2><span style="margin-top: 1%;" class="input-group-text" id="inputGroup-sizing-sm">Nome:</span><input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="nometamanho${tamanho}" required><span style="margin-top: 1%;" class="input-group-text" id="inputGroup-sizing-sm">Descricao:</span><input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="descricaotamanho${tamanho}" required><span style="margin-top: 1%;" class="input-group-text" id="inputGroup-sizing-sm">Quantidade:</span><input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="qtdtamanho${tamanho}" required><span style="margin-top: 1%;" class="input-group-text" id="inputGroup-sizing-sm">Preço extra:</span><input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="precotamanho${tamanho}" required></div>`
  div.after(div1);
}
function rmtamanho(){
  if(tamanho==2){
    bMtamanhos = $('#-tamanhos')
    bMtamanhos.remove()
  }
  a = `#divtamanhos${tamanho}`
  rm = $(a)
  rm.remove()
  tamanho=tamanho-1
}

function dadosBasicosButton(){
  const dadosBasicos = document.querySelector('#dadosBasicos');
  dadosArray = dadosBasicos.querySelectorAll("input");
  for(cont1=0; cont1<dadosArray.length;cont1++){
    if(dadosArray[cont1].value==""){
      return alerta("Por favor, informe todos os dados!")
    }
  }
  dadosJason = {
    codigo: dadosArray[0].value,
    nome: dadosArray[1].value,
    preco: dadosArray[2].value,
    qtd: dadosArray[3].value,
    categoria: dadosArray[4].value
  }
  fetch("/admin/addProduto", {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(dadosJason)
  })
  .then(valor => valor.json())
  .then((resposta)=>{
    if(resposta.condicao){
      alerta("Aqui você pode adicionar uma ou mais cores!")
      document.querySelector("#dadosBasicos").style.display = "none";
      document.querySelector("#divCores").style.display = "block";
    }else{
      alerta(resposta.mensagem)
    }
  })
}

function dadosCores(){
  var dadosCores = [], verificarErro=0;
  const promisse = new Promise((resolve, reject) => {
    dadosJason = []
    for(let cont=1; cont<=cor; cont++){
      dadosCores.push(document.querySelector(`#cor${cont}`))
    }
    for(cont = 0; cont<dadosCores.length; cont++){
      dadosArray = dadosCores[cont].querySelectorAll("input");
      for(cont1=0; cont1<dadosArray.length;cont1++){
        if(dadosArray[cont1].value==""){
          return alerta("Por favor, informe todos os dados!")
        }
      }
      dadosJason.push({nome: dadosArray[0].value,
        qtd: dadosArray[1].value,
        preco: dadosArray[2].value
      })
      if(cont==(dadosCores.length-1)){
        resolve(dadosJason)
      }
    }
  });
  promisse.then((dadosJason)=>{
    fetch("/admin/addCores", {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosJason)
    })
    .then(valor => valor.json())
    .then(resposta => {
      if(resposta.condicao){
        verificarErro++;
      } else{
        return alerta("Algo deu errado ao inserir as cores!")
      }
    })
  }).then(()=>{
    for(cont = 0; cont<dadosCores.length; cont++){
      dadosArray = dadosCores[cont].querySelectorAll("input");
      fetch("/admin/addImagens", {
        method: "POST",
        body: dadosArray[3].files[0]
      })
      .then(resposta => resposta.json())
      .then((condicao)=>{
        if(condicao.condicao){
          document.querySelector('#divCores').style.display = "none";
          document.querySelector('#divTamanhos').style.display = "block";
        }else{
          alerta("Algo deu errado ao inserir a imagem no banco!")
        }
      })
    }
  })
}

function dadosTamanhos(){
  alerta("A partir daqui não foi desenvolvido!")
}