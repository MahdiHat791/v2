objects = [];
status = "";



function setup() {
	background("red");
  canvas = createCanvas(550, 380);
  canvas.center();
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}


function draw() {
  image(fingers, 0, 0, 550, 380);
}