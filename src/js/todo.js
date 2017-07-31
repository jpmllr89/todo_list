$("input[type='text']").keypress(function(event){
    if(event.which ==13){
        // alert("WORKING")

        $("ul").append("<li><span><i class='fa fa-window-close-o'></i></span>"+$('input').val()+"</li>");
        $("input").val("");
    }
});

$("input[type='text']").click(function(){
   $(this).attr("placeholder", "")
});
$("ul").on("click", "li", function(){
    $(this).toggleClass('done');
});
$("ul").on("click", "span", function() {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
});
$("span").click(function(){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
});


$(".fa-plus").click(function(){
    $(this).toggleClass("rotate");
    if(!$(this).hasClass("rotate")){
        $("input").css("display", "none");
    }else{
        $("input").css("display", "block");
    }
})