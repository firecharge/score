class Slingshot{
    constructor(bodyX, pointY){
        var options = {
            bodyA: bodyX,
            pointB: pointY,
            stiffness: 0.04,
            length: 10
        }

        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }

    display(){

        image(this.sling1, 200,20);
        image(this.sling2, 170,20);
        //Image(this.sling3, 200,20)//
        if (this.Sling.bodyA){
            var pointA = this.Sling.bodyA.position;
            var pointB = this.Sling.pointB;
            push () ;
            if(pointA.x<220){            
                strokeWeight(7);
                stroke (48,22,8);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            } else {
                strokeWeight(4);
                stroke (48,22,8);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3,pointA.x+25,pointA.y-10,15,30);
            }
            pop () ;
        }
    }
    
    fly(){
        this.Sling.bodyA = null;
    }
}