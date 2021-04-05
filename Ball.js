class Ball {
	constructor(x,y){
		var options={
			restitution:0.6,
			friction:1,
			density:1.3
			}
		this.height = 80;
        this.width = 100;
		this.image=loadImage("AngryBall.png");
		this.body = Bodies.rectangle(x, y, 100, 80, options)
        this.smokeImage = loadImage("smoke.png");
        this.trajectory =[];
		World.add(world, this.body);

	}
	display(){
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(CENTER)
			image(this.image, 0,0,this.width, this.height)
			pop()

            if(this.body.velocity.x > 10 && this.body.position.x > 200){
                var position = [this.body.position.x, this.body.position.y];
                this.trajectory.push(position);
              }
             
          
              for(var i=0; i<this.trajectory.length; i++){
                image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
              }
			
	}

}