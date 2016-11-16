//global variable
var flagclock = true;




// Function to Shuffle Data

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// Loaddata
var _myData = [];
var myIndex = 0;
$.ajax({
  dataType: "json",
  url: "js/data.json",
  method:"GET",
  success: function(data, status ){
      //console.log(3333,status);
      //console.log(data);
      _myData = data;
      _myData = shuffleArray(_myData);
      
//      while(myIndex < _myData.length - 1){
//          console.log(_myData[myIndex]);
//          myIndex++;
//      }
      
      
//      var _index = Math.floor(Math.random()*_myData.length);
//      console.log(_index)
//      var entry = _myData[Math.floor(Math.random()*_myData.length)];
//      console.log(entry);
//
//      _myData.splice(_index,1);
//      console.log(_myData)
        
        getQuestion();
        showQuestion();
        getAnswer();
        flagclock = true;
        clock();
        setTimeout(function(){
        $('.item').show();
        },1000);
  }
});

//Function Get Question
function getQuestion(){
    if(myIndex < _myData.length){
        return _myData[myIndex];
    } else {
        return undefined;
    }
    
}


//Funtion Show Question to View
function showQuestion(){
    var _item_question = getQuestion();
    //show layout
    $("#question2").html(_item_question["question"]);
}


//Function Next Question
function nextQuestion(){
    if(myIndex < _myData.length - 1){
      console.log(_myData[myIndex]);
      myIndex++;
      getQuestion()
      showQuestion();

    }
    if(myIndex == _myData.length - 1){
        myIndex = 0;
    }
    console.log(myIndex);
}



//Function Get and Show Answer to View
var suffle_answer = [];
var index_answer;
var correctAnswer;
function getAnswer(){
    var _item_answer = getQuestion();
    suffle_answer = _item_answer.answers;
    suffle_answer = shuffleArray(suffle_answer); //Suffle All Answer 

    var answerId = _item_answer.answer_id;       //Get Correct Answerid
    
    var answerArr = [];
//Get random 6 value answer do not overlap
    //--case1: if index of correct answer id at after 5 element then isEnough = 5
    //--case2: isEnough = 6
    var isEnough = 5;
    suffle_answer.forEach(function(item){
        if(answerArr.length < isEnough && item.id != answerId){
            answerArr.push(item["answer"]);
        } 
        else if(item.id == answerId){
            correctAnswer = item["answer"];
            answerArr.push(correctAnswer);
            isEnough++;
        }
    });
console.log('value of answer is: ' + answerArr);//Console to check arr answerArr
 
//Get Answer at id HTML    
    for(var i = 0; i < answerArr.length; i++){
        $('#ans'+(i+1)).text(answerArr[i]);        
    }  
    

console.log('value of correctAnswer is: ' + correctAnswer);//Console to check correctAnswer
    
    
}




//Function Bgblue to Bgred
function blue_to_red(){
    $('.mycontainblue').hide();
    $('.mycontent').css('visibility','visible');
    $('.title').css('visibility','visible');
}


//Function Check Answer

function check_Ans(id){
    flagclock = false;   
    $('.item').hide();
    var _ans = $('#ans'+id).text();
    var scoreRe = parseInt($('#scoreRepublicans').text());
    var scoreDe = parseInt($('#scoreDemocrats').text());
//----------------------------------------------------
// TAI SAO LAI CU BI LAP LAI
    
    if(_ans === correctAnswer){
        console.log('correc');
        scoreRe += 10;
        $('#scoreRepublicans').text(scoreRe.toString());
        $('.trum_vote').css({
            'transform-origin': '10% 90%',
             transform : 'scale(1.7)',  
             transition: 'all 1.5s ease-in-out 0.5s',               
        });
        setTimeout(function(){
            $('.trum_vote').css({
             transform : 'scale(1)',  
             transition: 'all 1.5s ease-in-out 0.5s',
             'transform-origin': '10% 90%'
            });     
        },2010);        
    }else{
        console.log('wrong');
        scoreDe +=10;
        $('#scoreDemocrats').text(scoreDe.toString());
        $('.hillari_vote').css({
            'transform-origin': '10% 90%',
             transform : 'scale(1.7)',  
             transition: 'all 1.5s ease-in-out 0.5s', 
        });
        setTimeout(function(){
            $('.hillari_vote').css({
             transform : 'scale(1)',  
             transition: 'all 1.5s ease-in-out 0.5s',
             'transform-origin': '10% 90%'
            });     
        },2010);
    }
    blue_to_red();
}


//Set Click Answer          
    $('.rc11').click(function(e) {  
        check_Ans(1);
    });
    $('.rc12').click(function(e) {  
        check_Ans(2);        
    });
    $('.rc13').click(function(e) {  
        check_Ans(3);           
    });
    $('.rc21').click(function(e) {  
        check_Ans(4);         
    });
    $('.rc22').click(function(e) {  
        check_Ans(5);            
    });
    $('.rc23').click(function(e) {  
        check_Ans(6);            
    });


function clock(){    
    var time = 30; /* how long the timer runs for */
    var initialOffset = '440';
    var i = 0;
    var j = 0;
    var changeColor = 135;
    var interval = setInterval(function() {
        changeColor = 135*i/29;
          $('.circle_animation').css('stroke-dashoffset', initialOffset-(i*(initialOffset/time)))
          if(i==30 || flagclock == false){  
            clearInterval(interval);
          }
          i++;  
    }, 1000);
    var interval_j = setInterval(function () {
        $('h2').text(30-j);
        if(j==31 || flagclock == false){
          clearInterval(interval_j);
          $('h2').text(0);
          blue_to_red();
          $('.item').hide();
        }
        j++;
    },1000);    
}

//Click button to Next Question
$('#btn').click(function(){
    nextQuestion();
    $('.mycontainblue').show();
    $('.title').css('visibility','hidden');
    getAnswer();
    
    flagclock = true;
    clock(); 
    setTimeout(function(){
    $('.item').show();
    },1000);
});

     
    
    



