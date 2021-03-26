function setup() {
  createCanvas(800,400);
  ball = new Redball(200,200)
}

function draw() {
  background(255,255,255);  
  ball.display();
}