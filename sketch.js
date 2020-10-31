const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;
var paper;
var dustbin;
var ground;
var box1, box2, box3;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(100, 600, 70);
	ground = new Ground(600,height,1200,20)

	dustbin = new Dustbin(700, 625);

	box1 = new Boxes(655, 630, 5, 115);
	box2 = new Boxes(700, 685, 90, 5);
	box3 = new Boxes(745, 630, 5, 115);	
	
	var render = Render.create({
		element: document.body, 
		engine: engine,
		options: {width:800, height:700, wireframes: false}
	} )  

	Engine.run(engine);
	//Render.run(render);  
}


function draw() {
  background("skyblue");
  Engine.update(engine);
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  dustbin.display();
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position,{x:37, y:-37});
}
}


