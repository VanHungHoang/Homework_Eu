$(window).load(function() {
  $(".col-xs-12").twentytwenty();
});

$(document).ready(function(){
    $('#idmaths').click(function(){
        $('.dcrs-1').hide();
        $('.dcrs-2').show();
    });
    $('#idebook').click(function(){
        $('.dcrs-2').hide();
        $('.dcrs-1').show();
    });
});