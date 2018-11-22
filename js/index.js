$(document).ready(function(){

    $(".content-wrap .c > div").on("click",function(){

        if($(this).index() == 0){
            $(location).attr('href', "./k2eider.html");
        }else if($(this).index() == 1){
            $(location).attr('href', "./funko.html");
        }else if($(this).index() == 2){
            $(location).attr('href', "./admigo.html");
        }else if($(this).index() == 2){
            $(location).attr('href', "./beyondesk.html");
        }else if($(this).index() == 3){
            $(location).attr('href', "./madjWeb.html");
        }else if($(this).index() == 4){
            $(location).attr('href', "./sdream.html");
        }
    });
});