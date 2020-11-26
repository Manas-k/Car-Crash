var car, wall;
var speed, weight;
var deform;

function setup() {
  createCanvas(1600,400);

    speed = random(55,90);
    weight = random(400,1500);

    car = createSprite(50, 200, 50, 50);
    car.velocityX = speed;
    car.shapeColour = (255);

    wall = createSprite(1300,200,60, height/2);
    wall.shapeColour = 255;

  
}

function draw() {
  background(0); 
  
  if(car.x - wall.x < wall.width/2 + car.width/2 && 
    wall.x - car.x < wall.width/2 + car.width/2 && 
    wall.y - car.y < wall.width/2 + car.width/2 &&
    car.y - wall.y < wall.width/2 + car.width/2){

    deform = (0.5 * weight * speed * speed)/22500;  
    if(deform <= 80){
      car.shapeColor = "green";
    }
    else if(deform > 80 && deform <= 180){
      car.shapeColor = "yellow";
    }
    else {
      car.shapeColor = "red";
    }

    car.velocityX = 0;
  } 




  drawSprites();
}