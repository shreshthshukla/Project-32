class Ball {
	constructor(x,y,r){
		var options={
			restitution:1,
			friction:1,
			density:1.2
			}
		this.r=r
		this.image=loadImage("AngryBall.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        this.smokeImage = loadImage("smoke.png");
        // this.trajectory =[];
		World.add(world, this.body);

	}
	display(){
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(CENTER)
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()

            // if(this.body.velocity.x > 10 && this.body.position.x > 200){
            //     var position = [this.body.position.x, this.body.position.y];
            //     this.trajectory.push(position);
            //   }
             
          
            //   for(var i=0; i<this.trajectory.length; i++){
            //     image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
            //   }
			
	}

}