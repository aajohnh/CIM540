// The midi notes of a scale
var notes = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72];
var sustain = false;
var index = 0;

var trigger = 0;

var osc, fft;

var mouseWasPressed = false;

function setup() {
  createCanvas(1300, 400);
  osc = new p5.TriOsc(); 
  fft = new p5.FFT();
  osc.start();
  osc.amp(.5);
}

// A function to play a note
function playNote(note, duration) {
  osc.freq(midiToFreq(note));
  // Fade it in
  osc.fade(0.5, 0.2);

  // If we sest a duration, fade it out
  if (duration) {
    setTimeout(function() {
      osc.fade(0, 0.2);
    },duration - 50);
  }
}



function draw() {


  // Draw a keyboard

  // The width for each key
  var w = width / notes.length;
  for (var i = 0; i < notes.length; i++) {
    var x = i * w;
    // If the mouse is over the key
    if (mouseX > x && mouseX < x + w && mouseY < height) {
      // If we're clicking
      if (mouseIsPressed) {
        //fill(100, 100, 200);
        mouseWasPressed = true;
        
        // Or just rolling over
      } else {
        //fill(50);

      }
    } else {
    textSize(32);
    //textStyle("font-family:monospace; background-color:#FF0000; color:#FFFFFF; font-size:18pt; padding:10px;");
    text("C", 40, 300);
    text("C#", 130, 300);
    text("D", 240, 300);
    text("D#", 330, 300);
    text("E", 440, 300);
    text("F", 540, 300);
    text("F#", 630, 300);
    text("G", 740, 300);
    text("G#", 830, 300);
    text("A", 940, 300);
    text("A#", 1030, 300);
    text("B", 1140, 300);
    text("C", 1240, 300);
    //fill(255);

    }

    

    // Draw the key
    rect(x, 0, w - 1, height - 1);
    
  }


  if (sustain === true) {
    if (mouseWasPressed === true) {
     var key = floor(map(mouseX, 0, width, 0, notes.length));
     playNote(notes[key]);
    }
  } else {
    if (sustain === false)
      if(mouseWasPressed === false) {
        var key = floor(map(mouseX, 0, width, 0, notes.length));
        playNote(notes[key]);
          }
     // osc.fade(0, 0.5);
    
  }
  
 
  //Sustain function
  if (keyCode === SHIFT) {
    console.log("sustain")
    sustain = true;
  } else if (keyCode === OPTION) {
    sustain = false;
    console.log("nada")
  }
  
    

}

// When we click
function mousePressed() {
  // Map mouse to the key index
  var key = floor(map(mouseX, 0, width, 0, notes.length));
  playNote(notes[key]);
}

// Fade it out when we release
function mouseReleased() {
  osc.fade(0, 0.5);
}