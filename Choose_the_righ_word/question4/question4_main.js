function start()
{
    speak("Choose the right words to create a question with When.");
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

$("#q1_w5").click(function(){
    $("#modal_btn").click();
    id_selected = "#q1_w5";
});

$("#q1_w6").click(function(){
    $("#modal_btn").click();
    id_selected = "#q1_w6";
});

$("#q1_w7").click(function(){
    $("#modal_btn").click();
    id_selected = "#q1_w7";
});

$("#q1_w8").click(function(){
    $("#modal_btn").click();
    id_selected = "#q1_w8";
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
    q1_w5 = $("#q1_w5").text();
    q1_w6 = $("#q1_w6").text();
    q1_w7 = $("#q1_w7").text();
    q1_w8 = $("#q1_w8").text();

    if(q1_w2 != "do")
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

    if(q1_w3 != "you")
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

    if(q1_w4 != "want")
    {
        count = count +1;
        if(q1_w4 !="____")
        {
            $("#q1_w4").css('background-color','#f19c91');
        }
    }
    else
    {
        $("#q1_w4").css('background-color','#b6f386');
    }

    if(q1_w5 != "to")
    {
        count = count +1;
        if(q1_w5 !="____")
        {
            $("#q1_w5").css('background-color','#f19c91');
        }
    }
    else
    {
        $("#q1_w5").css('background-color','#b6f386');
    }

    if(q1_w6 != "start")
    {
        count = count +1;
        if(q1_w6 !="____")
        {
            $("#q1_w6").css('background-color','#f19c91');
        }
    }
    else
    {
        $("#q1_w6").css('background-color','#b6f386');
    }

    if(q1_w7 != "your")
    {
        count = count +1;
        if(q1_w7 !="____")
        {
            $("#q1_w7").css('background-color','#f19c91');
        }
    }
    else
    {
        $("#q1_w7").css('background-color','#b6f386');
    }

    if(q1_w8 != "next case?")
    {
        count = count +1;
        if(q1_w8 !="____")
        {
            $("#q1_w8").css('background-color','#f19c91');
        }
    }
    else
    {
        $("#q1_w8").css('background-color','#b6f386');
    }

    if(count == 0)
    {
        $("#error").css("display","none");
        speak("Fantastic")
        setTimeout(function(){ 
            window.location.replace("../question5/question5.html"); 
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
