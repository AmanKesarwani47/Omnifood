$(document).ready(function() {
   /*For sticky navigation*/
    $('.js--section-features').waypoint(function(direction) {
       if(direction == "down") {
           $('nav').addClass('sticky');
       }else{
           $('nav').removeClass('sticky');
        }
    }, {
  offset: '60px;'
});
    
/*Scroll On Buttons*/
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000); 
    });
    $('.js--scroll-to-start').click(function () {
           $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000); 
        });
    /*Smooth scrolling from navigation*/
    
    /*animation on scroll*/
    $('.js--wp-1').waypoint(function(direction) {
       $('.js--wp-1').addClass('animated fadeIn'); 
    },{
        offset: '50%;'
    });
    $('.js--wp-2').waypoint(function(direction) {
       $('.js--wp-2').addClass('animated fadeInUp'); 
    },{
        offset: '50%;'
    });
    $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-3').addClass('animated bounceInUp'); 
    },{
        offset: '50%;'
    });
    $('.js--wp-4').waypoint(function(direction) {
       $('.js--wp-4').addClass('animated pulse'); 
    },{
        offset: '50%;'
    });
    
    $('.js--mobile-nav').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--mobile-nav i');
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else{
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');            
        }
    
    
    
    });
    
    
});