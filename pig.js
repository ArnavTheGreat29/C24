class Pig{
    constructor(x,y){

    this.pig= Bodies.rectangle(x,y,50,50)
    World .add(world,this.pig)
    }
  
    display(){
     rectMode(CENTER)
     fill ("green")
     rect(this.pig.position.x,this.pig.position.y,50,50)
     
    }

}