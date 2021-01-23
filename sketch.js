
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16
var block17,block18,block19,block20,block21,block22,block23,block24,block25;

var polygon,slingShot;
var score = 0;
function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//level 1
	block1 = new Block(480,275,30,40);
	block2 = new Block(300,275,30,40);
	block3 = new Block(330,275,30,40);
	block4 = new Block(360,275,30,40);
	block5 = new Block(390,275,30,40);
	block6 = new Block(420,275,30,40);
	block7 = new Block(450,275,30,40);
	//level 2
	block8 = new Block(330,235,30,40);
	block9 = new Block(360,235,30,40);
	block10 = new Block(390,235,30,40);
	block11 = new Block(420,235,30,40);
	block12 = new Block(450,235,30,40);
	//level 3
	block13 = new Block(360,195,30,40);
	block14 = new Block(390,195,30,40);
	block15 = new Block(420,195,30,40);
	block16 = new Block(390,155,30,40);
	//stand 2
	//level 1
	block17 = new Block(920,175,30,40);
	block18 = new Block(950,175,30,40);
	block19 = new Block(980,175,30,40);
	block20 = new Block(1010,175,30,40);
	block21 = new Block(1040,175,30,40);
	//level 2
	block22 = new Block(950,135,30,40);
	block23 = new Block(980,135,30,40);
	block24 = new Block(1010,135,30,40);
	block25 = new Block(980,95,30,40);
	
	polygon = new Polygon(235,420,30)
	slingShot = new Slingshot(polygon.body,{x:105,y:300});





	ground = new Ground(600,height,1500,20);
	stand1 = new Ground(400,400,300,20)
	stand2 = new Ground(1000,300,300,20);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("lightcyan");
  textSize(30)
  fill("black")
  text("Score  " +score,750,40)
  drawSprites();
  polygon.display();
  slingShot.display();
  
    
  
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  block17.display();
  block17.score();
  block18.display();
  block18.score();
  block19.display();
  block19.score();
  block20.display();
  block20.score();
  block21.display();
  block21.score();
  block22.display();
  block22.score();
  block23.display();
  block23.score();
  block24.display();
  block24.score();
  block25.display();
  block25.score();

  ground.display();
  stand1.display();
  stand2.display();
 
}

	


function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
} 
function keyPressed(){
  if(keyCode === 32){
  
  slingShot.attach(polygon.body,{x:105,y:300});
 }
}
function mouseReleased(){
	slingShot.fly();
}


