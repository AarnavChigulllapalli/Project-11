var sea
var seaimg
var ship
var shipimg

function preload(){
seaimg = loadImage("sea.png")
shipimg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup() {
  createCanvas(1000,1000);
  sea = createSprite(200,200,200,400);
  sea.addImage(seaimg)
  sea.velocityX = -5;
  sea.x = sea.width /2;
  ship = createSprite(200,300,10,10)
  ship.addAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png", shipimg)

}
function draw() {
  background("white")
  if (sea.x < 0) {
    sea.x = sea.width / 2;
  }
  drawSprites(); 
}