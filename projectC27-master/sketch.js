var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;

var roofObj;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	 roofObj = new Roof(width/2,height/4,width/3,20);
	 
	
	


	bobObject1=new Bob(360,475,20);
	bobObject2=new Bob(400,475,20);
	bobObject3=new Bob(440,475,20);
	bobObject4=new Bob(480,475,20);
	bobObject5=new Bob(520,475,20);
	


    rope1=new Rope(bobObject1.body,roofObj.body,-80, 0)
	rope2=new Rope(bobObject2.body,roofObj.body,-40, 0)
	rope3=new Rope(bobObject3.body,roofObj.body,0, 0)
	rope4=new Rope(bobObject4.body,roofObj.body,40, 0)
	rope5=new Rope(bobObject5.body,roofObj.body,80, 0)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObj.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}




