class Ground{
   
    //All the properties, creating PE bodies
    constructor(){
        //Options
        var groundOptions={
            isStatic:true,
            density:1
          }

        this.body=Bodies.rectangle(200,380,400,20,groundOptions);
        this.width=400;
        this.height=20;
        World.add(myWorld,this.body);
    }

    display(){
        var pos=this.body.position;
        //push- capture new setting
        push();
            fill("brown"); 
            stroke("Yellow")
            rectMode(CENTER);
            rect(pos.x,pos.y,this.width,this.height);
        pop();
        //pop - revert back to original setting
    }


}