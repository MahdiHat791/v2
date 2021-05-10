v_bottle = "";
v_gloves = "";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

window.onload = function() {
    image = document.getElementById("scream");
    ctx.drawImage(image, 0, 0,350,350);

    bottle();
    gloves();
    handcuchif();
  };

  
  canvas.addEventListener("touchstart", my_touchstart);

  function my_touchstart(e) 
  {   
      position_of_x = e.touches[0].clientX - canvas.offsetLeft;
      position_of_y = e.touches[0].clientY - canvas.offsetTop;
      console.log(position_of_x);
      console.log(position_of_y);     
      
      if(position_of_x >159 && position_of_x < 202 && position_of_y >280 && position_of_y < 329)
      {
        ctx.drawImage(image, 0, 0,350,350);
        v_gloves = "set";
        handcuchif();

        if(v_bottle =="")
        {
           bottle();
        }
      }

      if(position_of_x >228 && position_of_x < 290 && position_of_y >168 && position_of_y < 250)
      {
        ctx.drawImage(image, 0, 0,350,350);
        v_bottle = "set";
        handcuchif();
        if(v_gloves =="")
        {
          gloves();
        }
      }

      if(v_bottle != "" && v_gloves != "" )
      {
        $("#modal_btn").click();
        setTimeout(function(){ 
            $("#modal_btn_close").click();
        }, 
        1200);

        speak("Well Done");
        setTimeout(function(){ 
            window.location.replace("../completed.html"); 
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