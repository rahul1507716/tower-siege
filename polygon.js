class polygon{
 constructor(x,y){
 var options = {isStatic:false,restitution:0.3,friction:0.5,density:1.2}
 this.body = Bodies.circle(x,y,30,options);
this.image = loadImage("polygon.png");
 World.add(world,this.body);
 }
 display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);;
    fill("red");
    image(this.image,0,0,30,30);
    pop();
}
}