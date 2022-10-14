noseX = "";
noseY = "";


function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function preload(){
    hat = loadImage('pngtree-a-black-top-hat-illustration-image_1214580-removebg-preview.png');
}


function take_snapsot() {
    save('hat.png');
}

function draw() {
    image(video, 0, 0, 300, 300);
    
    image(hat, noseX - 65, noseY - 150, 140, 140);
}


function modelLoaded() {
    console.log('PoseNet is initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}