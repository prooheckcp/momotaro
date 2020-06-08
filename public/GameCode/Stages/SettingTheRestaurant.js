//Varibales\\

    //The background wood offset used for the animatio
    let WoodOffset = 0;

    //The input box for the restaurant name
    let inp = null;

    //The button to create the restaurant
    let InsertRestaurantName;

    //Whatever the user wrote as the name of the restaurant
    let CurrentInput = ''; 

//----------\\


//Change the current name of the restaurant whenever its updated
function myInputEvent(){
    CurrentInput = this.value();
};

const DrawTheRestaurantSetup = () =>{

    //Check if the input box already exists
    if(inp == null){

        //Create the input box for the restaurant name
        inp = createInput('');
        inp.input(myInputEvent);
        InsertRestaurantName = new NewButton(0, 0, 200, 50, DefaultRedButton);
        return;
    };


    //Add to the offset in order to animate the wood planks
    let LocalSpeed = (1 * deltaTime/50);
    if(WoodOffset > RestaurantDefaultData.TilesSize){
        WoodOffset = 0;
    }else{
        WoodOffset += LocalSpeed;
    };

    //Draw the background wood planks
    for(let i = -1; i < windowWidth/RestaurantDefaultData.TilesSize; i++){
        for(let j = -1; j < windowHeight/RestaurantDefaultData.TilesSize; j++){
        image(woodFloorTile, i * RestaurantDefaultData.TilesSize + WoodOffset, j * RestaurantDefaultData.TilesSize, RestaurantDefaultData.TilesSize, RestaurantDefaultData.TilesSize);
        };
    };

    //window frame
    image(middleFrame, windowWidth/2 - 300, windowHeight/2 - 100, 600, 200);

    //Display the window text
    textSize(30);
    textAlign(CENTER);
    BetterText('Set the restaurant name:', windowWidth/2, windowHeight/2- 60);

    //Input box\\
        inp.position(windowWidth/2 - 250, windowHeight/2 - 25);
        inp.size(500, 75);
        inp.style('font-size', '40px');
        inp.style('background-color', 'rgba(0,0,0,0.7)');
        inp.style('color', 'white');
    //----------\\    

    //Draw the input box\\
        InsertRestaurantName.x = windowWidth/2 - 100;
        InsertRestaurantName.y = windowHeight/2 + 150;
        InsertRestaurantName.w = 200;
        InsertRestaurantName.h = 50;
        InsertRestaurantName.hovered(()=>{tint(210);
            InsertRestaurantName.w = 220;
            InsertRestaurantName.h = 55;
            InsertRestaurantName.x = windowWidth/2 - 110;
            InsertRestaurantName.y = windowHeight/2 + 147.5;
        });
        InsertRestaurantName.draw();
        noTint();
        textSize(35);
        textAlign(CENTER, CENTER);
        BetterText('Submit', windowWidth/2, windowHeight/2 + 175);
    //-------------------\\

};


const SettingTheRestaurantMousePressed = () =>{

    //Clicked the button in order to create the restaurant
    InsertRestaurantName.pressed(() => {
        httpPost('/Post/CreateRestaurant', {id: UserID, resName: CurrentInput}, data =>{

            Stage = 'Default';
            UpdateRestaurantRequest();
            UpdateInventoryRequest();
            UpdateRestaurantStats();
            inp.remove();
            inp = null;
        })});

};