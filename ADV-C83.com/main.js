var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var width = screen.width;

new_width =  screen.width - 70; 
new_height = screen.height - 300;
	if(width < 992)
	{
	document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
	}
	canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) 
{
	console.log("my_touchstart");
  //Additional Activity
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;
  //End Additional Activity
         
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) 
{

	console.log("my_touchMove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    // old same old as the paint web app
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
    
    // end of old same old as the paint web app
}

    // old same old as the paint web app
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    // end of old same old as the paint web app
