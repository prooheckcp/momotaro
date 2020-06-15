//A simple button class
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

            //Open window sound\\
            ClickingSound.setVolume(VolEffectsValue);
            ClickingSound.play();
        
        };
    }

}

//Food related classes\\

//Creates an ingredient class, this includes interections within the inventories
class ingredients {
    /*id, image, name*/
    constructor( id, image, name) {
        /*Ingredient info*/
        this.id = id;
        this.image = image;
        this.name = name;

        /*Dynamic variables*/
        this.amount = 0;
        this.dragged = 0;

        /*Display positions*/
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
    }

    drawSlot(){
        /*To display in the cooking stage*/

            if(CheckIfMouseInRect(this, mouseX, mouseY)){
                fill(242, 255, 0, 150);
            }else{
                fill(0, 50);
            }

            //Squared background of the ingredient
            rect(this.x, this.y, this.w, this.h);
            
            //Image of them igredient
            image(this.image, this.x, this.y, this.w, this.h);

            //Black it out if doesnt have any more on its amount
            if(this.amount <= 0){
                rect(this.x, this.y, this.w, this.h); 
            }

            //The amount of each item which you own
            textAlign(RIGHT, BOTTOM);
            textSize(30);
            BetterText('' + this.amount + '', this.x + this.w, this.y + this.h);

            if(this.dragged){
                image(this.image, mouseX, mouseY, 60, 60);
            };

    };

    hoveredSlot(){

        if(CheckIfMouseInRect(this, mouseX, mouseY)){
            
            //Frame displaying information about this item
            fill(0, 120);
            rect(mouseX, mouseY, 200, 100, 20);
            textAlign(CENTER, TOP);
            textSize(35);
            BetterText(''+ this.name +'', mouseX + 100, mouseY + 10)
            textSize(20);
            textAlign(LEFT, TOP);
            BetterText('Amount: '+ this.amount +'', mouseX + 10, mouseY + 60)
        };
    };

    ClickedSlot(){
        //Clicked thee slot with the mouse in order to enable de drag state 
        if(CheckIfMouseInRect(this, mouseX, mouseY)){


            if(this.amount > 0){
                LowerTheAmountOfIngredients(this.id);
                this.dragged = true;
            };
        }
    };

    ReleasedSlot(){
    
    if(this.dragged){
    
            let LocalFoundAslot = false;

            for(let i = 0; i < 4; i++){

                let LocalBackgroundFrameX = windowWidth/2 - 500;
                let LocalBackgroundFrameY = windowHeight/2 - 300;
                //Variables\\
                let LocalSquareX = LocalBackgroundFrameX + 150 + 200 * i;
                let LocalSquareY = LocalBackgroundFrameY;

                
                if(mouseX > LocalSquareX && mouseY > LocalSquareY + 100 && mouseX < LocalSquareX + 100 && mouseY < LocalSquareY + 200 && this.dragged){
                
                    if(i == 0){
                        //Hovering the first slot
                        if(ItemsToBeCrafted.slot1 != ''){
                            RaiseTheAmountOfIngredients(ItemsToBeCrafted.slot1);
                        };
                        ItemsToBeCrafted.slot1 = this.id;
                        LocalFoundAslot = true;
                    }else if(i == 1){
                        //Hovering the second slot
                        if(ItemsToBeCrafted.slot2 != ''){
                            RaiseTheAmountOfIngredients(ItemsToBeCrafted.slot2);
                        };
                        ItemsToBeCrafted.slot2 = this.id;
                        LocalFoundAslot = true; 
                    }else if(i == 2){
                        //Hover the third slot
                        if(ItemsToBeCrafted.slot3 != ''){
                            RaiseTheAmountOfIngredients(ItemsToBeCrafted.slot3);
                        };
                        ItemsToBeCrafted.slot3 = this.id;
                        LocalFoundAslot = true;
                    }
                }


            }

            //Released the mouse putting the item back to its place
            
            if(LocalFoundAslot){
                
            }else{
                RaiseTheAmountOfIngredients(this.id);
            };

            this.dragged = false;
        };
    }
};
   
//Creates a dish class
class dishes {
    /*id, image, name, recipes*/
    constructor(id, image, name, recipes){
        this.id = id;
        this.image = image;
        this.name = name;
        this.recipes = recipes;
        
        
    };

    hoveredSlot(x, y){

        if(mouseX > x && mouseX < x + 100 && mouseY > y && mouseY < y + 100){
            
            //Frame displaying information about this item
            fill(0, 120);
            rect(mouseX + 20, mouseY, textWidth(this.name), 50, 20);
            textAlign(CENTER, TOP);
            textSize(35);
            BetterText(''+ this.name +'', 20 + mouseX + textWidth(this.name)/2, mouseY + 10)
        };
    };

};



