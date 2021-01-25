var garden,gardenImage;
var chuha,chuhaImage,chuhateaser,chuha1;
var billi,billirunning,billi1,billistopped;

function preload() {
    //load the images here
    gardenImage = loadImage("garden.png");
    chuhaImage = loadImage("jerry1.png");
    chuha1 = loadImage("jerry3.png")
    chuhateaser = loadImage("jerry4.png")
    billistopped = loadImage("tomOne.png");
    billirunning = loadAnimation("tomThree.png","tomTwo.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400);
    garden.addImage("garden",gardenImage);

    chuha = createSprite(250,600);
    chuha.addImage("chuha",chuhaImage);
    chuha.scale = 0.1;

    billi = createSprite(750,600);   
    billi.addAnimation("billi",billistopped);
    billi.scale=0.1;   
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide;

    if(billi.x - (chuha.x + 90) < (billi.width - chuha.width) /2 ){
        billi.velocityX=0;
        billi.addAnimation("billi",billistopped);
        billi.changeAnimation("billi",billistopped);
        chuha.changeAnimation("chuha",chuhateaser);
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    billi.velocityX = -5;
    billi.addAnimation("billi1",billirunning)
    billi.changeAnimation("billi1",billirunning);
    chuha.addAnimation("chuha1",chuha1)
    chuha.changeAnimation("chuha1",chuha1);
}
}
