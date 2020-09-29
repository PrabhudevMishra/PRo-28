class Constraint{
    constructor(body1, body2){
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 1,
            length: 16
        }

        this.Constraint = Constraint.create(options);
        World.add(world, this.Constraint);
    }

    display(){
        var pointA = this.Constraint.bodyA.position;
        var pointB = this.Constraint.bodyB.position;
        push();
        strokeWeight(8);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
}