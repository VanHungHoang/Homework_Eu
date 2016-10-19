$( ".add" ).click(function(event) {
//  var items = Array( "My task 1", "My task 2", "My task 3");
//
//  var item = items[Math.floor(Math.random()*items.length)];

//  $("ul").add( "<li><a href='#'><div class='fa fa-check'></div></a> " + item + "</li>" ).fadeIn().appendTo("ul");
      
    addchild();
});

$('#txtinput').keypress(function(e) {
    if (e.keyCode == '13') {
        addchild();
    }
});


//$(function() {
    $( "ul" ).sortable({});
//});


function addchild(){
    let txtinput = $('#txtinput').val();
    if(txtinput !== ''){
        $("ul").append("<li><a href='#' id='sortable'><div class='fa fa-times'></div></a> " + txtinput + "</li>");
        $('#txtinput').val('');
        $('ul > li').css('font-size','20px');
        $('ul > li > a').css('backgroundColor','red')
        $( document ).on( "click", "li > a", function() {
            $(this).parent( "li" )
                .css('text-decoration','line-through')
                .css('color','red')
                .slideUp(1000);
        });
        
    }else{alert('You have not entered information !')}   
    
}


