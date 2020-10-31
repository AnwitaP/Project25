class Paper {
    constructor(x, y, r) {
      var options = {
          isStatic: false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Matter.Bodies.circle(x, y, 15, options, 70);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("sprites/paper.png");      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke(0);
      fill(255);
      image(this.image, 0, 0, this.width, this.height, 5);
      pop();
    }
  };
  