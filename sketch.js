
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//var particles;
var divisons = [];
var divisonsHeight = 300;
var particles = [];
var plinkos = []; 
var line
function preload()
{
	
}



function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);

  
  for (var i = 0; i<=width; i= i+80) {
      divisons.push(new Division(i,height-divisonsHeight/2, 10, divisonsHeight));
  }

  for (var j=75; j<=width; j = j+50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }
  for (var j=75; j<=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }
  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }

  

 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  textSize(35)
  text("score : "+score,20,40);
  fill(255)
  drawSprites();

  textSize(35)
  text(" 500 ",5,500);
  text(" 500 ",80,500);
  text(" 500 ",160,500);
  text(" 500 ",240,500);
  text(" 100 ",320,500);
  text(" 100 ",400,500);
  text(" 100 ",480,500);
  text(" 200 ",560,500);
  text(" 200 ",640,500);
  text(" 200 ",720,500);



  
  for (var n = 0; n<divisons.length; n++) {
    divisons[n].display();
  }

  if (frameCount %60 === 0) {
    particles.push(new Particle(random(width/2-30, width/2+30),10,10));
  }
  
  for (var h = 0; h<particles.length; h++) {
    particles[h].display();
  }

  for (var j = 0; j<plinkos.length; j++) {
    plinkos[j].display();
  }


  ground.display();
  if(gameState =="END"){
     background("black");
     fill("red");
     textSize(100);
     text("Game Over",200,400);
  }
   for(var k = 0; k < plinkos.length; k++){
     plinkos[k].display();
   }
}

  if(particles!=null)
  {
     //particle.display();
     
      if (particle.Body.position.y>700)
      {
            if(particle.Body.position.y < 300)
        {
         score=score=500;
         particle=null;
         if (count>= 5) gameState = "END";
        }
      }


      else if (particle.Body.position.x < 600 && particle.Body.position.x > 301)
       {
            score = score + 100;
            particle=null;
            if ( count>= 5 ) gameState = "END";

       }
       

       else if (particle.Body.position.x < 900 && particle.Body.position.x > 601 )
             {
                score = score + 200;
                particle=null;
                if (count>= 5) gameState = "END";
             }






  }


function mousePressed() {
    if(gameState !== "END") {
      count++;
    particles = new particle(mouseX,50,10,10) ;
    }



}