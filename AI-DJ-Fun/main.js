song = "";

function preload()
{
	song = loadSound("music.mp3");
}

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	scoreRightWrist =  results[0].pose.keypoints[10].score;
	scoreLeftWrist =  results[0].pose.keypoints[9].score;
	console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);
	
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
		
  }
}

function draw() {
	image(video, 0, 0, 600, 500);

	fill("#FF0000");
	stroke("#FF0000");

	if(scoreRightWrist > 0.2)
	{ 
		circle(rightWristX,rightWristY,20);

		if(rightWristY >0 && rightWristY <= 100)
		{
			document.getElementById("speed").innerHTML = "Speed = 2.5x";		
			song.rate(2.5);
		}
		else if(rightWristY >100 && rightWristY <= 200)
		{
			document.getElementById("speed").innerHTML = "Speed = 2x";		
			song.rate(2);
		}
		else if(rightWristY >200 && rightWristY <= 300)
		{
			document.getElementById("speed").innerHTML = "Speed = 1.5x";		
			song.rate(1.5);
		}
		else if(rightWristY >300 && rightWristY <= 400)
		{
			document.getElementById("speed").innerHTML = "Speed = 1x";		
			song.rate(1);
		}
		else if(rightWristY >400)
		{
			document.getElementById("speed").innerHTML = "Speed = 0.5x";		
			song.rate(0.5);
		}
	}

	if(scoreLeftWrist > 0.2)
	{
		circle(leftWristX,leftWristY,20);

		if(leftWristY >0 && leftWristY <= 100)
		{
			document.getElementById("volume").innerHTML = "Volume = 1";	
			song.setVolume(1);	
		}
		else if(leftWristY >100 && leftWristY <= 200)
		{
			document.getElementById("volume").innerHTML = "Volume = 0.8";		
			song.setVolume(0.8);
		}
		else if(leftWristY >200 && leftWristY <= 300)
		{
			document.getElementById("volume").innerHTML = "Volume = 0.6";		
			song.setVolume(0.6);
		}
		else if(leftWristY >300 && leftWristY <= 400)
		{
			document.getElementById("volume").innerHTML = "Volume = 0.4";		
			song.setVolume(0.4);
		}
		else if(leftWristY >400)
		{
			document.getElementById("volume").innerHTML = "Volume = 0.2";		
			song.setVolume(0.2);
		}

		/*
		InNumberleftWristY = Number(leftWristY);
		new_leftWristY = floor(InNumberleftWristY);
		leftWristY_divide_1000 = new_leftWristY/500;
		document.getElementById("volume").innerHTML = "Volume = " + leftWristY_divide_1000;		
		song.setVolume(leftWristY_divide_1000);	
		*/
	}

}

function play()
{
	song.play();
	song.setVolume(1);
	song.rate(1);
}
