function toggleDrums() {
  if(!drums.isPlaying()) {
    drums.play();
    drums.setVolume(0.5);
    startbutton.html("pause");
  } else {
    drums.pause();
    startbutton.html("play");
  }
}
function toggleVox() {  
  if(!vox.isPlaying()) {
    vox.play();
    vox.setVolume(0.1);
    //startVoxbutton.html("pause");
  } else {
    vox.pause();
    //startVoxbutton.html("play");
  }
}
function toggleGuitars() {  
  if(!guitars.isPlaying()) {
    guitars.play();
    guitars.setVolume(0.2);
  } else {
    guitars.pause();
  }
}
function toggleBass() {  
  if(!bass.isPlaying()) {
    bass.play();
    bass.setVolume(0.3);
  } else {
    bass.pause();
  }
}