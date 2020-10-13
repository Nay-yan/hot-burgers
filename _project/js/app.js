
$(".navbar-toggler").click(function(){
   let result = $(`.collapse`).hasClass(`show`);
   console.log(result);
   if(result){
    $(".menu").removeClass(`feather-x`).addClass(`feather-menu`);
   }else{
       $(".menu").removeClass(`feather-menu`).addClass(`feather-x`);
   }
});


$(window).on("load",function(){
    $('.loading').fadeOut(500,function(){
        $(this).remove();
    });
  });
