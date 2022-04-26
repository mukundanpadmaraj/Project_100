var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
    recognition.onresult=function(event){
        console.log(event)
        var content=event.results[0][0].transcript
        document.getElementById("told_text").innerHTML=content
        if(content=="selfie"){
            speak();
            console.log("taking selfie")
        }
        Webcam.attach(camera)
    }
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'png',
    jpeg_quality:100
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function(){
        img_id="selfie1";
        take_snapshot();
        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },5000)

    setTimeout(function(){
        img_id="selfie2";
        take_snapshot();
        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },5000)

    setTimeout(function(){
        img_id="selfie3";
        take_snapshot();
        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },5000)


}
function take_snapshot(){
    console.log(img_id);
    Webcam.snap(function(dat_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML="<img id='selfie1' src="+dat_uri+">"
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML="<img id='selfie2' src="+dat_uri+">"
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML="<img id='selfie3' src="+dat_uri+">"
        }
    })
}
