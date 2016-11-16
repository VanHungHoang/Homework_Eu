function move() {
  var x1 = 0;
  var x2 = 0;
  var x3 = 0;
  var x = 0;
  var x5 = 0;
  var x6 = 0;

  var count = false;
  function frame() {
    x1++;  // update parameters
    x2 = x2 + 0.25;  // update parameters
    x3 = x3 + 0.5;  // update parameters
    x = x + 1.5;  // update parameters
    x5 = x5 + 1;  // update parameters
    x6 = x6 + 0.4;  // update parameters

	$("#hp-cloud-2").css('transform', 'translateX('+x1+'px)');
	$("#hp-cloud-7").css('transform', 'translateX('+x2+'px)');
	$("#hp-cloud-3").css('transform', 'translateX('+x3+'px)');
	$("#hp-cloud").css('transform', 'translateX('+x+'px)');
	$("#hp-cloud-5").css('transform', 'translateX('+x5+'px)');
	$("#hp-plane-b").css('transform', 'rotate('+(-x6)+'deg)');
	$("#hp-plane-a").css('transform', 'rotate('+(-x6)+'deg)');

//	console.log(x1)
    if (x1 >= 1500){
    	x1 = 0;
    }
    if (x2 >= 1000){
    	x2 = 0;
    }       
    if (x3 >= 1000){
    	x3 = 0;
    }   
    if (x >= 1000){
    	x = 0;
    }
    if (x5 >= 1000){
    	x5 = 0;
    }         
  }	
  var id = setInterval(frame, 10) // draw every 10ms
}

move();


function move1() {
	var x1 = 0;
	var x2 = 1;
	var count = false;
	function frame() {
		if(count == false){
			x1 = x1 + 0.08;
			x2 = x2 + 0.01
			if(x1 >= 10){
				count = true;
			}			
			if(x2 >= 1.2){
				count = true;
			}
		}else{
			x1 = x1 - 0.08;
			x2 = x2 - 0.01;
			if(x1 <= 0){
				count = false;
			}	
			if(x2 <= 1){
				count = false;
			}					
		}
		
		$("#hp-flag-pole").css('transform', 'rotate('+(-x1)+'deg)');	        
		$("#hp-toupe").css('transform', 'rotate('+(-x1)+'deg)');	        
		$("#hp-flag").css('transform', 'scale('+(x2)+')');	        
	}	
	var id = setInterval(frame, 10) // draw every 10ms
}

move1();
$("#hp-plane-b").css("-webkit-transform-origin", "688px 550px" );
$("#hp-plane-a").css("-webkit-transform-origin", "1102px 644px 0px" );
$("#hp-flag-pole").css("-webkit-transform-origin", "904px 905px" );
$("#hp-flag").css("-webkit-transform-origin", "904px 500px" );
$("#hp-toupe").css("-webkit-transform-origin", "904px 500px" );
$("#outter-donald").css("-webkit-transform", "translateY(-272px)" );







function move2() {
	var x1 = 0;
	var x2 = 0;
	var x3 = 0;
	var x4 = 0;
	var x5 = 0;
	var x6 = 0;
	var x7 = 0;
	var x8 = 0;
	var x9 = 0;
	var x10 = 0;
	var x11 = 0;
	var x12 = 0;
	var x13 = 0;
	var x14 = 0;
	var x15 = 0;
	var x16 = 0;

	function frame() {
 		x1++;
 		x2 = x2 + 2;
 		x3 = x3 + 1;
 		x4 = x4 + 1.5;
 		x5 = x5 + 1;
 		x6 = x6 + 0.7;
 		x7 = x7 + 0.8;
 		x8 = x8 + 0.8;
 		x9 = x9 + 1.8;
 		x10 = x10 + 1.2;
 		x11 = x11 + 1.6;
 		x12 = x12 + 0.9;
 		x13 = x13 + 0.6;
 		x14 = x14 + 0.6;
 		x15 = x15 + 0.6;
 		x16 = x16 + 1.4;
 		$("#hp-dollar").css('transform', 'translateY('+x2+'px) rotate('+x1+'deg)');
 		$("#hp-dollar-2").css('transform', 'translateY('+x3+'px) rotate('+x1+'deg)');
 		$("#hp-dollar-3").css('transform', 'translateY('+x4+'px) rotate('+x1+'deg)');
 		$("#hp-dollar-4").css('transform', 'translateY('+x5+'px) rotate('+x1+'deg)');
 		$("#hp-dollar-5").css('transform', 'translateY('+x6+'px) rotate('+x1+'deg)');
 		$("#hp-dollar-6").css('transform', 'translateY('+x7+'px) rotate('+x1+'deg)');
 		$("#hp-dollar-7").css('transform', 'translateY('+x8+'px) rotate('+x1+'deg)');
 		$("#hp-dollar-8").css('transform', 'translateY('+x9+'px) rotate('+x1+'deg)');
 		$("#hp-dollar-9").css('transform', 'translateY('+x10+'px) rotate('+x1+'deg)');
 		$("#hp-dollar-10").css('transform', 'translateY('+x11+'px) rotate('+x1+'deg)');
 		$("#hp-dollar-11").css('transform', 'translateY('+x12+'px) rotate('+x1+'deg)');
 		$("#hp-dollar-12").css('transform', 'translateY('+x13+'px) rotate('+x1+'deg)');
 		$("#hp-dollar-13").css('transform', 'translateY('+x14+'px) rotate('+x1+'deg)');
 		$("#hp-dollar-14").css('transform', 'translateY('+x15+'px) rotate('+x1+'deg)');
 		$("#hp-dollar-15").css('transform', 'translateY('+x16+'px) rotate('+x1+'deg)');
	}	
	var id = setInterval(frame, 10) // draw every 10ms
}
move2();

$("#hp-dollar").css("-webkit-transform-origin", "1090px 640px" );
$("#hp-dollar-2").css("-webkit-transform-origin", "1090px 640px" );
$("#hp-dollar-3").css("-webkit-transform-origin", "1090px 640px" );
$("#hp-dollar-4").css("-webkit-transform-origin", "1090px 640px" );
$("#hp-dollar-5").css("-webkit-transform-origin", "1090px 640px" );
$("#hp-dollar-6").css("-webkit-transform-origin", "1090px 640px" );
$("#hp-dollar-7").css("-webkit-transform-origin", "1090px 640px" );
$("#hp-dollar-8").css("-webkit-transform-origin", "1090px 640px" );
$("#hp-dollar-9").css("-webkit-transform-origin", "932px 651px" );
$("#hp-dollar-10").css("-webkit-transform-origin", "932px 651px" );
$("#hp-dollar-11").css("-webkit-transform-origin", "932px 651px" );
$("#hp-dollar-12").css("-webkit-transform-origin", "932px 651px" );
$("#hp-dollar-13").css("-webkit-transform-origin", "1090px 640px" );
$("#hp-dollar-14").css("-webkit-transform-origin", "1090px 640px" );
$("#hp-dollar-15").css("-webkit-transform-origin", "1090px 640px" );









//Change URL and load Ajax
    function ChangeUrl(page, url) {
        if (typeof (history.pushState) != "undefined") {
            var obj = { Page: page, Url: url };
            history.pushState(obj, obj.Page, obj.Url);
        } else {
            alert("Browser does not support HTML5.");
        }
    }
    $(function () {
        $("#button1").click(function () {
            ChangeUrl('Page1', 'tab2.html');
            require("../js/loaddata.js");
        });

    });

