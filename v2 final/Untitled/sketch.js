var drums;
var vox;
var guitars;
var bass;
var startbutton;
var reverbsliderD;
var delaysliderD;
var reverbsliderV;
var delaysliderV;
var reverbsliderG;
var delaysliderG;
var reverbsliderB;
var delaysliderB;
var mastersliderD;
var mastersliderV;
var mastersliderG;
var mastersliderB;
var github;
var sound;
//var env;
var delay;

var tracks = ["Towhoever Drums.mp3", "Towhoever Vox.mp3", "Towhoever Guitars.mp3", "Towhoever Bass.mp3"];
var level = [0, 1, 2, 3];
var reverb;

//var startVoxbutton;

var amp;

function preload() {
  drums = loadSound(tracks[0]);
  vox = loadSound(tracks[1]);
  guitars = loadSound(tracks[2]);
  bass = loadSound(tracks[3]);
}

function setup() {
  createCanvas(650, 700);

  reverb = new p5.Reverb();

  // sound = new p5.Noise('brown');
  // sound.amp(0);
  // sound.start();

  // delay = new p5.Delay();


  amp = new p5.Amplitude();
  background(51);
  startbutton = createButton("play");
  startbutton.position(310, 520);
  startbutton.mousePressed(loaded);


  // drums.play();
  //   vox.play();
  //   guitars.play();
  //   bass.play();

  //drums
  reverbsliderD = createSlider(0, 3, 0, 1);
  reverbsliderD.position(30, 250);
  // delaysliderD = createSlider(0, 3, 0, 1);
  // delaysliderD.position(30, 350);
  mastersliderD = createSlider(0, 100, 100, 1);
  mastersliderD.position(30, 450);

  //vox
  reverbsliderV = createSlider(0, 3, 0, 1);
  reverbsliderV.position(180, 250);
  // delaysliderV = createSlider(0, 3, 0, 1);
  // delaysliderV.position(180, 350);
  mastersliderV = createSlider(0, 100, 100, 1);
  mastersliderV.position(180, 450);

  //guitars
  reverbsliderG = createSlider(0, 3, 0, 1);
  reverbsliderG.position(330, 250);
  // delaysliderG = createSlider(0, 3, 0, 1);
  // delaysliderG.position(330, 350);
  mastersliderG = createSlider(0, 100, 100, 1);
  mastersliderG.position(330, 450);

  //bass
  reverbsliderB = createSlider(0, 3, 0, 1);
  reverbsliderB.position(480, 250);
  // delaysliderB = createSlider(0, 3, 0, 1);
  // delaysliderB.position(480, 350);
  mastersliderB = createSlider(0, 100, 100, 1);
  mastersliderB.position(480, 450);


  //reverbslider.keyPressed();


}

function loaded() {
  drums.play();
  vox.play();
  guitars.play();
  bass.play();
  //startbutton = createButton("play");

  //startVoxbutton = createButton("play");
  //startVoxbutton.mousePressed(toggleVox);

  //toggleDrums();


}

function draw() {
  background(170);



  var volDrum = amp.getLevel();
  var volVox = amp.getLevel();
  var volGuitars = amp.getLevel();
  var volBass = amp.getLevel();
  var diamDrum = map(volDrum, 0, .17, 25, 75);
  var diamVox = map(volVox, 0, .25, 25, 75);
  var diamGuitars = map(volGuitars, 0, 0.15, 25, 75);
  var diamBass = map(volBass, 0, 0.35, 25, 75);

  fill(0, 255, 255);
  rect(50, 170, 100, -diamDrum);
  fill(255, 0, 255);
  rect(200, 170, 100, -diamVox);
  fill(255, 255, 0);
  rect(350, 170, 100, -diamGuitars);
  fill(0, 255, 0);
  rect(500, 170, 100, -diamBass);
  fill("black");
  text("DRUMS", 80, 200);
  text("VOX", 238, 200);
  text("GUITARS", 375, 200);
  text("BASS", 537, 200);
  text("Reverb:", 20, 230);
  text("Master Volume:", 20, 430);


  // //reverb sliders
  // var valDR = reverbsliderD.value();
  // reverb.process(drums, 0, 0);
  // console.log(valDR);
  var valVR = reverbsliderV.value();
  reverb.process(vox, 0, 0);
  reverb.disconnect();
  // var valGR = reverbsliderG.value();
  //reverb.process(guitars, 0, 0);
  // var valBR = reverbsliderB.value();
  // reverb.process(bass, 0, 0);

  // //delay sliders
  // var valDD = delaysliderD.value();
  // delay.process(drums, valDR, 2);
  // var valVD = delaysliderV.value();
  // delay.process(vox, valVR, .1);
  // var valGD = delaysliderG.value();
  // delay.process(guitars, valGR, 2);
  // var valBD = delaysliderB.value();
  // delay.process(bass, valBR, 2);

  

}
/*function keyPressed() {
  if (keyCode == UP_ARROW ) {
    level++;
    console.log(level);
  }
}
*/
function toggleDrums() {
  if (!drums.isPlaying()) {
    drums.play();
    vox.play();
    guitars.play();
    bass.play();
    drums.setVolume(0.5);
    startbutton.html("pause");
  } else {
    drums.pause();
    startbutton.html("play");
  }
}

function toggleVox() {
  if (!drums.isPlaying()) {
    // vox.play();
    vox.setVolume(0.3);
    //startVoxbutton.html("pause");
  } else {
    // vox.pause();
    //startVoxbutton.html("play");
  }
}

function toggleGuitars() {
  if (!drums.isPlaying()) {
    //guitars.play();
    guitars.setVolume(0.3);
  } else {
    //guitars.pause();
  }
}

function toggleBass() {
  if (!drums.isPlaying()) {
    //bass.play();
    bass.setVolume(0.3);
  } else {
    //bass.pause();
  }
}