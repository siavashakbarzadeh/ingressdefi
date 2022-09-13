$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 150) {
        $(".home-header").addClass("scrolled");
        $(".astro-cnt").addClass("scrollastro");
    } else {
        $(".home-header").removeClass("scrolled");
        $(".astro-cnt").removeClass("scrollastro");
    }
});