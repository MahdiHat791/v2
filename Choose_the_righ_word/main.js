function start()
{
    speak("Choose the right words to create a question with What. Click on the dashes to get the options");
}

id_selected = "";

$("#q1_w2").click(function(){
    $("#modal_btn").click();
    id_selected = "#q1_w2";
});

$("#q1_w3").click(function(){
    $("#modal_btn").click();
    id_selected = "#q1_w3";
});

$("#q1_w4").click(function(){
    $("#modal_btn").click();
    id_selected = "#q1_w4";
});


function done()
{
    radio_btn_value = $('input[name="a1_o"]:checked').val();
    $("#modal_btn_close").click();
    $(id_selected).text(radio_btn_value);
    finalDone();
}

function finalDone()
{
    count = 0;

    q1_w2 = $("#q1_w2").text();
    q1_w3 = $("#q1_w3").text();
    q1_w4 = $("#q1_w4").text();
    console.log(q1_w2);
    if(q1_w2 != "is")
    {
        count = count +1;
        if(q1_w2 !="____")
        {
            $("#q1_w2").css('background-color','#f19c91');
        }
    }
    else
    {
        $("#q1_w2").css('background-color','#b6f386');
    }

    if(q1_w3 != "your")
    {
        count = count +1;
        if(q1_w3 !="____")
        {
            $("#q1_w3").css('background-color','#f19c91');
        }
    }
    else
    {
        $("#q1_w3").css('background-color','#b6f386');
    }

    if(q1_w4 != "code name?")
    {
        count = count +1;
        if(q1_w4 !="_________")
        {
            $("#q1_w4").css('background-color','#f19c91');
        }
    }
    else
    {
        $("#q1_w4").css('background-color','#b6f386');
    }

    if(count == 0)
    {
        $("#error").css("display","none");
        speak("Well Done")
        setTimeout(function(){ 
            window.location.replace("question2/question2.html"); 
        }, 
        2000);

    }
}


function speak(speak_data){
    var synth = window.speechSynthesis;
    speak_data = speak_data;

    var utterThis = new SpeechSynthesisUtterance(speak_data);
    utterThis.rate = 0.9;

    synth.speak(utterThis);
}
