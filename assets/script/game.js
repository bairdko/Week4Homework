
//generate the target number for the game

var targetNum = $("#targetNum");

function setTarget(){

  //make sure target is at least 10
  var num = Math.floor(Math.random() * 40) + 10;
  targetNum.text(num);
}

setTarget();

//generate crystal numbers

//var crystalsVal = $(".crystals");

function assignVal(cryID){

  var crystalsVal = $(cryID);
  var num = Math.floor(Math.random() * 9) + 1;
  crystalsVal.attr("val",num);

}

//assign value to each crystal
//maybe throw numbers into an array to condense this
assignVal("#sapphire");
assignVal("#ruby");
assignVal("#emerald");
assignVal("#diamond");

//make a function that takes the values of clicked crystals and adds them
// num =  crystal.attr("val") this just pulls the value
// += that is to concatenate 

//if statement 
// if your added crystal values goes over the targetvalue then you lose
// else you can keep playing
// call your adding function within the else bit

if (num > targetNum){
  //you lose restart game
}
else if (num === targetNum){
  //you win restart game
}
else{
  //keep playing
  //adding function
}

//restart game 
// call settarget again
// also call assignVal again
// add win or loss score 