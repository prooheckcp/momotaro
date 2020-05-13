//Variables\\
let CurrentStoragePage = 'ingredients';
//----------\\


//UI Elements\\
let IngredientsStorageTab;
let DishesStorageTab;
let DecorationStorageTab;
let CloseStorageWindow;
//------------\\

//Storage Pages\\
let IngredientsPages = 1;
let DishesPages = 1;
let DecorationPages = 1;
//--------------\\

const setupStorageWindow = () =>{

    //Buttons\\
    IngredientsStorageTab = new NewButton(0, 0, 200, 75, MarketButton);
    DishesStorageTab = new NewButton(0, 0, 200, 75, MarketButton);
    DecorationStorageTab = new NewButton(0, 0, 200, 75, MarketButton);
    CloseStorageWindow = new NewButton(0, 0, 50, 50, CloseMark);
    //--------\\


};

const DrawStorageWindow = () =>{

    //Default stats of the window 
    let StorageMainFrameDetails = {
        x: windowWidth/2 - 500,
        y: windowHeight/2 - 300
    };

    //Header\\
    StorageWindowHeader(StorageMainFrameDetails);
    //-------\\

    if(CurrentStoragePage = 'ingredients'){
        StorageWindowIngredients(StorageMainFrameDetails);
    }else if(CurrentStoragePage = 'dishes'){
        StorageWindowDishes(StorageMainFrameDetails);
    }else if(CurrentStoragePage = 'decoration'){
        StorageWindowDecoration(StorageMainFrameDetails);
    };

};

const StorageWindowIngredients = StorageMainFrameDetails =>{

    //ingredientsInventory  the ingredients array 
    for(let i = 0; i < ingredientsInventory.length; i++){
        
        let LocalSlotInformation = {
            x: StorageMainFrameDetails.x + 10,
            y: StorageMainFrameDetails.y + 10,
            w: 100,
            h: 100,
            slotLengthX: 4,
            slotLengthY: 5
        };

        let j = i - IngredientsPages * LocalSlotInformation.x;

        let LocalDisplacementX = j * LocalSlotInformation.w;
        let LocalDisplacementY = 0;

        

        fill( 0, 50)
        rect(LocalSlotInformation.x + LocalDisplacementX, LocalSlotInformation.y + LocalDisplacementY, LocalSlotInformation.w, LocalSlotInformation.h);

    };

};


const StorageWindowDishes = () =>{

};

const StorageWindowDecoration = () =>{

};

const StorageWindowHeader = StorageMainFrameDetails =>{

    //Main Image Background
    image(StorageFrame, StorageMainFrameDetails.x, StorageMainFrameDetails.y, 1000, 600);

    //Buttons\\

        //Text details\\
        textAlign(CENTER, CENTER);
        textSize(30)
        //-------------\\

    //

    //Closing mark
    CloseStorageWindow.x = StorageMainFrameDetails.x + 930;
    CloseStorageWindow.y = StorageMainFrameDetails.y + 20;
    CloseStorageWindow.w = 50; 
    CloseStorageWindow.h = 50;

    CloseStorageWindow.hovered(()=>{
        tint(150);
        CloseStorageWindow.x -= 5;
        CloseStorageWindow.y -= 5;
        CloseStorageWindow.w += 10;
        CloseStorageWindow.h += 10;

    });
    CloseStorageWindow.draw();
    noTint();

    //Ingredients
    IngredientsStorageTab.x = StorageMainFrameDetails.x;
    IngredientsStorageTab.y = StorageMainFrameDetails.y - 75;

    IngredientsStorageTab.hovered(()=>{tint(150)});
    IngredientsStorageTab.draw();
    noTint();
    BetterText('Ingredients', StorageMainFrameDetails.x + 100, StorageMainFrameDetails.y - 37.5);
    //Dishes 
    DishesStorageTab.x = StorageMainFrameDetails.x + 220;
    DishesStorageTab.y = StorageMainFrameDetails.y - 75;

    DishesStorageTab.hovered(()=>{tint(150)});
    DishesStorageTab.draw();
    noTint();
    BetterText('Dishes', StorageMainFrameDetails.x + 320, StorageMainFrameDetails.y - 37.5);
    //Decoration
    DecorationStorageTab.x = StorageMainFrameDetails.x + 440;
    DecorationStorageTab.y = StorageMainFrameDetails.y - 75;

    DecorationStorageTab.hovered(()=>{tint(150)});
    DecorationStorageTab.draw();
    noTint();
    BetterText('Decoration', StorageMainFrameDetails.x + 540, StorageMainFrameDetails.y - 37.5);
    //--------\\

};

const StorageWindowMousePressed = () =>{

    //Tab Buttons\\
    IngredientsStorageTab.pressed(()=>{CurrentStoragePage = 'ingredients'});
    DishesStorageTab.pressed(()=>{CurrentStoragePage = 'dishes'});
    DecorationStorageTab.pressed(()=>{CurrentStoragePage = 'decoration'});
    CloseStorageWindow.pressed(()=>{StorageWindow = false});
    //------------\\
    
};