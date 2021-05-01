
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,body

var particle = [];
var plinko = [];
var division = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
	world = engine.world;

  ground = new Ground(240,795,480,10)
    
  for(var k = 0; k <= width; k = k + 80){
    division.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
    
  }

  for(var j = 40; j <= width; j=j + 50){
    plinko.push(new Plinko(j,50,12))
  }
  for(var j = 15; j <= width-10; j=j + 50){
    plinko.push(new Plinko(j,125,12))
  }
  for(var j = 40; j <= width; j=j + 50){
    plinko.push(new Plinko(j,200,12))
  }
  for(var j = 15; j <= width - 10; j=j + 50){
    plinko.push(new Plinko(j,275,12))
  }
  for(var j = 40; j <= width; j=j + 50){
    plinko.push(new Plinko(j,350,12))
  }
  for(var j = 15; j <= width - 10; j=j + 50){
    plinko.push(new Plinko(j,425,12))
  }

  Engine.run(engine);
}

function draw() {
  background(0);  
  Engine.update(engine)
  drawSprites();

  ground.display();
  
  for (var i = 0; i < division.length; i++) {
    division[i].display();
  }
  for(var k = 0; k < plinko.length; k++) {
    plinko[k].display();
  }
  
  if (frameCount % 80 === 0) {
    particle.push(new Particle(random(width/2-10, width/2+10),10,10));
  }
  
  for (var h = 0; h < particle.length; h++) {
    particle[h].display();
  }

}
