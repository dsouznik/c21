var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,50,50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  tom = createSprite(400,200,50,50);
  tom.shapeColor = "yellow";
  jerry = createSprite(1000,200,30,180);
  jerry.shapeColor = "orange";
  tom.velocityX = 6;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if (isTouching(tom,jerry)){
  tom.shapeColor = "red";
  jerry.shapeColor = "red";
}
collide(tom,jerry);
  drawSprites();
}
