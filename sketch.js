var bullet,wall, thickness,
var speed,weight;





function setup() {


  createCanvas(1600,400);
  thickness=random(22,83);
   bullet=createSprite(200,200,50,50);
wall=createSprite(1200,200,60,100);
bullet.velocity=5;
  speed=random(55,90);

  weight=random(400,1500);
  bullet.velocityX = speed;

}

function draw() {
  background("orange"); 
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5*width*speed*speed/22509;
  }
    if(deformation)
    {
      bullet.shapeColor=color("red");
      wall.shapeColor=color("white");
    
  }
if(deformation<180&&deformation>100)
{
  bullet.shapeColor=color("yellow");
  wall.shapeColor=color("white");
}
if(deformation<100)
{
bullet.shapeColor=color("green");
  wall.shapeColor=color("white");
}
}
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed* speed/(thickness*thickness*thickness);

}
if(damage>10)
{
  wall.shapeColor="red";
 drawSprites();
}
function hasCollided (lbullet,lwall){
  bulletRightEdge=lwall.x
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
return false;
}
