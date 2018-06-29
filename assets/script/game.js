
//generate the target number for the game

var targetLoc = $("#targetNum");
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

  assignVal("#sapphire");
  assignVal("#ruby");
  assignVal("#emerald");
  assignVal("#amethyst");

  playerScore = 0;
}

var addCrystals = $('.crystals').on('click',function(){

  // if statement 
  // if your added crystal values goes over the targetvalue then you lose
  // else you can keep playing

 // add player scores
 var crystalVal = this.getAttribute('val');

 playerScore += parseInt(crystalVal);

 $('#scoreBox').text(playerScore);

  if (playerScore > targetNum){
    alert("You lose!");
    losses++;
    $('#losses').text(losses);
    setTimeout(restartGame,500);
  }
  else if (playerScore === targetNum){
    alert("You win!");
    wins++;
    $('#wins').text(wins);
    setTimeout(restartGame,500);
  }

});









