class Stone{
    constructor(x, y, width, height){
        var options = {
            isStatic: false,
            friction: 1,
            restituition: 0
        }
        this.body = Bodies.rectangle(x, y, width, height);
        this.height =  height;
        this.width = width;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}