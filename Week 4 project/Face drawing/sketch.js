function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255);
  rect(0,0,250,350);
  //eyes
  ellipse(70,50,100,100);
  ellipse(170,50,100,100);
  //pupils
  ellipse(70,50,20,20);
  ellipse(170,50,20,20);
  //mouth
  rect(73,150,100,150,25);
  //teeth
  line(73,225,173,225);
  line(100,150,100,300);
  line(125,150,125,300);
  line(150,150,150,300);
}