const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

var bg_img;
var fruit_img;
var rabbit;

function preload()
{
  bg_img = loadImage('background.png');
  //food = loadImage('melon.png');
  bunny_img = loadImage('Rabbit-01.png');

  fruit_img = loadImage('melon.png');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  bunny = createSprite(250,650,100,100);
  bunny.addImage(bunny_img);
  bunny.scale = 0.2;

  button = createImg('cut_button.png');
  button.position(233,30);
  button.size (30,30);
  button.mouseClicked(drop);


  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);




  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);

  image(bg_img,width/2,height/2,490,690);

  image(fruit_img,fruit.position.x,fruit.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();

 drawSprites()
 /*if(keyIsDown("SPACE")){
   rope.detach()
 }*/
   
}


function drop(){
  rope.break();
  fruit_con.detach();
  fruit_con = null
}