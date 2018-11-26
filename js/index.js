$(document).ready(function(){

    var global = {
        elems: $('#qunit-fixture').children()
  
      , img1: 'image1.jpg'
      , img2: 'image2.jpg'
      , imgs: ['image1.jpg', 'image2.jpg']
      , destroy: function () {
          try {
            $(':backstretch').data('backstretch').destroy();
          } catch(err) { /* Do nothing */ }
        }
    };


    var wwWidth =$(window).innerWidth();
    if(wwWidth >=1024){
        backImg(wwWidth);
    }
    $(window).resize(function(){
        wwWidth = $(window).innerWidth();
        if(wwWidth >=1024){
            console.log(wwWidth);
            backImg(wwWidth);
        }else{
            global.destroy();
        }
    });



    if(wwWidth >=1024){
        $(window).bind("click touchstart tap",function(e){
            if($(event.target).attr("class") ==undefined || $(event.target).attr("class")==""){
                var imgPath = $(".backstretch img").attr("src");
                if(imgPath.indexOf("k2eider") > -1){
                    $(location).attr('href', "./k2eider.html");
                }else if(imgPath.indexOf("funko") > -1){
                    $(location).attr('href', "./funko.html");
                }else if(imgPath.indexOf("admigo") > -1){
                    $(location).attr('href', "./admigo.html");
                }else if(imgPath.indexOf("beyondesk") > -1){
                    $(location).attr('href', "./beyondesk.html");
                }else if(imgPath.indexOf("madjWeb") > -1){
                    $(location).attr('href', "./madjWeb.html");
                }else if(imgPath.indexOf("sdream") > -1){
                    $(location).attr('href', "./sdream.html");
                }
            }
        });
    }
    
    // $(function(){
    //     console.log(wwWidth);
    //     // var wWidth = window.innerWidth;
    //     if(wwWidth >=1024){
    //         $.backstretch(["./img/k2eider.png","./img/funko_main.png","./img/admigo_main.png","./img/visner_main.png","./img/madjWeb.png","./img/sdream_main.png"], 
    //             {duration: 2500, fade: 500});
    //     }
    // });





});

function backImg (wwWidth){
    if(wwWidth >=1024){
        $.backstretch(["./img/k2eider.png","./img/funko_main.png","./img/admigo_main.png","./img/visner_main.png","./img/madjWeb.png","./img/sdream_main.png"], 
                {duration: 2500, fade: 500});
    }
}