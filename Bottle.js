Status = "";
Bottle_image = "";

function preload(){
    Bottle_image = loadImage("Bottle.jpeg");
}
    
    function setup(){
    canvas = createCanvas (500,400);
    canvas.position(480,200);
    object_detector = ml5.objectDetector('cocossd',modellLoaded);
    document.getElementById("status3").innerHTML ="Status : Detecting Objects";
    }
    
    function modellLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_detector.Detect(Bottle_image,gotResults);
    }
    
    function gotResults(results,error){
    if(error){
    console.error(error);
    }
    console.log(results);
}

function draw() {
image(Bottle_image,0,0,500,400);
}