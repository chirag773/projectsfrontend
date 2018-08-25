
var colors = generateRandomColor(16);

var body = document.querySelector("body");

var display = document.querySelector("span");

var squares = document.querySelectorAll(".square");



for(var i = 0; i < squares.length; i++){
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click",function(){
    var clickedColor = this.style.background;
    console.log(clickedColor);
      changeColor(clickedColor);
      
  });
}




function changeColor(color){
  for (var i = 0; i < squares.length; i++) {
    body.style.background = color;
    reset.style.background = color;

  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColor(num){
    var arr =[]
    for(var i = 0; i < num ; i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

//reset button

var reset = document.querySelector("#reset");

reset.addEventListener("click",function(){
  console.log("reset");
colors = generateRandomColor(16);

for(var i = 0; i < squares.length; i++){
  squares[i].style.background = colors[i];

}
body.style.background="black";
});

//sound

//var sound1 = document.querySelector("#sound1").play();


function play(){
       var audio = document.getElementById("audio");
       audio.play();
                 }

function play1(){
  var audio1 = document.getElementById("audio1");
  audio1.play();
}

function play2(){
  var audio2 = document.getElementById("audio2");
  audio2.play();
}

function play3(){
  var audio3 = document.getElementById("audio3");
  audio3.play();
}

function play4(){
  var audio4 = document.getElementById("audio4");
  audio4.play();
}

function play5(){
  var audio5 = document.getElementById("audio5");
  audio5.play();
}

function play6(){
  var audio6 = document.getElementById("audio6");
  audio6.play();
}

function play7(){
  var audio7 = document.getElementById("audio7");
  audio7.play();
}

function play8(){
  var audio8 = document.getElementById("audio8");
  audio8.play();
}


function play9(){
  var audio9 = document.getElementById("audio9");
  audio9.play();
}

function play10(){
  var audio10 = document.getElementById("audio10");
  audio10.play();
}

function play11(){
  var audio11 = document.getElementById("audio11");
  audio11.play();
}

function play12(){
  var audio12 = document.getElementById("audio12");
  audio12.play();
}

function play13(){
  var audio13 = document.getElementById("audio13");
  audio13.play();
}

function play14(){
  var audio14 = document.getElementById("audio14");
  audio14.play();
}

function play15(){
  var audio15 = document.getElementById("audio15");
  audio15.play();
}
