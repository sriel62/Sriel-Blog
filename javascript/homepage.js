/**
 * Created by sriel on 05/08/2018.
 */
$(document).ready(function () {
   console.log('Ready !');

   // Log Bar
var ad = $('.container_logbar');
    $(window).scroll(function(){
var pos = $(window).scrollTop();
        if(pos >=1000){
            ad.addClass('logbar_resize');
        }
        else{
            ad.removeClass('logbar_resize');
        }
    });

    // Box scale
    $('.box_html').click(function () {
        $(this).css({"-webkit-animation" : "scaling 5s" , "transform" : "scale(0.5"});
        setTimeout(function () {
            $('.box_html').css({"opacity" : "0.5"})
        }, 3000);
    });
    $('.box_html').mouseout(function () {
        $('.box_html').css({"-webkit-animation" : "unscaling 5s" , "transform" :  "scale(1)" , "opacity" : "1"});
    });























});