
//generate the target number for the game

var targetLoc = $("#targetNum");
var scoreBox = $('#scoreBox')
var targetNum = 0;
var crystalsArr = ["#sapphire","#ruby","#emerald","#amethyst"];

function setTarget(){

  //make sure target is at least generate number between 19 & 120
  targetNum = Math.floor(Math.random() * 101) + 19;
  targetLoc.text(targetNum);
}

setTarget();

//generate crystal numbers

//var crystalsVal = $(".crystals");

function assignVal(cryID){

  var crystalsVal = $(cryID);
  var num = Math.floor(Math.random() * 11) + 1;
  crystalsVal.attr("val",num);

}

//assign value to each crystal
//maybe throw numbers into an array to condense this

for(var i = 0; i < crystalsArr.length; i++){
  assignVal(crystalsArr[i]);
}

var playerScore = 0; 
var wins = 0;
var losses = 0;

//restart game 
// call settarget again
// also call assignVal again
// add win or loss score 

function restartGame(){
  setTarget();

  for(var i = 0; i < crystalsArr.length; i++){
    assignVal(crystalsArr[i]);
  }

  playerScore = 0;
  scoreBox.text(playerScore);
}

var addCrystals = $('.crystals').on('click',function(){

  // if statement 
  // if your added crystal values goes over the targetvalue then you lose
  // else you can keep playing

 // add player scores
 var crystalVal = this.getAttribute('val');

 playerScore += parseInt(crystalVal);

 scoreBox.text(playerScore);

  if (playerScore > targetNum){
    setTimeout(function(){alert("You lose!")},350);
    losses++;
    $('#losses').text(losses);
    setTimeout(restartGame,700);
  }
  else if (playerScore === targetNum){
    setTimeout(function(){alert("You win!")},350);
    wins++;
    $('#wins').text(wins);
    setTimeout(restartGame,700);
  }

});









