//https://teachablemachine.withgoogle.com/models/x4rtHCBa7/
Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:'100'
});
camera=document.getElementById("camera");

Webcam.attach('[#camera');
function takesnapshot(){
    Webcam.snap(function(data_uri){
   document.getElementById("result").innerHTML='<img id="capture_image", src="'+data_uri+'">';
    });
}
console.log('ml5.version:',ml5.version);
Classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/x4rtHCBa7/',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded!');
}
function speak(){
    synth=window.speechSynthesis;
    speak_data_1="1 prediction is"+result_sign_meaning;
    speak_data_2="and 2 prediction is"+result_sign_meaning2;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}