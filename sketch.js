const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var player,engine_sound;
var obstacle;
var obstacles = [];
var speed;
var fc = 1070;
var gameState = 0;
var score = 0;

function preload(){
  engine_sound = loadSound("sounds/engine.mp3");

  flameImg = loadImage("images/flame.png");
  targetImg = loadImage("images/target.png");
}


function setup(){
  var canvas = createCanvas(400,window.innerHeight);
  engine = Engine.create();
  world = engine.world;

  
  player = new Player(200,400,-90);

  obstacle = new Obstacle();
  obstacles.push(obstacle);

} 


function draw() {
  background('yellow'); 
  Engine.update(engine);
  Body.setStatic(player.body,false);
  changePos();
  lose();
  play();
  //win();


  if(gameState === 0){
    text("SCORE: "+ score, width-100,20);
    if(frameCount % 180 === 0){
      obstacles.push(new Obstacle());
    }

    /*
    if(frameCount >= fc){
      var target = new Target();
      target.display();

      if(target.dist(player)){
        gameState = 2;
      }
    }
    */
    
    for(var i=0; i<obstacles.length; i++){
      obstacles[i].display();
      obstacles[i].update();


      if(obstacles[i].hits(player)){
        gameState = 1;
      }
    
      if(obstacles[i].score(player))
        score++;
        //console.log(score);
    }
  }

  player.display();
  player.player_update();
}


function changePos(){
  if(gameState === 0){
    if(keyIsDown(32)){  
      engine_sound.play();
      engine_sound.setVolume(0.3);
      speed = 1.5;
      player.body.position.x += speed * Math.cos(player.body.angle * Math.PI/180);
      player.body.position.y += speed * Math.sin(player.body.angle * Math.PI/180);
      
    }
    if(!keyIsDown(32)){
      engine_sound.stop();
    }

    if(keyIsDown(RIGHT_ARROW)){
      Body.rotate(player.body, PI);
    } 
    if(keyIsDown(LEFT_ARROW)){
      Body.rotate(player.body, -PI);      
    }
  }
}



function play(){
  
  if(gameState === 0){
    obstacle.speed = 2;
    for(var i=0; i<obstacles.length; i++){
      obstacles[i].display();
    }
    
  }
}

function lose(){
  if(gameState === 1){
    engine_sound.stop();
    obstacle.speed = 0;
    for(var i=0; i<obstacles.length; i++){
      obstacles[i].display();
    }
    Body.setStatic(player.body,true);
    

    textSize(50);
    fill('black');
    textFont("GEORGIA");
    textStyle(BOLD);
    text('You Lose :(', 70, height/2);
    textSize(20);
    text('Your Score: '+score, width/2 - 50, height/2+ 50);

  }
}
/*
function win(){
  if(gameState === 2){
    engine_sound.stop();
    obstacle.speed = 0;
    for(var i=0; i<obstacles.length; i++){
      obstacles[i].display();
    }
    var target = new Target();
    target.display();
    Body.setStatic(player.body,true);


    textSize(50);
    fill('black');
    textFont("GEORGIA");
    textStyle(BOLD);
    text('You WIN! :)', 70, height/2 + 30);
  }
}
*/