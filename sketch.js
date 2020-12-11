
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var SurrvivalTime , bananaGroup

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;

ground = createSprite(400,350,10000,10);
  ground.velocityX = -4;
  ground.x = ground.width/2
  console.log(ground.x);
  
    obstaclesGroup = createGroup();
  foodGroup = createGroup();
bananaGroup = createGroup();

  SurrvivalTime=0;
  
}


function draw() {
 background(200);
  
  
  text("SurrvivalTime: "+ SurrvivalTime, 200,50);
   SurrvivalTime = SurrvivalTime + Math.round(getFrameRate()/60);
 
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y > 300) {
        monkey.velocityY = -15;
        
    
    
    //add gravity
   
  }
   monkey.velocityY = monkey.velocityY + 0.7
  monkey.collide(ground);
  
  
  food();
  obstacles();
  drawSprites();
}

function food(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,10,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 300
    bananaGroup.add(banana)
  }
  
}

function obstacles(){
   if (frameCount % 300 === 0){
   var obstacle = createSprite(600,325,10,40);
   obstacle.velocityX = -4
     obstacle.addImage(obstaceImage)
     
   obstacle.scale = 0.1;
    obstacle.lifetime = 300;
  
    obstaclesGroup.add(obstacle);
  
  
}


}