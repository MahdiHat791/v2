v_milkbox = "";
v_cup = "";
v_leave = "";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

window.onload = function() {
    image = document.getElementById("scream");
    ctx.drawImage(image, 0, 0,350,350);

    bottle();
    gloves();
    handcuchif();
    milkbox();
    cup();
    leave();
  };

  
  canvas.addEventListener("touchstart", my_touchstart);

  function my_touchstart(e) 
  {   
      position_of_x = e.touches[0].clientX - canvas.offsetLeft;
      position_of_y = e.touches[0].clientY - canvas.offsetTop;
      console.log(position_of_x);
      console.log(position_of_y);     
      
      if(position_of_x >315 && position_of_x < 394 && position_of_y >175 && position_of_y < 244)
      {
        ctx.drawImage(image, 0, 0,350,350);
        v_milkbox = "set";
        bottle();
        gloves();
        handcuchif();

        if(v_cup =="")
        {
          cup();
        }
        if(v_leave =="")
        {
          leave();    
        }
      }

      if(position_of_x >90 && position_of_x < 132 && position_of_y >223 && position_of_y < 253)
      {
        ctx.drawImage(image, 0, 0,350,350);
        v_cup = "set";
        bottle();
        gloves();
        handcuchif();
        if(v_milkbox =="")
        {
          milkbox();
        }
        if(v_leave =="")
        {
          leave();    
        }
    
      }

      if(position_of_x >265 && position_of_x < 321 && position_of_y >129 && position_of_y < 156)
      {
        ctx.drawImage(image, 0, 0,350,350);
        v_leave = "set"; 
        bottle();
        gloves();
        handcuchif();
        if(v_milkbox =="")
        {
          milkbox();
        }
        if(v_cup =="")
        {
          cup();
        }
    
      }
      if(v_milkbox != "" && v_cup != "" && v_leave != "")
      {
        $("#modal_btn").click();
        setTimeout(function(){ 
            $("#modal_btn_close").click();
        }, 
        1200);

        speak("Well Done");
        setTimeout(function(){ 
            window.location.replace("../clue4/clue4.html"); 
        }, 
        1600);
      }

}

function speak(speak_data){
  var synth = window.speechSynthesis;
  speak_data = speak_data;

  var utterThis = new SpeechSynthesisUtterance(speak_data);
  utterThis.rate = 0.9;

  synth.speak(utterThis);
}

function bottle()
{
  console.log("bottle");
  ctx.beginPath();
  ctx.lineWidth = "3";
  ctx.strokeStyle = "white";
  ctx.rect(228, 168, 25, 90);
  ctx.stroke();
}

function gloves()
{
  console.log("gloves");
  ctx.beginPath();
  ctx.lineWidth = "3";
  ctx.strokeStyle = "white";
  ctx.rect(159, 280, 20, 50);
  ctx.stroke();
}

function handcuchif()
{
  console.log("handcuchif");
  ctx.beginPath();
  ctx.lineWidth = "3";
  ctx.strokeStyle = "white";
  ctx.rect(73, 30, 30, 100);
  ctx.stroke();
}

function milkbox()
{
  console.log("milkbox");
  ctx.beginPath();
  ctx.lineWidth = "3";
  ctx.strokeStyle = "white";
  ctx.rect(315, 175, 34, 70);
  ctx.stroke();  
}

function apple()
{
  console.log("apple");
  ctx.beginPath();
  ctx.lineWidth = "3";
  ctx.strokeStyle = "white";
  ctx.rect(273, 257, 20, 20);
  ctx.stroke();
}

function cup()
{
  console.log("cup");
  ctx.beginPath();
  ctx.lineWidth = "3";
  ctx.strokeStyle = "white";
  ctx.rect(90, 223, 30, 30);
  ctx.stroke();
}

function leave()
{
  console.log("leave");
  ctx.beginPath();
  ctx.lineWidth = "3";
  ctx.strokeStyle = "white";
  ctx.rect(265, 125, 20, 30);
  ctx.stroke();
}

function watermelon()
{
  console.log("watermelon");
  ctx.beginPath();
  ctx.lineWidth = "3";
  ctx.strokeStyle = "white";
  ctx.rect(10, 209, 50, 60);
  ctx.stroke();

}