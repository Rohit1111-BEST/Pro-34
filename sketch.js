//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock

function preload()
{

  //load images here
  dog1 = loadImage("Dog.png");
  dog2 = loadImage("happydog.png");

}


function setup() {
	createCanvas(500, 500);
  

  foodstock=database.ref('food')
  foodstock.on("value", redStock)
  dog = createSprite(200,200,40,40);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage("doghappy.png")
  }
}


function draw() {  
background(46, 139, 87);

  drawSprites();
  textSize();
  fill();
  stroke();
  //add styles here

}



