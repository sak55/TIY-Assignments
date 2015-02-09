$(document).ready(function () {
    
//    var myinfo = $.getJSON("~/Sites/TIY-Assignments/apis/github/users/sak55/sak55.json");
//    console.log(myinfo.name);
    var myinfo;
    
//    ../apis/github/users/sak55/
    
    $.get('/apis/github/users/sak55.json', function (user) {
        $("#fullname").append(user.name),
        $("#since").append(user.created_at),
        $("#email").append(user.email),
        $("#login").append(user.login),
        $("#followers").append(user.followers),
        $("#following").append(user.following)
        ;}, "json");
    
    
    $.get("repos.json", function (repoArray) {
        $.each(repoArray, function (index, item) {
            var repolist = $('#repo' + index);
            repolist.append(item.full_name);
            console.log(repolist);
//            repolist.find('p').append(item.description);
        });
    }, "json");
    
    $.get("repos.json", function (repo2Array) {
        $.each(repo2Array, function (index, item) {
            var repo2list = $('#repo2' + index);
            repo2list.append(item.full_name);
            console.log(repo2list);
//            repolist.find('p').append(item.description);
        });
    }, "json");
//    console.log(myinfo.name)
    
//This function posts a comment to my WIP Issue and then clears the comment box.
    $(".postme").click(function submitme() {
        $.post("https://api.github.com/repos/TheIronYard--Orlando/FEE--2015--SPRING/issues/257/comments?access_token=46045169c764de2548ed9b3bd28b3bc88c58daf4", JSON.stringify({"body": $("#mytextarea").val()}),
               $("#mytextarea").val(""));
    });

    

}); //jQuery document.ready function closing bracket