var garden, rabbit, apple, orangeleaf;
var gardenImg,rabbitImg,appleImg,orangeleafImg;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeleafImg = loadImage("orangeLeaf.png");
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
  edges = createEdgeSprites()
}


function draw() {
  background(0);
  rabbit.X = World.mouseX
  edges = createEdgeSprites();
  rabbit.collide(edges);
  createOrange()
  createApple()
  drawSprites();
}

  function createApple() {
    if(frameCount%69===0){
    apple = createSprite( 10,40, 10, 10)
    apple.addImage(appleImg)
    apple.scale = 0.07
    apple.velocityY=3
    apple.x=Math.round(random(10,390))
  }
}

  function createOrange() {
    if(frameCount%80===0){
    orangeleaf = createSprite(10, 40, 10, 10)
    orangeleaf.addImage(orangeleafImg)
    orangeleaf.scale = 0.08
    orangeleaf.velocityY=3 
   orangeleaf.x=Math.round(random(10,190))
    }
  }

  