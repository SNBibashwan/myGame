class Target{
    constructor(){
        this.x = width/2;
        this.y = 0;
        this.width=30;
        this.height=70;
        this.tspeed = 2;
        this.image = targetImg;
    }

    display(){

        image(targetImg,this.x,this.y,this.width,this.height);
    }

    dist(player){
        if(Math.sqrt((player.body.position.x - this.x)*(player.body.position.x - this.x) + ((player.body.position.y - this.y)*(player.body.position.y - this.y))) <= 100){
            return true;        
        }else{
            return false;
        }
    }
}