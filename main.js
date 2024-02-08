song1=""
song2=""
function preload(){
    song1=loadSound("Tu-Hai-Kahan.mp3")
    song2=loadSound("Fighter Song-2.0.mp3")
}

scorerightWrist=0
scoreleftWrist=0

rightWristX=0
rightWristY=0
leftWristX=0
leftWristY=0

function setup(){
    canvas=createCanvas(600,500)
    canvas.center()

    video=createCapture(VIDEO)
    video.hide()

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function modelLoaded(){

}

function gotPoses(){

}

function draw(){
    image(video,0,0,600,500)
}

function play(){
    song1.play()
}

function stop1(){
    song1.stop()
}