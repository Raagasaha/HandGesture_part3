
Webcam.set({
    width:350,
    height: 300,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function (data_uri){
     document.getElementById("result").innerHTML ='<img id="captured_image" src="'+data_uri+'"/>'  ; 
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DSxesO0qD/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is -  " + prediction_1;
    speak_data_2 = "The second prediction is -   " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}   
function check() {
    img= document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
        }
    else {
            console.log(results);
            document.getElementById("result_emotion_name").innerHTML = results[0].label;
            document.getElementById("result_emotion_name2").innerHTML = results[1].label;

            prediction_1 = results[0].label;
            prediction_2 = results[1].label;

            speak();
            if(results[0].label == "Thumbs Up")
            {
                document.getElementById("update_emoji").innerHTML = "&#128077;";
                document.getElementById("meaning_of_gesture").innerHTML = "Thumbs up is referred to good, or finished.";
            }
            if(results[0].label == "OK")
            {
                document.getElementById("update_emoji").innerHTML = "&#128076;";
                document.getElementById("meaning_of_gesture").innerHTML = "The OK sign is referred to as it states, okay, or something is well done.";
            }
            if(results[0].label == "Rock & Roll")
            {
                document.getElementById("update_emoji").innerHTML = "&#129304;";
                document.getElementById("meaning_of_gesture").innerHTML = "The rock & roll sign is referred to a symbol used it rock music, or it can be used to show that something is cool.";
            }
            if(results[0].label == "Peace")
            {
                document.getElementById("update_emoji").innerHTML = "&#9996;";
                document.getElementById("meaning_of_gesture").innerHTML = "The peace sign is used to show peace & equality, or it can be used to show victory for something.";
            }


            if(results[1].label == "Thumbs Up")
            {
                document.getElementById("update_emoji2").innerHTML = "&#128077;";
                document.getElementById("meaning_of_gesture2").innerHTML = "Thumbs up is referred to good, or finished.";
            }
            if(results[1].label == "OK")
            {
                document.getElementById("update_emoji2").innerHTML = "&#128076;";
                document.getElementById("meaning_of_gesture2").innerHTML = "The OK sign is referred to as it states, okay, or something is well done.";
            }
            if(results[1].label == "Rock & Roll")
            {
                document.getElementById("update_emoji2").innerHTML = "&#129304;";
                document.getElementById("meaning_of_gesture2").innerHTML = "The rock & roll sign is referred to a symbol used it rock music, or it can be used to show that something is cool.";
            }
            if(results[1].label == "Peace")
            {
                document.getElementById("update_emoji2").innerHTML = "&#9996;";
                document.getElementById("meaning_of_gesture2").innerHTML = "The peace sign is used to show peace & equality, or it can be used to show victory for something.";
            }

            
        }
}



