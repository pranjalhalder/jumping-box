var canvas ,floor1,floor2,floor3,floor4;
var music;

function preload(){
    piano = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,400);

    edges=createEdgeSprites()

    floor1=createSprite(690,380,200,10)
    floor1.shapeColor="red"
  
    floor2=createSprite(480,380,200,10)
    floor2.shapeColor="yellow"
  
    floor3=createSprite(270,380,200,10)
    floor3.shapeColor="green"
  
    floor4=createSprite(80,380,150,10)
    floor4.shapeColor="cyan"
    


  //create box sprite and give velocity
    
    box=createSprite(40,50,20,20)
    box.shapeColor="white"
    box.velocityX=5
    box.velocityY=-4


}

function draw() {
    background("silver");
    
    if(box.isTouching(floor1)){
       box.shapeColor="red"
       piano.pause();
       box.velocityX=0
       box.velocityY=0 
       floor1.visible=true
    }
    
    if(box.isTouching(floor2)){
        box.shapeColor="yellow"
        piano.play();  
        floor2.visible=true
     }

     if(box.isTouching(floor3)){
        box.shapeColor="green"
        floor3.visible=true
     }

     if(box.isTouching(floor4)){
        box.shapeColor="cyan"
        floor4.visible=true
     }

     

      


   box.bounceOff(edges)
   box.bounceOff(floor1)
   box.bounceOff(floor2)
   box.bounceOff(floor3)
   box.bounceOff(floor4)
   

    drawSprites()
}
