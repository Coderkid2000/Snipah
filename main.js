status = "";
objects=[];

function preload() {

}

function setup() {
    canvas = createCanvas(480, 390);
    video = createCapture(VIDEO);
    canvas.center();
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "STATUS : FLYING PYROS!!!";
    objname = document.getElementById("Mistake").value;
}

function modelLoaded() {
    console.log("Guuvh Jovh");
    status = true;
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results)
    objects = results;
}
function draw() {
    image(video, 0, 0, 480, 390);
    if (status != "") {
        objectDetector.detect(video, gotResults);
        r = random(256);
        g = random(256);
        b = random(256);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "STATUS : FLYING PYROS!!!";

            fill(r, g, b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke(r, g, b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)

            if (objects[i].label == objname) {
                document.getElementById("status_y/n").innerHTML="object found";
            }
            else{
                document.getElementById("status_y/n").innerHTML="not found";
            }
        }
    }
}