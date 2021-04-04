class Wood2 extends Wood1{
    constructor(x,y,width,height,angle){
      super(x,y,width,height,angle);
      this.image = loadImage("wood2.png");
      Matter.Body.setAngle(this.body, angle);
    }
  }