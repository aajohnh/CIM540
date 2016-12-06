var topBoundary = 0;
var bottomBoundary = 0;

var boundary0 = 0;
var boundary1 = 0;
var boundary2 = 0;
var boundary3 = 0;
var boundary4 = 0;
var boundary5 = 0;
var boundary6 = 0;


var r,g,b;

var buttonSize = 100;

var brushSize = 10;

var brushColor = ("white")

var currentArea = "";

var d;


function setup() {
  createCanvas(600,500);
  noStroke();
  
  topBoundary = 400;
  bottomBoundary = height;
  
  boundary0 = 0;
  boundary1 = 100;
  boundary2 = 200;
  boundary3 = 300;
  boundary4 = 400;
  boundary5 = 500;
  boundary6 = width;
  
  r = random(255);
  g = random(255);
  b = random(255);
}


function draw(){  
  
  
  fill("green");
  rect(boundary0,topBoundary,buttonSize,buttonSize);
  fill("red");
  rect(boundary1,topBoundary,buttonSize,buttonSize);
  fill("blue");
  rect(boundary2,topBoundary,buttonSize,buttonSize);
  fill("yellow");
  rect(boundary3,topBoundary,buttonSize,buttonSize);
  fill("orange");
  rect(boundary4,topBoundary,buttonSize,buttonSize);
  fill("purple");
  rect(boundary5,topBoundary,buttonSize,buttonSize);

  if(mouseY > topBoundary && mouseY < bottomBoundary){
    console.log("color picker area");
    if(mouseX > boundary0 && mouseX < boundary1){
      //console.log("green");
      currentArea = ("green");
    }else if(mouseX > boundary1 && mouseX < boundary2){
      //console.log("red");
      currentArea = ("red");
    }else if(mouseX > boundary2 && mouseX < boundary3){
      //console.log("blue");
      currentArea = ("blue");
    }else if(mouseX > boundary3 && mouseX < boundary4){
      //console.log("yellow");
      currentArea = ("yellow");
    }else if(mouseX > boundary4 && mouseX < boundary5){
      //console.log("orange");
      currentArea = ("orange");
    }else if(mouseX > boundary5 && mouseX < boundary6){
      //console.log("purple");
      currentArea = ("purple");
    }else if(mouseX, mouseY, 525, 75){
      console.log("color circle");
      currentArea = ("randomColor");
    }
 }else{
  currentArea = "";
 
 
 
     // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(525, 75, 100, 100);
  noStroke(255);
  
  fill(brushColor);
  ellipse(mouseX,mouseY, brushSize, brushSize);
 }
}

function mousePressed(){
  console.log(currentArea);
  
     // Check if mouse is inside the circle
  d = dist(mouseX, mouseY, 525, 75);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
  
  if (currentArea == "green") {
    brushColor = "green";
  }else if (currentArea == "red"){
    brushColor = "red";
  }else if (currentArea == "blue"){
    brushColor = "blue";
  }else if (currentArea == "yellow"){
    brushColor = "yellow";
  }else if (currentArea == "orange"){
    brushSize++;
  }else if (currentArea == "purple"){
    brushSize--;
    if(brushSize <= 1){
      brushSize = 1;
  }
  }else if (currentArea == "d"){
    brushColor = "randomColor";
    
  }
  else{
    brushColor = "white";
  }

}