
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
  world = engine.world;
  
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine,options);
  World.add(world,mConstraint);

	//Create the Bodies Here.
roof = new Roof(width /2,height /4,240,20);
Bob1 = new Bob(720,700,40);
Bob2 = new Bob(760,700,40);
Bob3 = new Bob(800,700,40);
Bob4 = new Bob(840,700,40);
Bob5 = new Bob(880,700,40);	
constraint1=
{ 
	bodyA:Bob1.body, bodyB:roof.body, stiffness :0.04, }

var pendulum1=Constraint.create(constraint1)
World.add(world, pendulum1);

constraint2=
{ 
	bodyA:Bob2.body, bodyB:roof.body, stiffness :0.04, }

var pendulum2=Constraint.create(constraint2)
World.add(world, pendulum2);
  
constraint3=
{ 
	bodyA:Bob3.body, bodyB:roof.body, stiffness :0.04, }

var pendulum3=Constraint.create(constraint3)
World.add(world, pendulum3);

constraint4=
{ 
	bodyA:Bob4.body, bodyB:roof.body, stiffness :0.04, }

var pendulum4=Constraint.create(constraint4)
World.add(world, pendulum4);

constraint5=
{ 
	bodyA:Bob5.body, bodyB:roof.body, stiffness :0.04, }

var pendulum5=Constraint.create(constraint5)
World.add(world, pendulum5);

}



function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
  drawSprites();

  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  roof.display();
  line(Bob1.body.position.x,Bob1.body.position.y,roof.body.position.x-80,roof.body.position.y);
 
  line(Bob2.body.position.x,Bob2.body.position.y,roof.body.position.x-40,roof.body.position.y);

  line(Bob3.body.position.x,Bob3.body.position.y,roof.body.position.x,roof.body.position.y);

  line(Bob4.body.position.x,Bob4.body.position.y,roof.body.position.x+40,roof.body.position.y);

  line(Bob5.body.position.x,Bob5.body.position.y,roof.body.position.x+80,roof.body.position.y);

}
/*
function keyPressed() 
{ if (keyCode === UP_ARROW) 
{ 
	Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-80,y:-80}); } }
*/
function mouseDragged() { 
  Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY }); 
}






