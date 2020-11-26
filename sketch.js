var dog, dogImg,happyDogImg, database, foodS, foodStock;
var feedBtn, addFoodBtn,fedTime, lastFed,foodObj;

function preload()
{
 
  dogImg = loadImage("images/dogImg.png")
  happyDogImg = loadImage("images/dogImg1.png")
 
}

function setup() {
  createCanvas(600, 500);
  database = firebase.database();
  dog = createSprite(250,250)
  dog.addImage("dog",dogImg)
  dog.addImage("doghappy",happyDogImg)
  dog.scale = 0.2;
  getFoodStock();
  

 
  //create feedBtn and addFoodBtn and position them on the screen
  
  //create new Food Object called foodObj
  
}


function draw() {  

  background(46, 139, 87);
  fill("red")
  stroke("white")
  text("Press UP ARROW TO FEED DOG", 150, 50);
  
  
  foodObj.foodStock = foodS;
  //display foodObj

  foodObj.foodStock = foodS;
  foodObj.display();
  database.ref('FeedTime').on("value",function(data){
    lastFed = data.val();
    showTime(lastFed);
  });
    
 
  // call addFoodBtn 's mousePressed and call getFoodStock() and addFood(foodS);;
    
  //call feedBtn's mousePressed function and call getFoodStock(); and feedDog();
  
  drawSprites();
  

}


function showTime(time){
//Look at the hint and fill the code for the func
}

function addFood(f){
  f++;
  database.ref('/').update({
    Food : f
  })
}
function getFoodStock(){
  database.ref("Food").on("value",function(data){
    foodS = data.val();
  })
}
function feedDog(){
  foodS--
  database.ref("/").update({
    FeedTime:hour(),
    Food:foodS
  })
}
