(function($){
  var outil;

  var OPSPlugin = function(opt){
    if(!opt.log)opt.log = false;

    var _that = this;

    var content = $(".content");
    var nav_top = $(".nav-top");
    var anim = $(".anim");
    var bg = $(".bg");
    var con = $(".con");
    var footer = $(".footer");


    var menu = $(".nav-top-container .nav-meun");
    var icon_s1 = $(".menu-icon-s1");
    var icon_s2 = $(".menu-icon-s2");

    var a1_1 = $("#anim-img-1-1");
    var a1_2 = $("#anim-img-1-2");
    var xf1 = $("#anim-img-xf-1");
    var xf2 = $("#anim-img-xf-2");
    var xf3 = $("#anim-img-xf-3");
    var a2_1 = $("#anim-img-2-1");
    var a2_2 = $("#anim-img-2-2");
    var a2_3 = $("#anim-img-2-3");
    var a3_1 = $("#anim-img-3-1");
    var a4_1 = $("#anim-img-4-1");
    var a4_2 = $("#anim-img-4-2");

    var currIndex = 0;
    var lastIndex = 0;

    var currBgEle = null;
    var currAnimEle = [];
    var currConEle = null;

    this.setCurrIndex = function(v,cb){
      lastIndex = currIndex;
      if(v<0){currIndex=0;}
      else if(v>5){currIndex=5;}
      else{currIndex = v;}
      if(cb&&typeof(cb)=="function"){cb(currIndex);}
      toSrceen(currIndex,lastIndex);
    }

    this.getCurrIndex = function(){
      var ci = currIndex;
      return ci;
    }

    this.setCurrBgEle = function(ci,cb){
      currBgEle = bg.find(".page-bg-div").eq(ci);
      currBgEle.addClass('transform').siblings('.page-bg-div').removeClass('transform');
      bg.css("top","-"+ci*100+"vh");

      var bgColor = currBgEle.css("background-color");
      var color = currBgEle.css("color");
      _that.setCurrMenuColor(bgColor,color);

      if(cb&&typeof(cb)=="function"){cb();}
    }

    this.getCurrBgEle = function(){
      var ele = currBgEle;
      return ele;
    }

    this.setCurrAnimEle = function(ci,cb){

      if(cb&&typeof(cb)=="function"){cb();}
    }

    this.getCurrAnimEle = function(){
      var ele = currAnimEle;
      return ele;
    }

    this.setCurrConEle = function(ci,cb){
      currConEle = con.find('.page-con-div').eq(ci);
      currConEle.addClass('transform').siblings('.page-con-div').removeClass('transform');
      con.css("top","-"+ci*100+"vh");
      if(cb&&typeof(cb)=="function"){cb();}
    }

    this.getCurrConEle = function(){
      var ele = currConEle;
      return ele;
    }

    this.setCurrMenuColor = function(bgColor,color){
      nav_top.css("background-color",bgColor);
      nav_top.find(".nav-meun-list li a").css("color",color);
    }

    this.init = function(){
      $("body").fadeIn(300,"linear",function(){
        _that.setCurrIndex(0);
      });

      $(window).bind('mousewheel', winWheel);
      $(".nav-meun-list a").bind("click",meunClick);
      $(".rwd-menu-icon").bind("click",toggleIcon);
      $(".nav-country-menu a").bind("click",countryMeunClick);
    }

    function meunClick(event){
      var thisId = $(this).attr("id")
      var toIndex = parseInt(thisId.substring(thisId.length-1,thisId.length));
      _that.setCurrIndex(toIndex);
    }

    function toggleIcon(event){
      icon_s1.toggleClass('transform');
      icon_s2.toggleClass('transform');
      menu.toggleClass('transform');
    }

    function countryMeunClick(event){
      var cl = $(".nav-country-list");
      cl.toggleClass('transform');
    }

    function toSrceen(ci,li){
      log("ci:"+ci+"  li:"+li);
      _that.setCurrBgEle(ci);
      _that.setCurrAnimEle(ci);
      _that.setCurrConEle(ci);
      if(ci==5){
        footer.addClass('transform');
      } else {
        footer.removeClass('transform');
      }
    }

    function winWheel(event, d, dX, dY){
      $(window).unbind('mousewheel', winWheel);
      var i = _that.getCurrIndex();
      if(d>0){
        _that.setCurrIndex(i-1);
      }
      if(d<0){
        _that.setCurrIndex(i+1);
      }
      setTimeout(function(){
        $(window).bind('mousewheel', winWheel);
      }, 2000);
    }

    function log(str){
      if(opt.log==true)console.log(str);
    }

    this.init();
  }


  $.fn.OPSPlugin = function(opt){
    var opsp = new OPSPlugin(opt);
    return opsp;
  }
})(jQuery)
