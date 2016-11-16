$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth > 1180) {
           $('#democrats').css({
               fontSize: '25px',
               backgroundImage: 'none'
           })
           $('.republicans').css({
               fontSize: '25px',
               backgroundImage: 'none'
           })               
    } else if(viewportWidth > 800 && viewportWidth <= 1180){
        $('#democrats').css('font-size','16px');
        $('.republicans').css('font-size','16px');
    } else{
        $('#democrats').css({
            backgroundImage: 'url("https://toppletrump.com/topple-trump/img/svg/markup/donkey-on-blue.svg?v888ddd1069f07a7134a17c160a9f987d")',
            fontSize: '0px'
        });
        $('.republicans').css({
            backgroundImage: 'url("https://toppletrump.com/topple-trump/img/svg/markup/elephant-on-red.svg?v8359d1a24fb5746d9bff95844a0aa973")',
            fontSize: '0px'
        });
    }
});
$(document).ready(function(){
    $(window).resize(function () {
    var viewportWidthtab2 = $(window).width();
    if (viewportWidthtab2 <= 1180) {
        
        $('.mainleft').css({'left':'-1000px'});
        $('.img_left').css({'left':'-1000px'});
        $('.states-map svg').css({'left':'-1000px'});
        $('.table').css({'left':'-1000px'});
        $('.animal_right').css({'left':'-1000px'});
        $('.progress').css({'left':'-1000px'});
        $('.animal').css({'left':'-1000px'});                
        
    } else{  
        $('.mainleft').css({'left':'-59px'});
        $('.img_left').css({'left':'142px'});
        $('.states-map svg').css({'left':'12px'});
        $('.table').css({'left':'26px'});
        $('.animal_right').css({'left':'173px'});
        $('.progress').css({'left':'84px'});
        $('.animal').css({'left':'85px'});
    }
});
})

//Controls Volume
 var flag;
    $('.myvolumeup').click(function() {
        flag = 0;
        if(flag==0){        
            $('.myvolumeup').hide();
            $('.myvolumeoff').show();               
        }
    });
    $('.myvolumeoff').click(function() {
        flag = 1;
        if (flag == 1){
            $('.myvolumeup').show();
            $('.myvolumeoff').hide();            
        }
    });
    
$( ".answer__inner" ).mouseenter(function() {
  $(this).css('text-decoration','none');
});   




