var score=0;

var gamestate="onsling";
//examples for various kinds of data in JS
// string 
var string = "This is a string";
console.log (string);

// number
var number = 100;

console.log (number);

// boolean
var bool = true;
console.log (bool);

// obicity 
var object = "obicity" ;
console.log (object);

// null 
object = null;
console.log (object);

// ARRAY
var arr1 = [1,2,3,4,5] ;
console.log (arr1);
console.log (arr1[4]);
console.log (arr1.length);
var arr2 = ["name", 12, true];
console.log (arr2);


var arr3 = [[1,2], [2,3], [3,4]];
console.log (arr3);
console.log (arr3[0]);
console.log (arr3[1][1]);

arr3.push ("my name");
console.log (arr3);

arr3.pop ();
console.log (arr3);

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, SlingShot;
function preload() {
   // backgroundImg = loadImage("sprites/bg.png");//
    getBackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);//
    SlingShot = new Slingshot(bird.body,{x:200, y:50});
}

function draw(){
    if (backgroundImg)
        background(backgroundImg);
    textSize(35);
    fill("white");
    text("SCORE :" + score,width-300,50);

    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();//
    SlingShot.display();    
    
}

function mouseDragged(){
    if(gamestate=="onsling"){
        Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY});
    }  
}

function mouseReleased(){
    SlingShot.fly();
    gamestate="launched";
}

async function getBackgroundImage () {
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    console.log (response);
    var responseJSON = await response.json ();
    console.log (responseJSON);
    var hour = responseJSON.datetime.slice (11,13);
    console.log (hour);
    if(hour>6 && hour<19) {
        bg="sprites/bg.png";
    }
    else {
        bg="sprites/bg2.jpg";
    }
    backgroundImg= loadImage(bg);
}