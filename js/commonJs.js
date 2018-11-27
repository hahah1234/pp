$(document).ready(function(){
    // $(".pro-item a").on('mouseenter',function(event){
    //     var id = $(this).attr('data-id');
        
    //     $(".pro-img-item").removeClass('active');
    //     $(".pro-img-item[data-id='"+id+"']").addClass('active');
    // })
    

    $(".menu-box-m,ham-box").on("click",function(){
        if($(".menu-box-slide-wrap").css("display")=="none"){
            $(".menu-box-slide-wrap").fadeIn();
        }else{
            $(".menu-box-slide-wrap").fadeOut();
        }
    });

    $(".ham-box").click(function(){
        
        var isActive = $(".menu-box-slide-wrap").hasClass('active');
        if(isActive){
            $(".menu-box-slide-wrap").removeClass('active');
            $("#background-layer").hide();
        }else{
            
            $(".menu-box-slide-wrap").addClass('active');
            $("#background-layer").show();
        }
    })

    $(function(){
        $(".menu-box-nm li").hover(function(){
          $('ul:first',this).show();
        }, function(){
          $('ul:first',this).hide();
        });
        $(".menu-box-nm>li:has(ul)>a").each( function() {
          $(this).html( $(this).html()+" <i class='fa fa-angle-down'></i>" );
        });
        $(".menu-box-nm ul li:has(ul)")
          .find("a:first")
          .append("<p style='float:right;margin:-3px'>&#9656;</p>");
      });

});
