var myAudio = document.getElementById("myAudio");

function start()
{
    speak("Clue one");
}

function next1()
{
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "inline-block";
}

function two01()
{
    correct();
    document.getElementById("two").style.display = "none";
    setTimeout(function(){ 
        document.getElementById("three").style.display = "inline-block";
    }, 
    1200);

}
function two02()
{
    incorrect("#two02");
}

function two03()
{
    incorrect("#two03");
}

function two04()
{
    incorrect("#two04");
}

function next2()
{
    document.getElementById("img1").src = "clue1_img2.png"
    document.getElementById("btn1").style.display = "none";
    setTimeout(function(){ 
        document.getElementById("btn2").style.display = "inline-block";
    }, 
    1500);
}

function next3()
{
    speak("Clue two");
    document.getElementById("three").style.display = "none";
    document.getElementById("four").style.display = "inline-block";
}

function next4()
{
    document.getElementById("four").style.display = "none";
    document.getElementById("five").style.display = "inline-block";
}

function five01()
{
    incorrect("#five01");
}

function five02()
{
    incorrect("#five02");
}

function five03()
{
    incorrect("#five03");
}
function five04()
{
    correct();
    document.getElementById("five").style.display = "none";
    setTimeout(function(){ 
        document.getElementById("six").style.display = "inline-block";
    }, 
    1200);
}

function next5()
{
    document.getElementById("img2").src = "clue2_img2.png"
    document.getElementById("btn3").style.display = "none";
    setTimeout(function(){ 
        document.getElementById("btn4").style.display = "inline-block";
    }, 
    1500);
}

function next6()
{
    speak("Clue three");
    document.getElementById("six").style.display = "none";
    document.getElementById("seven").style.display = "inline-block";
}

function next7()
{
    document.getElementById("seven").style.display = "none";
    document.getElementById("eight").style.display = "inline-block";
}

function eight01()
{
    incorrect("#eight01");
}

function eight02()
{
    correct();
    document.getElementById("eight").style.display = "none";
    setTimeout(function(){ 
        document.getElementById("nine").style.display = "inline-block";
    }, 
    1200);
}

function eight03()
{
    incorrect("#eight03");
}

function eight04()
{
    incorrect("#eight04");
}

function next8()
{
    document.getElementById("img3").src = "clue3_img2.png"
    document.getElementById("btn5").style.display = "none";
    setTimeout(function(){ 
        document.getElementById("btn6").style.display = "inline-block";
    }, 
    1500);
}

function next9()
{
    speak("Clue four");
    document.getElementById("nine").style.display = "none";
    document.getElementById("ten").style.display = "inline-block";
}

function next10()
{
    document.getElementById("ten").style.display = "none";
    document.getElementById("eleven").style.display = "inline-block";
}

function eleven01()
{
    incorrect("#eleven01");
}

function eleven02()
{
    incorrect("#eleven02");
}

function eleven03()
{
    incorrect("#eleven03");
}

function eleven04()
{
    correct();
    document.getElementById("eleven").style.display = "none";
    setTimeout(function(){ 
        document.getElementById("twelve").style.display = "inline-block";
    }, 
    1200);
}

function next11()
{
    document.getElementById("img4").src = "clue4_img2.png"
    document.getElementById("btn7").style.display = "none";
    setTimeout(function(){ 
        document.getElementById("btn8").style.display = "inline-block";
    }, 
    1500);
}

function next12()
{
    document.getElementById("img4").src = "clue4_img3.png"
    document.getElementById("btn8").style.display = "none";
    setTimeout(function(){ 
        document.getElementById("btn9").style.display = "inline-block";
    }, 
    1500);
}

function next13()
{
    speak("culprit arrested");
    document.getElementById("twelve").style.display = "none";
    document.getElementById("thirteen").style.display = "inline-block";
}


function incorrect(btnid)
{
    //alert("Incorrect Answer");
    $(btnid).css("background-color", "red");

    setTimeout(function(){ 
        $(btnid).css("background-color", "#fce5cb");
    }, 
    1000);
   
    myAudio.play();
}

function correct()
{
    $("#modal_btn").click();
    setTimeout(function(){ 
        $("#modal_btn_close").click();
    }, 
    1000);
    
    //alert("Correct Answer");
}

function speak(speak_data){
    var synth = window.speechSynthesis;

    speak_data = speak_data;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
}
