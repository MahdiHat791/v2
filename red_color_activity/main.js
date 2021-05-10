canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
check_array = [];
window.onload = function() {
    var image = document.getElementById("scream");
    ctx.drawImage(image, 0, 0,350,350);
  };

  canvas.addEventListener("touchstart", my_touchstart);

  function my_touchstart(e) 
  {   
      position_of_x = e.touches[0].clientX - canvas.offsetLeft;
      position_of_y = e.touches[0].clientY - canvas.offsetTop;
      console.log(position_of_x);
      console.log(position_of_y);
      if(position_of_x >228 && position_of_x < 290 && position_of_y >168 && position_of_y < 250)
      {
        check_array.push("bottle");
        bottle();
      }

      if(position_of_x >159 && position_of_x < 202 && position_of_y >280 && position_of_y < 329)
      {
        check_array.push("gloves");
        gloves();
      }

      if(position_of_x >73 && position_of_x < 98 && position_of_y >30 && position_of_y < 126)
      {
        check_array.push("handcuchif");
        handcuchif();
      }

      if(position_of_x >315 && position_of_x < 394 && position_of_y >175 && position_of_y < 244)
      {
        check_array.push("milkbox");
        milkbox();
      }

      if(position_of_x >273 && position_of_x < 334 && position_of_y >257 && position_of_y < 277)
      {
        check_array.push("apple");
        apple();
      }

      if(position_of_x >90 && position_of_x < 132 && position_of_y >223 && position_of_y < 253)
      {
        check_array.push("cup");
        cup();
      }

      if(position_of_x >265 && position_of_x < 321 && position_of_y >129 && position_of_y < 156)
      {
        check_array.push("leave");
        leave();
      }

      if(position_of_x >10 && position_of_x < 61 && position_of_y >209 && position_of_y < 270)
      {
        check_array.push("watermelon");
        watermelon(); 
      }

      if(check_array.includes("watermelon") && check_array.includes("leave") && check_array.includes("cup")
      && check_array.includes("apple") && check_array.includes("milkbox") && check_array.includes("handcuchif")
      && check_array.includes("gloves")&& check_array.includes("bottle"))
    {
      $("#modal_btn").click();
      setTimeout(function(){ 
          $("#modal_btn_close").click();
      }, 
      1200);
  
        console.log(check_array);
        speak("Well Done")
        setTimeout(function(){ 
            window.location.replace("clue2/clue2.html"); 
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