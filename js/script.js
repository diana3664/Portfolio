jQuery(document).ready(function(){
    jQuery(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            jQuery('.navbar').addClass("sticky");
        }else{
            jQuery('.navbar').removeClass("sticky");
        }
          // toggle menu/navbar script
          jQuery('.menu-btn').click(function(){
            jQuery('.navbar .menu').toggleClass("active");
            jQuery('.menu-btn i').toggleClass("active");
    });
    })
});