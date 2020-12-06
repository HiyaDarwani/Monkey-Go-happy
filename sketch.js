
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var rand;
var survivaltime;
function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
   FoodGroup = new Group();
   obstacleGroup = new Group();
  
  survivaltime = 0;
}



function setup() {
createCanvas(600, 400);
//Monkey
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
//Ground
  ground = createSprite(400,350, 900,10);
  ground.velocityX = -4;
  
}


function draw() {
background("lightblue");
ground.x = ground.width /2;
 
  if (keyDown("space") && monkey.y>250){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  Food();
  spawnObstacles();

  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime =Math.ceil(frameCount/frameRate())
  text("Survival Time ="+ survivaltime, 100, 50);
  drawSprites();
}

function Food(){
  if (frameCount % 80 === 0){
    banana = createSprite(200, Math.round(random(120,200)), 20, 20);
    banana.velocityX = -5;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.lifetime = 40;
    FoodGroup.add(banana);
  }
}
function spawnObstacles(){
  if (frameCount % 80 === 0){
    obstacle = createSprite(200, 330, 20, 20);
    obstacle.velocityX = -5;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 40;
    obstacleGroup.add(obstacle);
  }
}



