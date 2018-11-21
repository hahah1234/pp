$(document).ready(function(){
    // $(".pro-item a").on('mouseenter',function(event){
    //     var id = $(this).attr('data-id');
        
    //     $(".pro-img-item").removeClass('active');
    //     $(".pro-img-item[data-id='"+id+"']").addClass('active');
    // })
    

    $(".menu-box-m").on("click",function(){
        if($(".menu-box-slide-wrap").css("display")=="none"){
            $(".menu-box-slide-wrap").fadeIn();
        }else{
            $(".menu-box-slide-wrap").fadeOut();
        }
    });

    



});