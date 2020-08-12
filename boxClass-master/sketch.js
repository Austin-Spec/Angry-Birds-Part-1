const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2, box3, box4, box5, log1, log2, log3, log4;
var pig1,pig2, bird1;
var ground1

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(720,300,50,100);
    box2 = new Box(880,300,50,100);
    box3 = new Box(720,150,50,100); 
    box4 = new Box(875,150,50,100);
    box5 = new Box(800,80,50,50)

    log1 = new Log(800,230,200, PI/2)
    log2 = new Log(800,135,200, PI/2)
    log3 = new Log(740,80,100, PI/7)
    log4 = new Log(860,80,100, -PI/7)
    
    pig1 = new Pig(800,300)
    pig2 = new Pig(800,190)

    bird1 = new Bird(200,300,50,50)

    ground1 = new Ground(600,400,1200,100)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
    

    ground1.display();

}