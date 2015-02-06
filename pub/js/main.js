//var vp = $(window).width();
//
//function hidetab() {
//    if (vp < 992) {
//        $('#publicactivity a:last').hide();
//    }
//}

$(".postme").click(function submitme() {
    $.post("https://api.github.com/repos/TheIronYard--Orlando/FEE--2015--SPRING/issues/257/comments?access_token=46045169c764de2548ed9b3bd28b3bc88c58daf4", JSON.stringify({"body": $("#mytextarea").val()})
        );
});

//function submitme(mycomment) { 
//    stringify(mycomment);
//$.post("https://api.github.com/repos/TheIronYard--Orlando/FEE--2015--SPRING/issues/257/comments?access_token=46045169c764de2548ed9b3bd28b3bc88c58daf4", JSON.stringify({"body": mycomment})
//        );}