var colors = generateRandomColor(6);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("display");
var resetButton = document.querySelector(".button");
var pickedColor = pickColor();


colorDisplay.textContent = pickedColor;

for(var i = 0 ; i < squares.length ; i++){
    squares[i].style.background = colors[i];

    //on clicked
    
squares[i].addEventListener("click", function(){
    var clickedColor = this.style.background;
    console.log(clickedColor,pickedColor);
    if(clickedColor === pickedColor){
    changeColors(clickedColor);
        
    }
    else {
     this.style.background = "black";
       
     }
    });
}

//if fucntion

var changeColors = function(color){
    for(var i = 0 ; i < squares.length ; i++){
        squares[i].style.background = color;
    }
}

////change of color

function pickColor(){
 var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//to generate random color

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

///reset buttons 
var reset = document.querySelector("#reset");

reset.addEventListener("click",function(){
  console.log("reset");
colors = generateRandomColor(9);
pickedColor = pickColor();
display.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
  squares[i].style.background = colors[i];

}
body.style.background="black";
});