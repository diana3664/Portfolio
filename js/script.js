jQuery(document).ready(function(){
    jQuery(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            jQuery('.navbar').addClass("sticky");
        }else{
            jQuery('.navbar').removeClass("sticky");
        }
    })
     // toggle menu/navbar script
     jQuery('.menu-btn').click(function(){
        jQuery('.navbar .menu').toggleClass("active");
        jQuery('.menu-btn i').toggleClass("active");
});

 // typing text animation script
 var typed = new Typed(".typing", {
    strings: ["Professional Software Developer", "Designer UI/UX", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: [ "Designer UI/UX", "Professional Software Developer","Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

jQuery('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});
});