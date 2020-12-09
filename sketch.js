var PLAY=1;
var END=0;
var gameState=PLAY;
var iWall;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  
monkey_running=loadAnimation("sprite_0.png","sprite_1.png",
  "sprite_2.png","sprite_3.png","sprite_4.png",
  "sprite_5.png","sprite_6.png","sprite_7.png",
    "sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
  
}



function setup() {
  createCanvas(600,400);
  monkey=createSprite(50,360,10,10);
  monkey.addAnimation("monkey",monkey_running);
 monkey.scale=0.1
  
  ground=createSprite(300,395,600,10);
  ground.velocityX=-8;
  
  iWall=createSprite(300,395,600,10);
  iWall.velocityX=-8;
  iWall.visible=false;
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
 
  
}


function draw() {
background("lightblue");
  
   monkey.collide(ground);
   
  
  if(keyDown("space")&& monkey.y >= 350) {
    monkey.velocityY = -15;
  }
  
  if(ground.x<300){
    ground.x=ground.width/2;
}
  
  iWall.width=iWall.width/2;
  monkey.velocityY=monkey.velocityY+0.7;
  
  console.log(ground.x)
  
  
  bananas();
  rocks();
  
  drawSprites();

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,430,50);
}

function bananas(){
  if(frameCount%80===0){
 banana=createSprite(600,Math.round(random(150,220)),10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=160;
    FoodGroup.add(banana);
  }
}

function rocks(){
  if(frameCount%300===0){
  obstacle=createSprite(600,355,10,10);  
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-5;
    obstacle.lifetime=200;
    obstacle.collide(iWall);
  obstacleGroup.add(obstacle);  
  }
}


