const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;
var pig, bird, log, log2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(200,250,50,50);
    ground = new Ground(200,390)
    pig = new Pig(300,300)
    bird = new Bird(150,150)
    log = new Log(200,200,5,60,45)
    log2 = new Log(200,200,5,60,-45)
}
function draw(){
    background(0);
    
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    bird.display();
    log.display();
    log2.display();
   

   
}