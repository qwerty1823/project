class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1 = loadImage ("sprites/sling1.png");
        this.sling2 = loadImage ("sprites/sling2.png");
        this.sling3 = loadImage ("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20)
        image(this.sling2,175,20)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("#301608")
            if(pointA.x < 220){
              strokeWeight(6);
              line(pointA.x-20, pointA.y, pointB.x-10, pointB.y-35);
              line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-40);
              image(this.sling3, pointA.x-25, pointA.y-10, 10, 30);
            }
            else{
                strokeWeight(3);
                line(pointA.x-25, pointA.y, pointB.x-10, pointB.y-35);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-40);
                image(this.sling3, pointA.x+25, pointA.y-10, 10, 30);
            }
            
        }
        
        
    }
    
}