(function($){
  var outil;

  var OPSPlugin = function(opt){
    var _that = this;


    var content = $(".content");
    var nav_top = $(".nav-top");
    var footer = $(".footer");
    var page_content = $(".page-content");
    var footer = $(".footer");

    var wel_bg = $("#section-bg-1");
    var epr_bg = $("#section-bg-2");
    var ink_bg = $("#section-bg-3");
    var tab_bg = $("#section-bg-4");
    var sup_bg = $("#section-bg-5");
    var beg_bg = $("#section-bg-6");

    var a1 = $("#anim-img-1");
    var a1i = $("#anim-img-1 .anim-in-img");
    var xf1 = $("#anim-img-xf-1");
    var xf2 = $("#anim-img-xf-2");
    var xf3 = $("#anim-img-xf-3");
    var a2 = $("#anim-img-2");
    var a21 = $("#anim-img-2-1");
    var a22 = $("#anim-img-2-2");
    var a3 = $("#anim-img-3");


    var currBgEle = $("#section-bg-1");
    var currIndex = 0;

    this.setCurrIndex = function(v,cb){
      currIndex = v;
      if(cb&&typeof(cb)=="function")cb();
    }

    this.getCurrIndex = function(cb){
      var ci = currIndex;
      if(cb&&typeof(cb)=="function")cb(ci);
      return ci;
    }

    this.init = function(){
      $("body").fadeIn(300,"linear");

      $(window).bind('scroll',winScroll);
      $(window).bind('mousewheel', winWheel);


      $(".nav-meun-list a").click(function(event) {
        $('html,body').stop();
        /* Act on the event */
        var wel_bg_h = wel_bg.height();
        var epr_bg_h = epr_bg.height()+wel_bg_h;
        var ink_bg_h = ink_bg.height()+epr_bg_h;
        var tab_bg_h = tab_bg.height()+ink_bg_h;
        var sup_bg_h = sup_bg.height()+tab_bg_h;
        var beg_bg_h = beg_bg.height()+sup_bg_h;
        var link_id = $(this).attr("id");
        var scroll_to = 0;
        var ssp = 750
        switch(link_id){
          case "link-2":
            if(_that.getCurrIndex()!=1){
              var sp = Math.abs(_that.getCurrIndex()-1)*ssp;
              $('html,body').animate({scrollTop: wel_bg_h+'px'}, sp,"swing");
            }
            
          break;
          case "link-3":
            if(_that.getCurrIndex()!=2){
              var sp = Math.abs(_that.getCurrIndex()-2)*ssp;
              $('html,body').animate({scrollTop: epr_bg_h+'px'}, sp,"swing");
            }
            
          break;
          case "link-4":
            if(_that.getCurrIndex()!=3){
              var sp = Math.abs(_that.getCurrIndex()-3)*ssp;
              $('html,body').animate({scrollTop: ink_bg_h+'px'}, sp,"swing");
            }
          break;
          case "link-5":
            if(_that.getCurrIndex()!=4){
              var sp = Math.abs(_that.getCurrIndex()-4)*ssp;
              $('html,body').animate({scrollTop: tab_bg_h+'px'}, sp,"swing");
            }
            
          break;
        }
      });

      $(".rwd-menu-icon").click(function(event) {
        /* Act on the event */
        var menu = $(".nav-top-container .nav-meun");
        if(menu.css("display")=="none"){
          $(".menu-icon-s1").css({
            "top": "30px",
            "-webkit-transform": "rotate(45deg)",
            "-ms-transform": "rotate(45deg)",
            "transform": "rotate(45deg)"
          });
          $(".menu-icon-s2").css({
            "top": "30px",
            "-webkit-transform": "rotate(135deg)",
            "-ms-transform": "rotate(135deg)",
            "transform": "rotate(135deg)"
          }); 
          menu.slideDown('500', function() {
            menu.css({"display":"inline-block"});
          });      
        } else {
          $(".menu-icon-s1").css({
            "top": "25px",
            "-webkit-transform": "rotate(0)",
            "-ms-transform": "rotate(0)",
            "transform": "rotate(0)"
          });
          $(".menu-icon-s2").css({
            "top": "35px",
            "-webkit-transform": "rotate(0)",
            "-ms-transform": "rotate(0)",
            "transform": "rotate(0)"
          }); 
          menu.slideUp('500', function() {
            menu.css({"display":"none"});
          });
        }
        
      });

      $(".nav-country-menu a").click(function(event) {
        if($(".nav-country-list").css("display")=="none"){
          $(".nav-country-list").slideDown('500', function() {
            $(".nav-country-list").css({"display":"block"});
          });
        } else {
          $(".nav-country-list").slideUp('500', function() {
            $(".nav-country-list").css({"display":"none"});
          });
        }
      });

      var bg = currBgEle.css("background-image");
      $(".currbg").css("background-image",bg);

      var editenable = false;
      $(".toolbar>a").click(function(event) {
        /* Act on the event */
        $(".bgbox").toggle(400);
        if(editenable==false){
          editenable = true;
        } else {
          editenable = false;
        }
        $(".content .con-box h1,.content .con-box h2,.content .con-box p,.content .con-box span").prop('contenteditable', editenable);      
      });

      $(".gbitem").click(function(event) {
        var thisbg = $(this).css("background-image");
        currBgEle.css("background-image",thisbg);
        $(".currbg").css("background-image",thisbg);
      });

    }

    function winWheel(event, d, dX, dY){
      event.preventDefault();
      $('html,body').stop();
      /* Act on the event */
      var sp = 1500;
      var wh = $(window).height();
      if(d>0){
        if(_that.getCurrIndex()!=0){
          var goTop = wh*(_that.getCurrIndex()-1);
          $('html,body').animate({"scrollTop": goTop+"px"}, sp,"swing");
        }
      } else {
        if(_that.getCurrIndex()!=5){
          var goTop = wh*(_that.getCurrIndex()+1);
          $('html,body').animate({"scrollTop": goTop+"px"}, sp,"swing");
        }
        if(_that.getCurrIndex()==5){
          var goTop = wh*(_that.getCurrIndex()+1);
          $('html,body').animate({"scrollTop": goTop+76+"px"}, sp,"swing");
        }
      }
      
      
    }

    function winScroll(e){
      



      var wel_bg_h = wel_bg.height()-150;
      var epr_bg_h = epr_bg.height()+wel_bg_h;
      var ink_bg_h = ink_bg.height()+epr_bg_h;
      var tab_bg_h = tab_bg.height()+ink_bg_h;
      var sup_bg_h = sup_bg.height()+tab_bg_h;
      var beg_bg_h = beg_bg.height()+sup_bg_h;

      var ww = $(window).width();
      var wh = $(window).height();
      var vh = wh/100;
      var ds = $(document).scrollTop(); 

      var vds = Math.round(ds/wh*100);
      var currIndex = Math.floor(vds/100);
      var vvds = vds - currIndex*100;
      _that.setCurrIndex(currIndex);

      var bn = 25*vvds/100;
      currbgEle = $(".page-bg-section").eq(currIndex);
      var thanEle = $(".page-bg-section:gt("+currIndex+")");
      if(currIndex==5){
        if(ww<1024){
          footer.css({"position":"fixed"});
        } else {
          footer.css({"position":"relative"});
        }
      }else{
        footer.css({"position":"relative"});
      }

      currbgEle.css({
        "-webkit-filter":"blur("+bn+"px)",
        "position":"fixed",
        "top":"0px"
      }).siblings('.page-bg-section').css({
        "-webkit-filter":"blur(0px)",
      });

      thanEle.each(function(index, el) {
        var vh = (index+currIndex+1)*100+"vh";
        $(el).css({"position":"absolute","top":vh});
      });

      var bg = currBgEle.css("background-image");
      $(".currbg").css("background-image",bg);

      if(currIndex==3){
        $("#con-img-4").css({"display":"block"}).animate(
          {
            "bottom": "0px",
          },
          400, 
          function() {
              $("#con-img-4 .in-img").fadeIn(500);
          }
        );
      }


      if(currIndex==0){
        var bgv_a1i = 70-vvds;
        bgv_a1i = bgv_a1i<=38?38:bgv_a1i;
        var hv_a1i = vvds;
        hv_a1i = hv_a1i>=38?38:hv_a1i;
        a1i.css({
          "top":hv_a1i+"vh",
          "background-size":"auto "+bgv_a1i+"%"
        });



        if(vvds>=38){
          a1i.fadeOut(300);
          xf1.fadeOut(300);
          xf2.fadeOut(300);
          var hv_xf3 = 90-38+vds;
          xf3.css({
            "top":hv_xf3+"vh"
          })
        } else {
          a1i.fadeIn(300);
          xf1.fadeIn(300);
          xf2.fadeIn(300);
        }

 
          a22.css({
            "top":"134vh",
            "background-size":"auto 50%"
          })
        
      }

      if(vds<100){
        xf3.fadeIn()
      } else {
        xf3.fadeOut()
      }


      if(vds>80){
        var bgv_a22 = 50-vds;
        bgv_a22 = bgv_a22<=70?70:bgv_a22;
        var hv_a22 = 234+vds;
        hv_a22 = hv_a22>145?145:hv_a22;
        a22.css({
          "top":hv_a22+"vh",
          "background-size":"auto "+bgv_a22+"%"
        })
      }

      

      if(currIndex==1){
        xf3.css({
          "top":"144vh"
        })

        

        if(vds>115){
          a22.fadeOut(300);
          a3.fadeIn(300);
        } else {
          a22.fadeIn(300);
          a3.fadeOut(300);
        }

        if(vvds>15){
          var vdeg_a3 = 29-vvds;
          var hv_a3 = 165+vvds;
          vdeg_a3 = vdeg_a3<=0?0:vdeg_a3;
          hv_a3 = hv_a3>=255?255:hv_a3;
          a3.css({
            "top":hv_a3+"vh",
            "-moz-transform": "rotate("+vdeg_a3+"deg)",
            "-webkit-transform": "rotate("+vdeg_a3+"deg)",
            "-ms-transform": "rotate("+vdeg_a3+"deg)",
            "transform": "rotate("+vdeg_a3+"deg)"
          })
        }
      }
      


      if(ds>=0&&ds<wel_bg_h){
        nav_top.css({"background-color":"rgba(14,14,14,0.8)"});
        if(ww<=1024){
          footer.css({"position":"relative"});
        }
        $(".gnb .nav-top-container .nav-meun .nav-meun-list li a").css({"color":"#fff"});
      } else if(ds>=wel_bg_h&&ds<epr_bg_h){
        nav_top.css({"background-color":"rgba(121,121,121,0.8)"});
        $(".gnb .nav-top-container .nav-meun .nav-meun-list li a").css({"color":"#eee"});
        if(ww<=1024){
          footer.css({"position":"relative"});
        }
      } else if(ds>=epr_bg_h&&ds<ink_bg_h){
        nav_top.css({"background-color":"rgba(130,48,48,0.8)"});
        $(".gnb .nav-top-container .nav-meun .nav-meun-list li a").css({"color":"#fff"});
        if(ww<=1024){
          footer.css({"position":"relative"});
        }
      } else if(ds>=ink_bg_h&&ds<tab_bg_h){
        nav_top.css({"background-color":"rgba(121,121,121,0.8)"});
        $(".gnb .nav-top-container .nav-meun .nav-meun-list li a").css({"color":"#eee"});
        if(ww<=1024){
          footer.css({"position":"relative"});
        }
      } else if(ds>=tab_bg_h&&ds<sup_bg_h){
        nav_top.css({"background-color":"rgba(14,14,14,0.8)"});
        $(".gnb .nav-top-container .nav-meun .nav-meun-list li a").css({"color":"#fff"});
        if(ww<=1024){
          footer.css({"position":"relative"});
        }
      } else if(ds>=sup_bg_h){
        nav_top.css({"background-color":"rgba(121,121,121,0.8)"});
        $(".gnb .nav-top-container .nav-meun .nav-meun-list li a").css({"color":"#eee"});
        if(ww<=1024){
          footer.css({"position":"fixed"});
        }
      }

    }

    this.initEleArr = function(){

    }

    this.init();
  }


  $.fn.OPSPlugin = function(opt){
    var opsp = new OPSPlugin(opt);
    return opsp;
  }
})(jQuery)
