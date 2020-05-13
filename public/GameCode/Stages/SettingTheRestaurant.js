let WoodOffset = 0;
let inp = null;
let InsertRestaurantName;

let CurrentInput = ''; //Whatever the user wrote as the name of the restaurant

function myInputEvent(){
    CurrentInput = this.value();
};



const DrawTheRestaurantSetup = () =>{

    if(inp == null){
        inp = createInput('');
        inp.input(myInputEvent);
        InsertRestaurantName = new NewButton(0, 0, 200, 50, DefaultRedButton);
        return;
    }


    let LocalSpeed = (1 * deltaTime/50);
    if(WoodOffset > RestaurantDefaultData.TilesSize){
        WoodOffset = 0;
    }else{
        WoodOffset += LocalSpeed;
    };

    //Set the background :3
    for(let i = -1; i < windowWidth/RestaurantDefaultData.TilesSize; i++){
        for(let j = -1; j < windowHeight/RestaurantDefaultData.TilesSize; j++){
        image(woodFloorTile, i * RestaurantDefaultData.TilesSize + WoodOffset, j * RestaurantDefaultData.TilesSize, RestaurantDefaultData.TilesSize, RestaurantDefaultData.TilesSize);
        };
    };


    //window frame
    image(middleFrame, windowWidth/2 - 300, windowHeight/2 - 100, 600, 200);

    textSize(30);
    textAlign(CENTER);
    BetterText('Set the restaurant name:', windowWidth/2, windowHeight/2- 60);


    //Input box\\
    inp.position(windowWidth/2 - 250, windowHeight/2 - 25);
    inp.size(500, 75);
    inp.style('font-size', '40px');
    ///////\\\\\\\

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

};


const SettingTheRestaurantMousePressed = () =>{
    InsertRestaurantName.pressed(() => {
        httpPost('/Post/CreateRestaurant', {id: UserID, resName: CurrentInput}, data =>{
            print(data);
            Stage = 'Default';
            UpdateRestaurantRequest();
            UpdateInventoryRequest();
            UpdateRestaurantStats();
            inp.remove();
        })});
};