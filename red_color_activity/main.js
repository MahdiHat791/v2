canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
check_array = []
window.onload = function() {
    var image = document.getElementById("scream");
    ctx.drawImage(image, 0, 0,400,350);
  };

  canvas.addEventListener("touchstart", my_touchstart);

  function my_touchstart(e) 
  {   
      position_of_x = e.touches[0].clientX - canvas.offsetLeft;
      position_of_y = e.touches[0].clientY - canvas.offsetTop;
      console.log(position_of_x);
      console.log(position_of_y);
      if(position_of_x >265 && position_of_x < 290 && position_of_y >168 && position_of_y < 250)
      {
        check_array.push("bottle");
        console.log("bottle");
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "white";
        ctx.rect(265, 168, 20, 90);
        ctx.stroke();
      }

      if(position_of_x >184 && position_of_x < 202 && position_of_y >280 && position_of_y < 329)
      {
        check_array.push("gloves");
        console.log("gloves");
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "white";
        ctx.rect(180, 280, 20, 50);
        ctx.stroke();
      }

      if(position_of_x >90 && position_of_x < 115 && position_of_y >30 && position_of_y < 126)
      {
        check_array.push("handcuchif");
        console.log("handcuchif");
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "white";
        ctx.rect(90, 30, 25, 100);
        ctx.stroke();
      }

      if(position_of_x >360 && position_of_x < 394 && position_of_y >175 && position_of_y < 244)
      {
        check_array.push("milkbox");
        console.log("milkbox");
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "white";
        ctx.rect(360, 175, 34, 70);
        ctx.stroke();
      }

      if(position_of_x >313 && position_of_x < 334 && position_of_y >257 && position_of_y < 277)
      {
        check_array.push("apple");
        console.log("apple");
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "white";
        ctx.rect(313, 257, 20, 20);
        ctx.stroke();
      }

      if(position_of_x >105 && position_of_x < 132 && position_of_y >223 && position_of_y < 253)
      {
        check_array.push("cup");
        console.log("cup");
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "white";
        ctx.rect(105, 223, 30, 30);
        ctx.stroke();
      }

      if(position_of_x >307 && position_of_x < 321 && position_of_y >129 && position_of_y < 156)
      {
        check_array.push("leave");
        console.log("leave");
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "white";
        ctx.rect(305, 125, 20, 30);
        ctx.stroke();
      }

      if(position_of_x >10 && position_of_x < 61 && position_of_y >209 && position_of_y < 270)
      {
        check_array.push("watermelon");
        console.log("watermelon");
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "white";
        ctx.rect(10, 209, 50, 60);
        ctx.stroke();
      }

      if(check_array.includes("watermelon") && check_array.includes("leave") && check_array.includes("cup")
      && check_array.includes("apple") && check_array.includes("milkbox") && check_array.includes("handcuchif")
      && check_array.includes("gloves")&& check_array.includes("bottle"))
    {
        console.log(check_array);
    }
}
