//Variables\\
let ingredientsClasses = []; //The igredients classes with the info
let dishesClasses = []; //The dishes classes with the info

let ingredientsInventory = []; //The inventory of the player when it comes to ingredients
let ItemsToBeCrafted = {slot1: '', slot2: '', slot3: ''}; //The currents items within the 3 slots

let CurrentPageInCooking = 0;

//UI ELEMENTS\\
let BackToTheRestaurantButton;
let CookingRightArrow;
let CookingLeftArrow;


const CookSetUp = () => {

    /*Buttons*/
    BackToTheRestaurantButton = new NewButton(0, 0, 0, 0, CloseMark);
    CookingRightArrow = new NewButton(0, 0, 0, 0, RightYellowArrow);
    CookingLeftArrow = new NewButton(0, 0, 0, 0, LeftYellowArrow);

    /*The ingredients classes*/
    ingredientsClasses.push(new ingredients('tu' /*ID*/, tu_Image/*Image*/, 'Tuna'/*Name*/));
    ingredientsClasses.push(new ingredients('sh' /*ID*/, sh_Image/*Image*/, 'Shrimp'/*Name*/));
    ingredientsClasses.push(new ingredients('ca' /*ID*/, ca_Image/*Image*/, 'Cacoa'/*Name*/));
    ingredientsClasses.push(new ingredients('ch' /*ID*/, ch_Image/*Image*/, 'Cherry'/*Name*/));
    ingredientsClasses.push(new ingredients('eg' /*ID*/, eg_Image/*Image*/, 'Eggs'/*Name*/));
    ingredientsClasses.push(new ingredients('pa' /*ID*/, pa_Image/*Image*/, 'Pasta'/*Name*/));
    ingredientsClasses.push(new ingredients('ri' /*ID*/, ri_Image/*Image*/, 'Rice'/*Name*/));
    ingredientsClasses.push(new ingredients('wa' /*ID*/, wa_Image/*Image*/, 'Water'/*Name*/));
    ingredientsClasses.push(new ingredients('ol_oi' /*ID*/, ol_oi_Image/*Image*/, 'Olivia oil'/*Name*/));
    ingredientsClasses.push(new ingredients('br' /*ID*/, br_Image/*Image*/, 'Bread'/*Name*/));
    ingredientsClasses.push(new ingredients('fl' /*ID*/, fl_Image/*Image*/, 'Flour'/*Name*/));
    
    
    /*The dishes classes*/
    /*id, image, name, recipes (write the id of each igredient)*/
    dishesClasses.push(new dishes('no' /*id*/, noo_Image /* image*/, 'Noodles' /*Name*/, {ingredient1: 'wa', ingredient2: 'pa', ingredient3: 'ol_oi'} /*Recipes*/));  
    dishesClasses.push(new dishes('br_om' /*id*/, bre_ome_Image /* image*/, 'Bread Omelete' /*Name*/, {ingredient1: 'wa', ingredient2: 'pa', ingredient3: 'ol_oi'} /*Recipes*/));  
    dishesClasses.push(new dishes('tu_su' /*id*/, tun_sus_Image /* image*/, 'Tuna Sushi' /*Name*/, {ingredient1: 'wa', ingredient2: 'pa', ingredient3: 'ol_oi'} /*Recipes*/));  
    dishesClasses.push(new dishes('sh_su' /*id*/, shi_sus_Image /* image*/, 'Shimp Sushi' /*Name*/, {ingredient1: 'wa', ingredient2: 'pa', ingredient3: 'ol_oi'} /*Recipes*/));  
    dishesClasses.push(new dishes('ch_ca' /*id*/, cho_cak_Image /* image*/, 'Chocolate Cake' /*Name*/, {ingredient1: 'wa', ingredient2: 'pa', ingredient3: 'ol_oi'} /*Recipes*/));  
    dishesClasses.push(new dishes('ch_pi' /*id*/, che_pie_Image /* image*/, 'Cherry Pie' /*Name*/, {ingredient1: 'wa', ingredient2: 'pa', ingredient3: 'ol_oi'} /*Recipes*/));  
    
};



const CookDraw = ()=>{

    let LocalBackgroundFrameX = windowWidth/2 - 500;
    let LocalBackgroundFrameY = windowHeight/2 - 300;


    //Frame background\\
    background(45);
    image(LeaderboardsFrame, LocalBackgroundFrameX, LocalBackgroundFrameY, 1000, 600);
    image(MarketButton, LocalBackgroundFrameX, LocalBackgroundFrameY - 75, 200, 75);

    textSize(35);
    textAlign(CENTER, CENTER);
    BetterText('Cooking', LocalBackgroundFrameX + 100, LocalBackgroundFrameY - 37.5);
    //-----------------\\


    //Go back button\\
    BackToTheRestaurantButton.x = LocalBackgroundFrameX + 940;
    BackToTheRestaurantButton.y = LocalBackgroundFrameY + 10;
    BackToTheRestaurantButton.w = 50;
    BackToTheRestaurantButton.h = 50;

    BackToTheRestaurantButton.hovered(()=>{
        BackToTheRestaurantButton.x -= 5;
        BackToTheRestaurantButton.y -= 5;
        BackToTheRestaurantButton.w += 10;
        BackToTheRestaurantButton.h += 10;
        tint(190, 190, 59);
    })

    BackToTheRestaurantButton.draw();
    noTint();
    //---------------\\
    
    //Crafting bench\\

    //---------------\\

    //Inventory slots\\

    //Background of the items displayer
    fill(0, 50);
    rect(LocalBackgroundFrameX + 112.5, LocalBackgroundFrameY + 450, 775, 125);

    //Slots with each ingredient on your inventory
    for(let i = 0 + (CurrentPageInCooking * 6); i < 6 * (CurrentPageInCooking + 1) - (6 - (ingredientsInventory.length/(CurrentPageInCooking + 1))) ; i++){
        
        
        if(i < ingredientsInventory.length){
            //Local variables of each slot
            let LocalSlotX = LocalBackgroundFrameX + 137.5 + (i * 125);
            let LocalSlotY = LocalBackgroundFrameY + 462.5;

            //Squared background of the ingredient
            rect(LocalSlotX, LocalSlotY, 100, 100);
            let LocalIngredientInfo = FilterIngredientsByID(ingredientsInventory[i].ingredient_id);
            
            //Image of them igredient
            image(LocalIngredientInfo.image, LocalSlotX, LocalSlotY, 100, 100)

            //The amount of each item which you own
            textAlign(RIGHT, BOTTOM);
            textSize(30);
            //BetterText('' + ingredientsInventory[i].igredient_amount + '', LocalSlotX + 100, LocalSlotY + 100);
        };
    };

    //----------------\\


    //Arrow Buttons\\

    //Right Arrow
    CookingRightArrow.x = LocalBackgroundFrameX + 918.75;
    CookingRightArrow.y = LocalBackgroundFrameY + 462.5;
    CookingRightArrow.w = 50;
    CookingRightArrow.h = 100;

    CookingRightArrow.draw();
    noTint();

    //Left arrow
    CookingLeftArrow.x = LocalBackgroundFrameX + 31.25;
    CookingLeftArrow.y = LocalBackgroundFrameY + 462.5;
    CookingLeftArrow.w = 50;
    CookingLeftArrow.h = 100;

    CookingLeftArrow.draw(); 
    noTint();
    //--------------\\

}





const CookMousePressed = () =>{ 
    BackToTheRestaurantButton.pressed(()=>{
        Stage = 'Default';
    });
}

const CookMouseReleased = () =>{

}
