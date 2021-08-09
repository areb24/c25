
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Paper(400,350);
	ball.ellipse(x, y, 10,options);
	


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  basket1=createSprite(85,85,10,50)
  basket2=createSprite(95,95,50,10)
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body(paperObject.body.position,{x:85,y:-85})
	}
}



