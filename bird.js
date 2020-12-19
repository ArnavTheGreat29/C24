class Bird{

    constructor(x,y){
        this.bird = Bodies.rectangle(x,y,50,50)
        World .add(world,this.bird)
    }

    display(){
        rectMode(CENTER)
        fill ("red")
        this.bird.position.x = mouseX
        this.bird.position.y = mouseY
        rect(this.bird.position.x,this.bird.position.y,50,50)

    }

}