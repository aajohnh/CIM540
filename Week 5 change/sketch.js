var bubble0;

var bubbleArray = [];

var currentArea = "";

var d;

var textSizeSlider;

var time;
var wait = 1000;

var tick = false;

var counter = false;


function setup() {
  createCanvas(400, 400);

  bubble0 = new bubble(random(width), random(height), 100);

  for (var i = 0; i < 1; i++) {

    bubbleArray.push(new bubble(random(width), random(height), 100));

  }
  time = millis(); //store the current time
  smooth();
  strokeWeight(3);
}

function draw() {
  background(255);
  rect(0, 0, 100, 100);
  //check the difference between now and the previously stored time is greater than the wait interval
  if (millis() - time >= wait) {
    tick = !tick; //if it is, do something
    time = millis(); //also update the stored time
    
  } else(millis());
  
    line(50, 10, tick ? 10 : 90, 90);

/*  if (counter >= 10 ){
      // number popped
      text();
      
      //reset game
      
    }else{
      
    
    }
   
*/

  //draw a visual cue


  for (var i = 0; i < bubbleArray.length; i++) {
    var curBubbleState = bubbleArray[i].check(mouseX, mouseY);
    bubbleArray[i].display(curBubbleState);
    bubbleArray[i].update(curBubbleState);
    
    if (curBubbleState === true){
      //update
      //countBubbles++;
    }
    
  }

}

function bubble(tempX, tempY, tempSize) {

  this.x = tempX;
  this.y = tempY;
  this.diameter = tempSize;
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);


  this.display = function(showHide) {
    if (showHide === false) {
      fill(this.r, this.g, this.b);
      ellipse(this.x, this.y, this.diameter, this.diameter)
    }
  }

  this.check = function(userX, userY) {
    var curDist = dist(this.x, this.y, userX, userY);
    //console.log(curDist);
    if (curDist < 50) {
      console.log("hit");
      return true;
    } else {
      return false;
    }
    if (true) {

    }
  }

  this.update = function(runUpdate) {

    if (runUpdate === true) {
      this.x = random(width);
      this.y = random(height);
    }
  }





  /*function mousePressed(){
    console.log(currentArea)
    var d = dist(mouseX,mouseY);
    if (d < 100){
      r = random(255);
      r = random(255);
      r = random(255);
    }*/
}