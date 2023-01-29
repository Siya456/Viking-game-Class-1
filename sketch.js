const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine;
var world;

function preload(){
    backgroundImage = loadImage("background_1.png");
}

function setup(){
    canvas = createCanvas(1200,600);
    canvas.position(15,70);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
    background(backgroundImage);
    Engine.update(engine);
}

