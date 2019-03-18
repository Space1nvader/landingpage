/*mobile mnu */
$(function(){
    $('.mnu-bt').click(function(){
        $('nav').css('height', '250').css('opacity','1')
        
    })
})

/* плавный якорь */
 $(function(){
  $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false; 
});
});

    /* pop up */
$(function(){
    $('.popup').fadeOut(1);
    
    $('.pop-on').click(function(){
        $('.popup').fadeIn();
    });
$('.pop-bt, .popup').click(function(){
    $('.popup').fadeOut();
    });
});
/* слайдер */
$(document).ready(function(){
    $('.slider').bxSlider({
        pager: false,
    });
});