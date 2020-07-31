
objects = [];
status = "";

function preload(){
  fingers = createVideo('v2.mp4');
  fingers.hide()
}


function setup() {
  canvas = createCanvas(550, 380);
  canvas.center();
  fingers.loop();
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}


function draw() {
  image(fingers, 0, 0, 550, 380);
}
