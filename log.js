class Log{
    constructor(x,y,width,height,angle){
    this.width = width
    this.height= height
    
    this.log = Bodies.rectangle(x,y,width,height)
    Matter .Body.setAngle(this.log,angle)
    World. add(world,this.log)
    }

    display(){
        push ()
    rectMode(CENTER)
    fill ("brown")
    translate (this.log.position.x,this.log.position.y)
    angleMode(DEGREES)
    rotate (this.log.angle)
    rect(0,0,this.width,this.height)
    pop ()
    }
    
}