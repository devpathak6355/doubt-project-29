const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;
var world,engine;
var ball, slingShot;

function setup(){
    createCanvas(2000,800);
    engine=Engine.create();
    world=engine.world;

    ground=new Ground(600,600,470,20);
    ground1=new Ground(1100,400,330,20),
    box1=new box(420,370,60,60);
    box2=new box(480,370,60,60);              
    box3=new box(540,370,60,60);
    box4=new box(600,370,60,60);
    box5=new box(660,370,60,60);
    box6=new box(720,370,60,60);
    box7=new box(780,370,60,60);
    box8=new box(480,310,60,60);
    box9= new box(540,310,60,60);
    box10=new box(600,310,60,60);
    box11=new box(660,310,60,60);
    box12=new box(720,310,60,60);
    box13=new box(540,250,60,60);
    box14=new box(600,250,60,60);
    box15=new box(660,250,60,60);
    box16=new box(600,190,60,60);
    box17=new box(970,100,60,60);
    box18=new box(1030,100,60,60);
    box19=new box(1090,100,60,60);
    box20=new box(1150,100,60,60);
    box21=new box(1210,100,60,60);
    box22=new box(1030,100,60,60);
    box23=new box(1090,100,60,60);
    box24=new box(1150,100,60,60);
    box25=new box(1090,100,60,60);
    ball = new Ball(200, 300, 80, 80);
  rope = new Rope(ball.body, { x: 100, y: 100 });    
}





function draw(){
Engine.update(engine);    
background("black");

ground.display();
ground1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();  
box8.display(); 
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
ball.display();
rope.display();

mouseDragged();
}   

function mouseDragged(){

Matter.Body.setPosition (ball.body,{x:mouseX, y:mouseY});

}
function mouseReleased(){
  slingshot.fly();
}