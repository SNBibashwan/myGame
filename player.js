class Player{
    constructor(x,y,angle){

        var options ={
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,50,20,options);
        this.x = x;
        this.y = y;
        this.width=50;
        this.height=20;
        this.image = flameImg;
        this.Visibility = 0;
        
        Matter.Body.setAngle(this.body, angle);

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill('aquamarine');
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        if(gameState === 0){
            if(keyDown(32)){
                this.Visibility = 255;
                tint(255,this.Visibility);
            }else{
                this.Visibility = 0;
                tint(255,this.Visibility);
            }
        }else{
            this.Visibility = 0;
            tint(255,this.Visibility);
        }
        image(this.image, -78, -29, 60,60);
        pop();
    }


    
    player_update(){
        var pos = this.body.position;
        if(pos.y - this.height<= 0){
            pos.y = this.height;
        }
        
        if(pos.x >= width){
            pos.x = width;
        }
        
        else if(pos.x <= 0){
            pos.x = 0;
        }
        
        if(pos.y + this.height > height){
            pos.y = height - this.height;
            gameState = 1;
        }
    }
}