$(document).ready(function () {
    
//    var myinfo = $.getJSON("~/Sites/TIY-Assignments/apis/github/users/sak55/sak55.json");
//    console.log(myinfo.name);
    var myinfo;
    
    $.get('sak55.json', function (user) {
        $("#fullname").append(user.name); }, "json");
    
    console.log(myinfo)
    
//This function posts a comment to my WIP Issue and then clears the comment box.
    $(".postme").click(function submitme() {
        $.post("https://api.github.com/repos/TheIronYard--Orlando/FEE--2015--SPRING/issues/257/comments?access_token=46045169c764de2548ed9b3bd28b3bc88c58daf4", JSON.stringify({"body": $("#mytextarea").val()}),
               $("#mytextarea").val(""));
    });

    

}); //jQuery document.ready function closing bracket