// this.collider = undefined;
var trex, trex_running;
var ground, invisibleGround, groundImage;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
   trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(400, 400);

  //creating trex
  trex = createSprite(50, 380, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  //creating ground
  ground = createSprite(200, 380, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -2;

  //creating invisible ground
   invisibleGround = createSprite(200,385,400,5);
  invisibleGround.visible = false;
  
}

function draw() {
background("pink");
//console.log(trex.y);
  
//jump when the space button is pressed
if (keyDown("space")&&trex.y>=350) {
 trex.velocityY = -10;
}
 
trex.velocityY = trex.velocityY + 0.8

if (ground.x < 0) {
  ground.x = ground.width / 2;
}

trex.collide(invisibleGround);
drawSprites();
}