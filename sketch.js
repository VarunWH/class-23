//Giving nickname-name aliasing
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
 
var myEngine, myWorld, ground,ball;

function setup() {
  createCanvas(400,400);

  myEngine=Engine.create();
  myWorld= myEngine.world;
 
  //Creating Objects
  ground=new Ground();
  
  box1= new Box(200,300,50,50);
  box2=new Box(240,100,50,100);


  console.log(ground);

  
}

function draw() {
  background("black");  
  Engine.update(myEngine);

  ground.display();

  box1.display();
  box2.display();

}