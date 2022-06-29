objects= [];
status= "";



function preload() {
    video=createVideo("video.mp4");
}


function setup() {
 canvas=createCanvas(710,410);
 canvas.center();
 
}
function start() {
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "detectingObjects";
}

function modelLoaded() {
    console.log("modelLoaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);

 
}
function draw() {
    image(video,0,0,710,410);
    if(status!="") {
        objectDetector.detect(video, gotResults);

    }
}

function gotResults(error,results) {
    if(error){
        console.log(error);  
    }
    console.log(results);
}

