const CheckIfMouseInRect = (button, mx, my) =>{
    
    if (mx > button.x && mx < button.x + button.w && my > button.y && my < button.y + button.h){
        return true;
    }else{
        return false;
    };

}

const BetterText = (string, x, y) => {

    fill(0);
    text(string, x + 2, y);
    text(string, x + 2, y + 2);
    text(string, x + 2, y - 2);
    text(string, x - 2, y);
    text(string, x - 2, y + 2);
    text(string, x - 2, y - 2);
    text(string, x, y + 2);
    text(string, x, y - 2);

    fill(255);
    text(string, x, y);

}

class NewButton{

    constructor(x, y, w, h, image){

        if(x != null){
            this.x = x;  
        }else{
            this.x = 0;
        }

        if(y != null){
            this.y = y;  
        }else{
            this.y = 0;
        }
        
        if(w != null){
            this.w = w;  
        }else{
            this.w = 0;
        }

        if(x != null){
            this.h = h;  
        }else{
            this.h = 0;
        }

        this.image = image;

    }

    draw(){

        if(this.image == null){
            rect(this.x, this.y, this.w, this.h);
        }else{
            image(this.image, this.x, this.y, this.w, this.h);
        }

    }

    hovered(func){
        if(CheckIfMouseInRect(this, mouseX, mouseY)){
            func();
            
        };
    }

    pressed(func){
        if(CheckIfMouseInRect(this, mouseX, mouseY)){
            func();
        };
    }

}


class ingredients {
    /*na = name, PosX = X, PosY = Y, w = width, h = heigth, pr = price, wa = way of the image; */
    constructor(n,posX, posY, w, h, pr, wa, co) {
        this.n = n;
        this.x = (width/2 + posX); 
        this.y = posY;
        this.w = w;
        this.h = h;
        this.pr = pr;
        this.wa = wa;
        this.co = 255;
        this.BeingHold = false;
        this.MouseDistance = {posX, posY};

    }
    clicked(){  
        if (CheckIfMouseInRect(this, mouseX, mouseY)) {
            this.BeingHold = true;
            this.MouseDistance = {x: mouseX - (this.x + this.w/2),y: mouseY - (this.y + this.h/2)};
        } 
    }
    
    rele(){
            this.BeingHold = false;
    }
    
    show(){

    if(this.BeingHold){
        this.co = 0;
        let SquareMiddleX = mouseX - (this.w/2) - this.MouseDistance.x;
        let SquareMiddleY = mouseY - (this.h/2) - this.MouseDistance.y;

        if(windowWidth > SquareMiddleX + this.w && SquareMiddleX > 0){
        this.x = mouseX - (this.w/2) - this.MouseDistance.x;
        }else if(SquareMiddleX <= 0){
            this.x = 0;
        }else if(windowWidth < SquareMiddleX + this.w){
            this.x = windowWidth - this.w;
        }

        if(windowHeight > SquareMiddleY + this.h && SquareMiddleY > 0){
            this.y = mouseY - (this.h/2) - this.MouseDistance.y;
        }else if (SquareMiddleY <= 0){
            this.y = 0;
        }else if (windowHeight < SquareMiddleY + this.h){
            this.y = windowHeight - this.h;
        }

    }else{
        this.co = 255;
    }



    if(this.y > 420 && this.y < 680 && this.x > 226 && this.x < 1000){
        textAlign(CENTER, CENTER);
        fill(0);
        textSize(12);
        text(this.pr + "¥", this.x + 32, this.y + this.h + 10)
    }

    fill(this.co)
    rect(this.x, this.y, this.w, this.h);
    
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(12);
    text(this.n,this.x + 32, this.y + 32);
    
    }
};
   
class food { 
    constructor(n,recipe1,recipe2,recipe3, pr, wa) {
        this.n = n;
        this.recipe1 = recipe1;
        this.recipe2 = recipe2;
        this.recipe3 = recipe3;
        this.pr = pr;
        this.wa = wa;
    }


    show(){
        fill(0); 
        rect((width/2 + 170), 205, 64, 64);
    
        textAlign(CENTER, CENTER);
        fill(0);
        textSize(12);
        text(this.n,(width/2 + 200), 279);
    }
}


class DecorationMarketClass{

    constructor(id, price){
        this.id = id;
        this.price = price;
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
    };

    draw(){

    };

