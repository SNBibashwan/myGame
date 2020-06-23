class Obstacle{
    constructor(){
        var ordinate = random(60, width - 60);
        var constant = random(100, 130);
        this.left = ordinate - constant/2;
        this.right = width - (ordinate + constant/2);
        this.height = 20;
        this.speed = 2;
        this.x = 0;
        this.y = 0;
    }

    display(){
        fill("red")
        rect(this.x, this.y, this.left, this.height)
        rect(width-this.right, this.y, this.right, this.height)
    }

    update(){
        this.y += this.speed;
    }
        
    hits(){
        if((player.body.position.x <= this.left || player.body.position.x >= width-this.right) &&
        (player.body.position.y - player.height <= this.y + this.height && player.body.position.y + player.height >= this.y - this.height))
        {
            return true;
        }

    }

    score(){
        if((player.body.position.y + player.height <= this.y - this.height)
        && !(player.body.position.y + player.height + 5 <= this.y - this.height)){
            return true;
        }else{
            return false;
        }
    }
    
}
