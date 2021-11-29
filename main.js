function preload(){}
function setup(){
    video=createCapture(VIDEO)
    video.size(400,400)
    canvas=createCanvas(400,400)
     canvas.position(600,80)   
    posenet=ml5.poseNet(video,modelLoaded)
}
function draw(){}
function modelLoaded(){
  console.log("I made it work")  
}