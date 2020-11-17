class paper {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(this.x, this.y, this.r, options);
      this.r=r;
      this.x=x;
      this.y=y;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("purple");
      circle(0, 0, this.r, this.r);
      pop();
    }
  }