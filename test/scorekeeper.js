var p1Button = document.querySelector("#play1");
var p2Button = document.querySelector("#play2");
var h1 = document.querySelector("#first");
var h1p2 = document.querySelector("#second");
var reset = document.querySelector("#reset");
var input = document.querySelector("input");
var p = document.querySelector("#third");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winScore = 0;
p1Button.addEventListener("click", function(){
  if(!gameOver){
    p1Score++;
    h1.textContent = p1Score;
  }
  if(p1Score == winScore){
    gameOver = true;
  }
  
});
p2Button.addEventListener("click", function(){
   if(!gameOver){
    p2Score++;
    h1p2.textContent = p2Score;
  }
  if(p2Score == winScore){
    gameOver = true;
  }
});
reset.addEventListener("click", function(){
  p1Score = 0;
  p2Score = 0;
  h1.textContent = p1Score;
  h1p2.textContent = p2Score;
  gameOver = false;
});
input.addEventListener("change", function(){
	p.textContent = input.value;
  winScore = input.value;
});
