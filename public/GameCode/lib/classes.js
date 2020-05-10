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
    /*id, image, name*/
    constructor( id, image, name) {
        this.id = id;
        this.image = image;
        this.name = name;
    }
};
   
class dishes {
    /*id, image, name, recipes*/
    constructor(id, image, name, recipes){
        this.id = id;
        this.image = image;
        this.name = name;
        this.recipes = recipes;
    };


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

const FilterFoodByID = id =>{
    let LocalResponse = 'N/A';
    for(let object of ingredientsClasses){
        if(id == object.id){
            LocalResponse = object;
        };
    };
};


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}