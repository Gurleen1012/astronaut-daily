const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle=45;

var top, ground, left,right
function setup() {
  createCanvas(400,400)
  engine = Engine.create();
  world = engine.world;

 
  var ball_options={
      restitution: 1.5,
      frictionAir: 0.005
  }

  ball = Bodies.circle(100,10,40,ball_options);
  World.add(world,ball)


    ground = new Ground(200,390,400,20)
 
    con = Matter.Constraint.create({
        pointA: {x:200 , y:20},
        bodyB: ball,
        length: 200,
        stiffness: 0.1
    })
    World.add(world,con)
   
   
    rectMode(CENTER)
    ellipseMode(RADIUS)

 

}



function keyPressed(){

    if(keyCode==RIGHT_ARROW){
        Matter.Body.applyForce(ball , {x:0 , y:0} , {x:0.1 , y:0})
    }

}

function draw() 
{
    background(51);
    
    ground.show()
  
    push()
    strokeWeight(2)
    stroke(255)
    line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y)
    pop()
  
    ellipse(ball.position.x,ball.position.y,20);

   Engine.update(engine);


   
}

