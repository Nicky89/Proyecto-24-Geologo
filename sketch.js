const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber1,rubber2,rubber3,rubber4,rubber5,hierro,stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new  Stone(550,300);
    hierro = new  Hierro(850,300);
    rubber1 = new Rubber(600,20,50);
    rubber2 = new Rubber(600,20,50);
    rubber3 = new Rubber(600,20,50);
    rubber4 = new Rubber(600,20,50);
    rubber5 = new Rubber(600,20,50);
   

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    stone.display();
    hierro.display();
    
 
}