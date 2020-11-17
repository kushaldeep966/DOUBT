
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(700, 500);


	engine = Engine.create();
	world = engine.world;

	paper1 = new paper(200,200,10);

	box1Sprite=createSprite(600,450,150,20);
	box1Sprite.shapeColor=color("white")

	box2Sprite=createSprite(670,410,20,100);
	box2Sprite.shapeColor=color("white")

	box3Sprite=createSprite(530,410,20,100);
	box3Sprite.shapeColor=color("white")

	groundSprite = createSprite(350,465,700,10);
	groundSprite.shapeColor=color("yellow")



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper1.display();
 
 
}



