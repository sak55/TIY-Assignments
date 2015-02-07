$(document).ready(function () {



//This function posts a comment to my WIP Issue and then clears the comment box.
    $(".postme").click(function submitme() {
        $.post("https://api.github.com/repos/TheIronYard--Orlando/FEE--2015--SPRING/issues/257/comments?access_token=46045169c764de2548ed9b3bd28b3bc88c58daf4", JSON.stringify({"body": $("#mytextarea").val()}),
               $("#mytextarea").val(""));
    });

    

}); //jQuery document.ready function closing bracket