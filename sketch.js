
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject,slingshot;
var mango1,mango2,mango3,mango4,mango5,mango6;
var world,boy,stone;

function preload(){
	boy=loadImage("images/boy.png");
    //stone=loadImage("images/stone.png");

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
 
	mango1=new mango(1100,100,30);
    mango2=new mango(1000,100,30);
	mango3=new mango(1200,150,30);
	mango4=new mango(900,160,30);
	mango5=new mango(990,190,30);
	mango6=new mango(1150,200,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone=new Stone(100,100);
	slingshot = new Slingshot(stone.body, {x: 250, y: 420});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  text(mouseX+","+mouseY,mouseX,mouseY);
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
 //stoneObj.display();
  groundObject.display();
  stone.display();
  slingshot.display();

 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
if (keyCode ===32){
  Matter.Body.setPosition(stone.body, {x:235, y:420})
  boy.attach(stone.body);
}

}
