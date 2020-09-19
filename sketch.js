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
  database=firebase.database();

  foodstock=database.ref('Food')
  foodstock.on("value", readStock)
  dog = createSprite(200,200,40,40);
  dog.addImage("Dog",dog1)
  dog.addImage("happydog",dog2)
  dog.scale= 0.3;
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.changeImage("happydog",dog2)
}

  drawSprites();
  textSize(25);
  fill("black");
  stroke("black");
  //add styles here
text("Press up arrow to feed the dog", 150,20)

}
function readStock(data){
  foodS=data.val();
  }
function writeStock(f){
  f=f-1
  database.ref("/").update({
  Food:f
});
}

