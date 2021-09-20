$(".pic1").on("mouseover",function(){
    $(this).animate({opacity:1});
});

$(".pic1").mouseleave(function(){
    $(".pic1").animate({opacity:0.7});

});

$(".btnloginn").click(function(){

    $("#modelId").modal('show');
    

});

$(".single-image").on("mouseover",function(){
    $(this).animate({opacity:1});
});

$(".single-image").mouseleave(function(){
    $(".single-image").animate({opacity:0.7});

});

$(".single-image").click(function(){

    var temp = $(this).attr("src");
    $(".single-image-main").attr("src",temp);

});