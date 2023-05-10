Status = "";
Tv_image = "";

function preload(){
    Tv_image = loadImage("Tv.jpeg");
}
    
    function setup(){
    canvas = createCanvas (500,400);
    canvas.position(480,200);
    object_detector = ml5.objectDetector('cocossd',modellLoaded);
    document.getElementById("status6").innerHTML ="Status : Detecting Objects";
    }
    
    function modellLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_detector.Detect(Tv_image,gotResults);
    }
    
    function gotResults(results,error){
    if(error){
    console.error(error);
    }
    console.log(results);
}

function draw() {
image(Tv_image,0,0,500,400);
}