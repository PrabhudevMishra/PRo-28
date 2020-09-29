
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree;
var ground;
var mango1,mango2,mango3,mango4,mango5;
var boy;
var stone;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,760,1200,20);
  tree = new Tree(800,500,500,600);
  boy = new Boy(200,200,250,250);
  mango1 = new Mango(800,350,40,40);
  stone = new Stone(200,200,40,40);
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(220);
  
  ground.display();
  tree.display();
  boy.display();
  mango1.display();
  stone.display();

  drawSprites();
 
}