    pressed(){

    };



};

 class dec{
     /*na = name,PosX = X, PosY = Y, w = width, h = heigth, rep = reputation value, pr = price, wa = way of the image; */
    constructor(n,posX, posY, w, h, rep, pr, wa, co){
     this.n = n;
     this.x = (width/2 + posX); 
     this.y = posY;
     this.w = w;
     this.h = h;
     this.rep = rep;
     this.pr = pr;
     this.wa = wa;
     this.co = 255;
     this.BeingHold = false;
     this.MouseDistance = {posX, posY};
    }
    
    clicked(){  
        if (CheckIfMouseInRect(this, mouseX, mouseY)) {
            this.BeingHold = true;
            this.MouseDistance = {x: mouseX - (this.x + this.w/2),y: mouseY - (this.y + this.h/2)};
        } 
    }
    
    rele(){
            this.BeingHold = false;
    }
    
    show(){

    if(this.BeingHold){
        this.co = 0;
        let SquareMiddleX = mouseX - (this.w/2) - this.MouseDistance.x;
        let SquareMiddleY = mouseY - (this.h/2) - this.MouseDistance.y;

        if(windowWidth > SquareMiddleX + this.w && SquareMiddleX > 0){
        this.x = mouseX - (this.w/2) - this.MouseDistance.x;
        }else if(SquareMiddleX <= 0){
            this.x = 0;
        }else if(windowWidth < SquareMiddleX + this.w){
            this.x = windowWidth - this.w;
        }

        if(windowHeight > SquareMiddleY + this.h && SquareMiddleY > 0){
            this.y = mouseY - (this.h/2) - this.MouseDistance.y;
        }else if (SquareMiddleY <= 0){
            this.y = 0;
        }else if (windowHeight < SquareMiddleY + this.h){
            this.y = windowHeight - this.h;
        }

    }else{
        this.co = 255;
    }

    if(this.y == 700){
        textAlign(CENTER, CENTER);
        fill(0);
        textSize(12);
        text(this.pr + "¥", this.x + 32, this.y + this.h + 10)
        text(this.rep, this.x + 32, this.y + this.h + 20)
    }

    fill(this.co)
    rect(this.x, this.y, this.w, this.h);
    
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(12);
    text(this.n,this.x + 32, this.y + 32);
    
    }
};


class NewFurniture {
    constructor(id, image, rep, sizeX, sizeY, price, name){
        this.id = id;
        this.name = name;
        this.reputation = rep;
        this.image = image;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.price = price;

        this.amount = 0;

        //Related to drawing
        this.x = 0;
        this.y = 0;

        this.dragged = false;
        this.mouseOffSet = {x: 0, y: 0};
    };

    drawSlot(amount){
        
        this.amount = amount;

        if(this.dragged == true){
            amount -= 1;
        };

        fill(0, 0, 0, 50);
        strokeWeight(3);
        rect(this.x, this.y, 100, 100);
        fill(255);
        image(this.image, this.x + 18, this.y + 18, 64, 64);
        textSize(20);
        BetterText(amount, this.x + 90, this.y + 90);
        if(amount == 0){
            fill(0, 0, 0, 50);
            rect(this.x, this.y, 100, 100);
        };
            if(this.dragged){
                image(this.image, mouseX, mouseY, 64, 64);
            };



            if(mouseX > this.x && mouseX < this.x + 100 && mouseY > this.y && mouseY < this.y + 100 && this.amount > 0){
                fill(181, 0, 18, 150);
                rect(mouseX, mouseY - 90, 200, 90, 20);
                textAlign(CENTER, CENTER);
                BetterText(this.name + '\n Rep. Points: ' + this.reputation + '\n Price: ' + this.price, mouseX + 100, mouseY - 42.5);
            };
        
    };

    pressed(){
        if(mouseX > this.x && mouseX < this.x + 100 && mouseY > this.y && mouseY < this.y + 100 && this.amount > 0){
            this.dragged = true;
            this.mouseOffSet.x = this.x - mouseX;
            this.mouseOffSet.y = this.y - mouseY;
        };
    };

    released(){

        if(this.dragged && MouseOnTile.x != null && MouseOnTile.y != null){
            this.dragged = false;
            if(typeof(PlayerRestaurantFurniture) == typeof([])){

                let LocalExists = false;
                for(let Part of PlayerRestaurantFurniture){
                    if(Part.item_x == MouseOnTile.x && Part.item_y == MouseOnTile.y){
                        LocalExists = true;
                    };
                };
                
                if(!LocalExists){
                    PlayerRestaurantFurniture.push({item_id: this.id, user_id : UserID, item_x : MouseOnTile.x, item_y : MouseOnTile.y});
                    httpPost('/post/addToRestaurant', {item_id: this.id, id : UserID, x: MouseOnTile.x, y: MouseOnTile.y}, data =>{
                    this.dragged = false;
                    UpdateInventoryRequest();
                    UpdateRestaurantRequest();
                    });
                    }else{
                        this.dragged = false;
                };
            };



            }else if(this.dragged){
                this.dragged = false;
            }
    };

};

const FilterFurnitureByID = id =>{
    let LocalResponse = 'N/A';
    for(let object of furniture){
        if(id == object.id){
            LocalResponse =  object;
        }
    };
    return LocalResponse;
};


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}