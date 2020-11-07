var car,wall;
var speed, weight; 

function preload(){
  redcarImage=loadImage("redcar.png");
  greencarImage=loadImage("greencar.jpg");
  yellowcarImage=loadImage("yellowcar.png");
  whitecarImage=loadImage("whitecar.png");
  roadImage=loadImage("road.jpg");
  wallImage=loadImage("wall.png");
  ambulanceImage=loadImage("ambulance.png")
}

function setup() {
  createCanvas(1450, 400);


	speed=random(55,90)
	weight=random(400,1500)

	 road=createSprite(800,45,1500,400);
	 road.addImage(roadImage);
	 road.scale=2.5
	car=createSprite(50, 200, 50,50);   

	car.velocityX = speed;

	car.shapeColor=color(255);
	//car.addImage(whitecarImage);
	//car.scale=0.6;
	 //car.debug=true;
	 ambulance=createSprite(220,280,50,50);
	 ambulance.addImage(ambulanceImage);
	 ambulance.visible= false;
	 ambulance.scale=0.2;
	 
  	wall=createSprite(1350,200, 60, height/2)
	  wall.shapeColor=color(80,80,80)
	  wall.addImage(wallImage);
	 // wall.debug=true;
	  wall.setCollider("rectangle",0,0,100,wall.height);
}


function draw() {
  background(0);

  if(wall.x-car.x <=(car.width/2+wall.width/2))
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22509;
	if(deformation>180)
	{
		car.shapeColor=color(255,0,0);
		car.addImage(redcarImage)
		car.scale=0.7;

		ambulance.visible= true;

		
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor=color(230,230,0);
		car.addImage(yellowcarImage)
		car.scale=0.7;
	}

	if(deformation<100)
	{
		car.shapeColor=color(0,255,0);
		car.addImage(greencarImage)
		car.scale=0.7;
	}
  }  
  
  drawSprites();
 
}


