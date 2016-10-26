function setup() {
  
}

function draw() {
  
}

function mousePressed(){
  var currentRoll = diceRoll(6);
  

  if(currentRoll == 3){
    console.log("you are the champion");
  }else{
    console.log("another one bites the dust");
  }  
  }
  //console.log(diceRoll(1));
  //console.log(diceRoll(2));
  //console.log(diceRoll(3));
  


function diceRoll(diceSize){
  var curRoll = int(random(1,diceSize +1));
  return curRoll
}