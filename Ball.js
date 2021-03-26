class Ball{
    constructor(x,y){
    var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0
    }
        this.body = Bodies.rectangle(x, y, 20, 20, options);
        this.image = loadImage("pinkball.png");
        this.Visiblity = 350;
        World.add(world,this.body);

    }
    display(){
        if(this.body.speed < 4){
         var angle = this.body.angle;
         push();
         translate(this.body.position.x, this.body.position.y);
         rotate(angle);
         imageMode(CENTER);
         image(this.image, 0, 0, this.width, this.height);
         pop();
        }
        else{
          World.remove(world,this.body);
          push();
          this.Visiblity = this.Visiblity - 10;
          tint(350,this.Visiblity);
          image(this.image, this.body.position.x, this.body.position.y, 20, 20);
          pop();
        }
        
      }
     
     score(){
       if(this.Visiblity<0 && this.Visiblity>-1005){
         score++
       }
     }
}