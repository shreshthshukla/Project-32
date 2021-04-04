const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball

function preload(){
  slingImage = loadImage("Sling.png");
}

function setup() {
  createCanvas(1500,500);

  engine = Engine.create();

  world = engine.world;

  Angryball = new Ball(250,280)

  ball1 = new Pinkball(950,450);

  wood1 = new Wood1(800,450,90,90,10)

  wood2 = new Wood1(1100,450,90,90,10)

  log1 = new Wood2(950,350,400,20,0)

  wood3 = new Wood1(800,340,90,90,10)

  wood4 = new Wood1(1100,340,90,90,10)

  ball2 = new Pinkball(950,340);

  log2 = new Wood2(950,260,400,20,0)

  wood5 = new Wood1(950,220,90,90,10)

  // log3 = new Wood2(950,120,20,150, PI/7);

  // log4 = new Wood2(870,120,20,150, -PI/7)

  slingshot = new Rope(Angryball.body,{x:250, y:280});

  base = new Ground(1500/2,500,1500,30)

  Engine.run(engine);

}

function draw() {
  background(255,255,255);  

  Engine.update(engine);

  image(slingImage,180,240,100,250)

  base.display(); 

  ball1.display();

  wood1.display();

  wood2.display();

  log1.display();

  log2.display();

  wood3.display();

  wood4.display();

  ball2.display();

  wood5.display();

  // log3.display();

  // log4.display();

  slingshot.display()

  Angryball.display()

  text(mouseX+","+mouseY,20,200);
}

function mouseDragged(){
  Matter.Body.setPosition(Angryball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly()
}