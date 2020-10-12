var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 120, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.velocityY=1;
	
	//box = new Box(400, 200, 20)

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	box1Sp = createSprite(400, 650, 200, 20)
	box1Sp.shapeColor = color("red")

	box2Sp = createSprite(300, 620, 20, 100)
	box2Sp.shapeColor = color("red")

	box3Sp = createSprite(500, 620, 20, 100)
	box3Sp.shapeColor = color("red")

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5, {restitution:0.1,isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	box1 = Bodies.rectangle(width/2, 635, 200, 20 , {isStatic:true} );
	World.add(world, box1);
	 
	box2 = Bodies.rectangle(300, 620, 20, 100 , {isStatic:true} );
	World.add(world, box2);
	 
	box3 = Bodies.rectangle(300, 620, 20, 100 , {isStatic:true} );
 	World.add(world, box3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if(keyDown(DOWN_ARROW)){
	   Matter.Body.setStatic(packageBody,false)
    }
  
	drawSprites();
	//box1.display();
 
}

//function keyPressed() {
// if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    
  //}
//}



