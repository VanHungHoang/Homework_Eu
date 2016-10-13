$(document).ready(function(){

    $('#form-button-submit').click(function(){
        $(this).prop('disabled',true);
        $('#loadingtext').show();
      
    setTimeout(function(){
        $('#form-button-submit').prop('disabled',false);
        $('#loadingtext').hide();
    }, 2000);
    });    
    

});