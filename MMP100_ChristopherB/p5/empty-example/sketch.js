var S_ = 5; //declared and initalized the custom var
function setup() {
  // put setup code here
    createCanvas(500,500);
} 

function draw() {
    background("#003366");
ellipse(random(width),random(height),15,15);
    ellipse(400,100,20,20);
    ellipse(300,200,20,20);
    ellipse(200,400,20,20);
    ellipse(100,100,20,20);
    stroke("#444456");
    strokeWeight(5);
    textSize(20)
    point(width/10, height/10);
    text("Rising star", 40, 80);
    fill("#ADD8E6"); // light blue
    ellipse(mouseX,mouseY,20,20);
    ellipse(200,250,S_,S_)
}
function mousePressed(){
    S_ = S_+5;
}