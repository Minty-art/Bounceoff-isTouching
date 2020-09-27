var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(400,200,80,30);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  gameObject1 = createSprite(100, 100, 50 ,50)
  gameObject2 = createSprite(200,100, 50,50)
  gameObject3 = createSprite(300,100, 50 ,50)
  gameObject4 = createSprite(400, 100, 50 ,50)
  gameObject1.velocityY = - 5
  gameObject3.velocityY = + 5
 
}

function draw() {
  background(0);  
  gameObject3.x = mouseX;
  gameObject3.y = mouseY;

  if(isTouching(gameObject3, gameObject1)){
    gameObject1.shapeColor = "red";
    gameObject3.shapeColor = "red";
  }
    else {
    gameObject1.shapeColor = "green";
    gameObject3.shapeColor = "green";
    }
  bounceOff(gameObject1, gameObject3)
  
  drawSprites();
}