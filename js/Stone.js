class Stone{
    constructor(x,y,r){
        var optiosn={
            restitution: 0.02,
            density:0.01
        }
        this.body= Bodies.circle(x,y,r,options);
        World.add(world, this.body);
 
    }
    display(){
        push();
        stroke(2);
        fill("yellow");
        ellipse(this.body.position.x, this.body.position.y, this.body.position.w, this.body.position.h);
        pop();
    }
}