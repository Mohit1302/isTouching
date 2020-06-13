function setup() {
  createCanvas(1200,800);
  fixedrectangle= createSprite(600, 400, 50, 80);
  fixedrectangle.shapeColor='green';
  movingrectangle= createSprite(400,200,80,30);
  movingrectangle.shapeColor='green';
}


function draw() {
  background(255,255,255);
  movingrectangle.x=World.mouseX;
  movingrectangle.y=World.mouseY;
  if (movingrectangle.x-fixedrectangle.x<fixedrectangle.width/2+movingrectangle.width/2 && 
    fixedrectangle.x-movingrectangle.x<fixedrectangle.width/2+movingrectangle.width/2 && 
    movingrectangle.y-fixedrectangle.y<fixedrectangle.width/2+movingrectangle.width/2 && 
    fixedrectangle.y-movingrectangle.y<fixedrectangle.width/2+movingrectangle.width/2){
       movingrectangle.shapeColor='red';
       fixedrectangle.shapeColor='red';
       
  }

  else{ movingrectangle.shapeColor='green';
  fixedrectangle.shapeColor='green';


}
  drawSprites();
}