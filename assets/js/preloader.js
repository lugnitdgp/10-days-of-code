$(window).on('load', function () { 
    jQuery('#status').fadeOut(900); 
    $('#preloader').delay(2).fadeOut(1000); 
    $('body').delay(1000).css({'overflow':'visible'});
});