//The furnitures classes, this includes the interections on the decorating menu
class NewFurniture {
    constructor(id, image, rep, sizeX, sizeY, price, name){
        this.id = id;
        this.name = name;
        this.reputation = rep;
        this.image = image;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.price = price;

        this.amount = null;

        //Related to drawing
        this.x = 0;
        this.y = 0;

        this.dragged = false;
        this.mouseOffSet = {x: 0, y: 0};
    };

    drawSlot(amount){

        if(this.amount == null){
            this.amount = amount;
        };

        fill(0, 0, 0, 50);
        strokeWeight(3);
        rect(this.x, this.y, 100, 100);
        fill(255);
        image(this.image, this.x + 18, this.y + 18, 64, 64);
        textSize(20);
        BetterText(this.amount, this.x + 90, this.y + 90);
        if(this.amount == 0){
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
            this.amount -= 1;
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

                    //Reduce the inventory amount
                    for(let i = 0; inventory.length > i; i++){
                        if(inventory[i].item_id == this.id){

                            inventory[i].item_amount -= 1;

                        };
                    };

                    this.dragged = false;

                }else{
                        this.amount += 1;
                        this.dragged = false;
                        
                };
            };



            }else if(this.dragged){
                this.dragged = false;
                this.amount += 1;
            }
    };

};



//UI elements for the main part of the game\\

    //Create a reputation point displayer
    class ReputationPointsDisplayer{
        constructor(){
            this.x = 0;
            this.y = 0;
            this.w = 0;
            this.h = 0;
        }

        draw(){
            image(MoneyFrame, this.x, this.y, this.w, this.h);
            textAlign(CENTER, CENTER);
            textSize(20)

            let LocalPolishedNumber = numberWithCommas(CurrentPrestigePoints)

            BetterText('Rep. points: ' + LocalPolishedNumber + '', this.x + this.w/2, this.y + this.h/2);
        }
    }

    //Create a yen displayere bar
    class MoneyDisplayer{
        constructor(){
            this.x = 0;
            this.y = 0;
            this.w = 0;
            this.h = 0;
        }

        draw(){
            image(MoneyFrame, this.x, this.y, this.w, this.h);
            textAlign(CENTER, CENTER);
            textSize(25)

            let LocalPolishedNumber = numberWithCommas(restaurantStats.money)

            BetterText('¥' + LocalPolishedNumber + '', this.x + this.w/2, this.y + this.h/2);
        }
    }

    //Create an EXP bar displayer
    class XPbar{
        constructor(){
            this.x = 0;
            this.y = 0;
            this.w = 0;
            this.h = 0;
        };

        draw(){



            //Background of the bar
            fill(0);  
            rect(this.x, this.y, this.w, this.h, 10);

            //Fill part
            fill(225, 212, 0);
            rect(this.x, this.y, (restaurantStats.exp * this.w)/CalculateRequiredEXP(restaurantStats.level), this.h, 10);
            fill(255);
            //Star
            image(LevelPortal, this.x - 50, this.y - 50 + this.h/2, 100, 100);
            textAlign(CENTER, CENTER);
            textSize(25);
            BetterText('' + restaurantStats.level + '', this.x-1, this.y + 10 +this.h/2 );



        };

        
        hovered(){
            if(CheckIfMouseInRect(this, mouseX, mouseY)){
                textSize(28);
                textAlign(CENTER, CENTER);
                BetterText('Exp: ' + restaurantStats.exp + '/' + CalculateRequiredEXP(restaurantStats.level), this.x + this.w/2, this.y + this.h/2);
            };
        };

    };
//------------------------------------------\\


//Create an Volume bar displayer
class Volume{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.WVolume = 344;
        this.dragged = false;
        this.mouseOffSet = {x: 0, y: 0};
    };

    draw(){

        //Background of the bar
            fill(117, 0, 0);  
            rect(this.x, this.y, this.w, this.h);

        //Fill part
            fill(36, 209, 17);
            rect(this.x, this.y, this.WVolume, this.h);

        if(this.dragged){
            this.WVolume = mouseX - this.x;
        }
        if(this.WVolume < 0){
            this.WVolume = 0;
        }
        if(this.WVolume >= 344){
            this.WVolume = 344;
        }
    };

    pressed(){
        if(mouseX > this.x && mouseX < this.x + 344 && mouseY > this.y && mouseY < this.y + 50){
            this.dragged = true;

        }
    };
    
    released(){
        this.dragged = false;
    };

};
//------------------------------------------\\



//Not sure if needed, may delete later
//Create a NPC
class npc {
    constructor(posX, posY, img) {
      this.posX = posX;
      this.posY = posY;
      this.img = img;
      this.speed = 5;
    }
  
    draw_npc() {
      rect(this.posX-12, this.posY-12, 25,25);
    }
  
    get_posX() {
      return this.posX;
    }
  
    get_posY() {
      return this.posY;
    }
  
    set_posX(posX) {
      this.posX = posX;
    }
  
    set_posY(posY) {
      this.posY = posY;
    }
  
    moveX(sig) {
      this.posX += this.speed*sig;
    }
  
    moveY(sig) {
      this.posY += this.speed*sig;
    }
  
}