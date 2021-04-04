class Pinkball {
	constructor(x,y){
		var options={
			restitution:1,
			friction:1,
			density:1.2
			}
		this.height = 80;
        this.width = 80;
		this.image=loadImage("pinkball.png");
		this.body = Bodies.rectangle(x, y, 80, 80, options)
        // this.Visiblity = 255;
		World.add(world, this.body);

	}
	display(){
			// var pos=this.body.position;		
			// push()
			// translate(pos.x, pos.y);
			// fill(255,0,255)
			// imageMode(CENTER);
			// image(this.image, 0,0,this.width,this.height);
			// pop()

            // if(this.body.speed < 3){
                var pos=this.body.position;	
			    push()
			    fill(255,0,255)
			    imageMode(CENTER);
			    image(this.image, pos.x, pos.y, this.width, this.height);
			    pop()
            //    }
            //    else{
            //      World.remove(world, this.body);
            //      push();
            //      this.Visiblity = this.Visiblity - 5;
            //      tint(255,this.Visiblity);
            //      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            //      pop();
            //    }
               
			// }
            
            // score(){
            //   if(this.Visiblity<0 && this.Visiblity>-1005){
            //     score++
            //   }
			
	}

}