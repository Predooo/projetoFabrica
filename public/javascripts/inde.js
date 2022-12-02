var x = 0, y = 0;
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