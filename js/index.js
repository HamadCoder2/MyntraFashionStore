
$(document).ready(function () {

    $('.menu-btn').click(function () {
        $('.na .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });






    $(window).scroll(function () {
        // if (this.scrollY > 100) {
        // $('header').addClass("sticky");
        // } else {
        // $('header').removeClass("sticky");
        // }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });




});


