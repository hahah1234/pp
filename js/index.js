$(document).ready(function(){

    $(window).bind("click touchstart tap",function(){
        console.log($(event.target).attr("class"));

        console.log($(".backstretch img").attr("src"));
        if($(event.target).attr("class") !="undefined");
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
    });

    $(function(){
        $.backstretch(["./img/k2eider.png","./img/funko_main.png","./img/admigo_main.png","./img/visner_main.png","./img/madjWeb.png","./img/sdream_main.png"], 
            {duration: 3000, fade: 500});
    });


});