$(document).ready(function(){

    // $(".content-wrap .c > div").on("click",function(){

    //     if($(this).index() == 0){
    //         $(location).attr('href', "./k2eider.html");
    //     }else if($(this).index() == 1){
    //         $(location).attr('href', "./funko.html");
    //     }else if($(this).index() == 2){
    //         $(location).attr('href', "./admigo.html");
    //     }else if($(this).index() == 3){
    //         $(location).attr('href', "./beyondesk.html");
    //     }else if($(this).index() == 4){
    //         $(location).attr('href', "./madjWeb.html");
    //     }else if($(this).index() == 5){
    //         $(location).attr('href', "./sdream.html");
    //     }
    // });

    
    var shown = 0;
    var slides = $(".slides li");   

    $(function () {
        $('.links a').click(function (e) {
            e.preventDefault();
            var h = $(".slides").height();
            var clicked = $('.links a').index(this);
            var toShowSlide = slides.eq(clicked);
            var toHideSlide = slides.eq(shown);
            if (clicked > shown) {
                toHideSlide.animate({
                    "top": "-" + h + "px"
                }, "slow");
                toShowSlide.css({
                    "top": h + "px"
                }).show().animate({
                    "top": 0
                }, "slow");
                shown = clicked;
            } else if (clicked < shown) {
                toHideSlide.animate({
                    "top": h + "px"
                }, "slow");
                toShowSlide.css({
                    top: "-" + h + "px"
                }).show().animate({
                    "top": 0
                }, "slow");
                shown = clicked;
            }
        });

        $(window).bind('mousewheel DOMMouseScroll', function (event) {
        if (slides.filter(":animated").length > 0) { return; } //애니메이션 진행 중에 발생한 휠은 무시
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                // scroll up
                if (shown > 0) { //무한 반복되길 원하면 (shown >= 0)
                    $('.links a').eq(shown - 1).triggerHandler("click");
                }
            } else {
                // scroll down
                if (shown < slides.length-1) {
                    $('.links a').eq(shown + 1).triggerHandler("click");			
                } 
                //무한 반복되길 원하면 아래 3줄 주석제거
    // 			else {
    // 				$('.links a').eq(0).triggerHandler("click");
    // 			}				
            }
        });


    });




});