$(function() {
    $(window).on("load resize", function() {
        $(".fill-screen").css("height", window.innerHeight);
    }) ;

    // Bootstrap scrollspy
    $("body").scollspy({
        target: ".navbar"
    })
});