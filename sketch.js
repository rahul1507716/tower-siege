const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(1200,900);

engine = Engine.create();
world = engine.world;

ground1 = new Ground(420,385,370,10);
ground2 = new Ground(800,300,250,10);

block1 = new Block(330,375,30,40);
block2 = new Block(360,375,30,40);
block3 = new Block(390,375,30,40);
block4 = new Block(420,375,30,40);
block5 = new Block(450,375,30,40);
block6 = new Block(480,375,30,40);
block7 = new Block(510,375,30,40);

block8 = new Block(360,335,30,40);
block9 = new Block(390,335,30,40);
block10 = new Block(420,335,30,40);
block11 = new Block(450,335,30,40);
block12 = new Block(480,335,30,40);

block13 = new Block(390,295,30,40);
block14 = new Block(420,295,30,40);
block15 = new Block(450,295,30,40);

block16 = new Block(420,255,30,40);

block17 = new Block(730,290,30,40);
block18 = new Block(760,290,30,40);
block19 = new Block(790,290,30,40);
block20 = new Block(820,290,30,40);
block21 = new Block(850,290,30,40);

block22 = new Block(760,250,30,40);
block23 = new Block(790,250,30,40);
block24 = new Block(820,250,30,40);

block25 = new Block(790,210,30,40);

polygon1 = new polygon(100,200);


slingshot = new SlingShot(polygon1.body,{x:100,y:200});

Engine.run(engine);
}

function draw() {
background("blue");
Engine.update(engine);
ground1.display();
ground2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
polygon1.display();
slingshot.display();


 drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
