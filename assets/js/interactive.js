$(function() {
    $(window).on("load resize", function() {
        $(".fill-screen").css("height", window.innerHeight);
    }) ;

    // Bootstrap scrollspy
    $("body").scollspy({
        target: ".navbar",
        offset: 160
    });

    // smooth scrolling w/ scrollspy
    $("nav a, .down-button a").bind("click", function() {
        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top -100
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });

    // parallax scrolling w/ stellar.js
    $(window).stellar();
});