var fixed,moving,s1,s2,s3,s4
function setup() {
  createCanvas(800,400);
fixed=createSprite(400,200,70,50);
moving=createSprite(200,200,50,70);
fixed.shapeColor="red";
moving.shapeColor="green";
s1=createSprite(300,100,50,50);
s2=createSprite(100,100,50,50);
s1.velocityX=-2;
s2.velocityX= 2;
s3=createSprite(100,180,50,50);
s3.velocityY=2;
s3.shapeColor="white";
s4=createSprite(100,380,50,50);
s4.velocityY=-2;
s4.shapeColor="purple";

}

function draw() {
  background("black") ;
  moving.x=World.mouseX;
  moving.y= World.mouseY;
  if (istouching(moving, fixed)){
    fixed.shapeColor="blue";
    moving.shapeColor="yellow";
  
  }
  else{
    fixed.shapeColor="red";
    moving.shapeColor="green";
  }
  collide(s3,s4)
  bounceoff(s1,s2)
  drawSprites();
}