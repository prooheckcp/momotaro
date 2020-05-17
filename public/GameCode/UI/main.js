/////////////////Variables\\\\\\\\\\\\\\\\\
let UIoptionsOpen = false; //Show the left and top side buttons around the general button
let ConfigWindowOpen = false; //Show the configuration window
let LeaderboardsWindow = false; //Show the leaderboard window
let StorageWindow = false; //Show the storage window
let MarketWindow = false; //Displays the market window while in the map
let MarketWindowSection = true; //True -> Decoration; False -> Ingredients
/////////////////----------\\\\\\\\\\\\\\\\\


//////////////USER STATS\\\\\\\\\\\\\\

let restaurantStats = {
    money: null,
    level: null,
    exp: null
}

//////////////-----------\\\\\\\\\\\\\\

////////////UI ELEMENTS\\\\\\\\\\\\
let ExpBar;
let YenDisplayer;

//buttons
let MainUIbutton;
//left buttons
let CookingUIbutton;
let MapUIbutton;
let StorageUIbutton;
let BuildingUIbutton;
//top buttons
let ConfigurationUIbutton;
let LogOffUIbutton;
let LeaderboardsUIbutton;

////////////------------\\\\\\\\\\\\

const setupUI = () =>{

    //Leaderboard UI\\
    setupLeaderboard();
    //////////////////

    //Calling the setup of the market
    setupMarketUI();

    //Map buttons
    CloseTheMarketButton = new NewButton(0, 0, 0, 0, CloseMark);
    JapanCityFriendsButton = new NewButton(0, 0, 0, 0, JapanCityFriends);
    JapanCityMarketButton = new NewButton(0, 0, 0, 0, JapanCityMarket);
    JapanCityRestaurantButton = new NewButton(0, 0, 0, 0, JapanCityRestaurant);
    MarketButtonDecoration = new NewButton(0, 0, 0, 0, MarketButton);
    MarketButtonIngredients = new NewButton(0, 0, 0, 0, MarketButton);
    //Screen displayers
    YenDisplayer = new MoneyDisplayer();
    ExpBar = new XPbar();
    //Buttons
    MainUIbutton = new NewButton(windowWidth - 100, windowHeight - 100, 75, 75, CircleButtonGeneral);
    //Left buttons
    CookingUIbutton = new NewButton(windowWidth - 200, windowHeight - 100, 75, 75, CircleButtonCooking);
    MapUIbutton = new NewButton(windowWidth - 300, windowHeight - 100, 75, 75, CircleButtonMap);
    StorageUIbutton = new NewButton(windowWidth - 400, windowHeight - 100, 75, 75, CircleButtonStorage);
    BuildingUIbutton = new NewButton(windowWidth - 500, windowHeight - 100, 75, 75, CircleButtonDecoration);
    //top buttons
    ConfigurationUIbutton = new NewButton(windowWidth - 100, windowHeight - 200, 75, 75, CircleButtonGear);
    LogOffUIbutton = new NewButton(windowWidth - 100, windowHeight - 200, 75, 75, CircleButtonLogOut);
    LeaderboardsUIbutton = new NewButton(windowWidth - 100, windowHeight - 200, 75, 75, CircleButtonLeaderboards);
};

const DrawUI = () =>{


    if(typeof(restaurantStats.exp) != typeof(1) || typeof(restaurantStats.level) != typeof(1) || typeof(restaurantStats.money) != typeof(1)){
        UpdateRestaurantStats();
    }else{

        //Draw the exp EXP bar
        ExpBar.x = 60;
        ExpBar.y = 30;
        ExpBar.w = 325;
        ExpBar.h = 50;
        ExpBar.draw();
        ExpBar.hovered();

        //Draw the yen displayer
        YenDisplayer.x = windowWidth - 260; 
        YenDisplayer.y = 30;
        YenDisplayer.w = 200;
        YenDisplayer.h = 50;
        YenDisplayer.draw();
    };

    //Main UI button\\
    MainUIbuttonBeingHovered = false;
    MainUIbutton.x = windowWidth - 125;
    MainUIbutton.y = windowHeight - 125;
    MainUIbutton.w = 75;
    MainUIbutton.h = 75;
    MainUIbutton.hovered(()=>{
        MainUIbutton.w = 90;
        MainUIbutton.h = 90;
        MainUIbutton.x = windowWidth - 132.5;
        MainUIbutton.y = windowHeight - 132.5;
        tint(190, 190, 59);
        MainUIbuttonBeingHovered = true;
    });
    MainUIbutton.draw();
    noTint(); //Reduces lag related to tints


    if(UIoptionsOpen){

    //Left buttons
    
    //Cooking UI button\\
    CookingUIbuttonBeingHovered = false;
    CookingUIbutton.x = windowWidth - 225;
    CookingUIbutton.y = windowHeight - 125;
    CookingUIbutton.w = 75;
    CookingUIbutton.h = 75;
    CookingUIbutton.hovered(()=>{
        CookingUIbutton.w = 90;
        CookingUIbutton.h = 90;
        CookingUIbutton.x = windowWidth - 232.5;
        CookingUIbutton.y = windowHeight - 132.5;
        tint(190, 190, 59);
        CookingUIbuttonBeingHovered = true;
    });
    CookingUIbutton.draw();
    noTint(); //Reduces lag related to tints


    //Map UI button\\
    MapUIbuttonBeingHovered = false;
    MapUIbutton.x = windowWidth - 325;
    MapUIbutton.y = windowHeight - 125;
    MapUIbutton.w = 75;
    MapUIbutton.h = 75;
    MapUIbutton.hovered(()=>{
        MapUIbutton.w = 90;
        MapUIbutton.h = 90;
        MapUIbutton.x = windowWidth - 332.5;
        MapUIbutton.y = windowHeight - 132.5;
        tint(190, 190, 59);
        MapUIbuttonBeingHovered = true;
    });
    MapUIbutton.draw();
    noTint(); //Reduces lag related to tints


    //Storage UI button\\
    StorageUIbuttonBeingHovered = false;
    StorageUIbutton.x = windowWidth - 425;
    StorageUIbutton.y = windowHeight - 125;
    StorageUIbutton.w = 75;
    StorageUIbutton.h = 75;
    StorageUIbutton.hovered(()=>{
        StorageUIbutton.w = 90;
        StorageUIbutton.h = 90;
        StorageUIbutton.x = windowWidth - 432.5;
        StorageUIbutton.y = windowHeight - 132.5;
        tint(190, 190, 59);
        StorageUIbuttonBeingHovered = true;
    });
    StorageUIbutton.draw();
    noTint(); //Reduces lag related to tints


    //Building UI button\\
    BuildingUIbuttonBeingHovered = false;
    BuildingUIbutton.x = windowWidth - 525;
    BuildingUIbutton.y = windowHeight - 125;
    BuildingUIbutton.w = 75;
    BuildingUIbutton.h = 75;
    BuildingUIbutton.hovered(()=>{
        BuildingUIbutton.w = 90;
        BuildingUIbutton.h = 90;
        BuildingUIbutton.x = windowWidth - 532.5;
        BuildingUIbutton.y = windowHeight - 132.5;
        tint(190, 190, 59);
        BuildingUIbuttonBeingHovered = true;
    });
    BuildingUIbutton.draw();
    noTint(); //Reduces lag related to tints


    //top buttons

    //Configuration UI button\\
    ConfigurationUIbuttonBeingHovered = false;
    ConfigurationUIbutton.x = windowWidth - 125;
    ConfigurationUIbutton.y = windowHeight - 225;
    ConfigurationUIbutton.w = 75;
    ConfigurationUIbutton.h = 75;
    ConfigurationUIbutton.hovered(()=>{
        ConfigurationUIbutton.w = 90;
        ConfigurationUIbutton.h = 90;
        ConfigurationUIbutton.x = windowWidth - 132.5;
        ConfigurationUIbutton.y = windowHeight - 232.5;
        tint(190, 190, 59);
        ConfigurationUIbuttonBeingHovered = true;
    });
    ConfigurationUIbutton.draw();
    noTint(); //Reduces lag related to tints

    //Logoff UI button\\
    LogOffUIbuttonBeingHovered = false;
    LogOffUIbutton.x = windowWidth - 125;
    LogOffUIbutton.y = windowHeight - 325;
    LogOffUIbutton.w = 75;
    LogOffUIbutton.h = 75;
    LogOffUIbutton.hovered(()=>{
        LogOffUIbutton.w = 90;
        LogOffUIbutton.h = 90;
        LogOffUIbutton.x = windowWidth - 132.5;
        LogOffUIbutton.y = windowHeight - 332.5;
        tint(190, 190, 59);
        LogOffUIbuttonBeingHovered = true;
    });
    LogOffUIbutton.draw();
    noTint(); //Reduces lag related to tints

    //Leaderboards UI button\\
    LeaderboardsUIbuttonBeingHovered = false;
    LeaderboardsUIbutton.x = windowWidth - 125;
    LeaderboardsUIbutton.y = windowHeight - 425;
    LeaderboardsUIbutton.w = 75;
    LeaderboardsUIbutton.h = 75;
    LeaderboardsUIbutton.hovered(()=>{
        LeaderboardsUIbutton.w = 90;
        LeaderboardsUIbutton.h = 90;
        LeaderboardsUIbutton.x = windowWidth - 132.5;
        LeaderboardsUIbutton.y = windowHeight - 432.5;
        tint(190, 190, 59);
        LeaderboardsUIbuttonBeingHovered = true;
    });
    LeaderboardsUIbutton.draw();
    noTint(); //Reduces lag related to tints

    if(CookingUIbuttonBeingHovered){
        UIinfo('Cooking');
    };
    if(MapUIbuttonBeingHovered){
        UIinfo('Map');
    };
    if(StorageUIbuttonBeingHovered){
        UIinfo('Storage');
    };
    if(BuildingUIbuttonBeingHovered){
        UIinfo('Building');
    };
    if(ConfigurationUIbuttonBeingHovered){
        UIinfo('Configuration');
    };
    if(LogOffUIbuttonBeingHovered){
        UIinfo('Log off');
    };
    if(LeaderboardsUIbuttonBeingHovered){
        UIinfo('Leaderboards');
    };

    };

    if(MainUIbuttonBeingHovered){
        UIinfo('General');
    };


    if(ConfigWindowOpen){
        DrawConfigurationWindow();
    };

    if(LeaderboardsWindow){
        DrawLeaderboardsWindow();
    };


    if(StorageWindow){
        DrawStorageWindow();
    };

};



const UImousePressed = () =>{

    //The generic button with the 3 dots was pressed
    MainUIbutton.pressed(()=>{UIoptionsOpen = !UIoptionsOpen;});

    //Leaderboard
    if(LeaderboardsWindow){
        LeaderboardsMousePressed();
    }

    if(StorageWindow){
        StorageWindowMousePressed();
    }

    //After pressing the 3 dots u get to click on several buttons
    if(UIoptionsOpen){
        //Log u off from the game
        LogOffUIbutton.pressed(()=>{
            UserID = 0;
            Logged = false;
            inventory = null;
            PlayerRestaurantFurniture = null;
            Stage = '';
            NPCsInTheRestaurant = [];
        });
        //Go to the cooking menu
        CookingUIbutton.pressed(() => {Stage = 'Cook';
            UpdateIngredientsInventory();
        });
        //Go to the decoration menu
        BuildingUIbutton.pressed(() => {Stage = 'Decoration'});

        //Open and close the configuration window 
        ConfigurationUIbutton.pressed(()=>{ConfigWindowOpen = !ConfigWindowOpen});

        //Open and close the leaderboards window
        LeaderboardsUIbutton.pressed(()=>{
            if(!LeaderboardsWindow){UpdateLeaderBoard()};
            LeaderboardsWindow = !LeaderboardsWindow});

        

        //Open and close the storage window
        StorageUIbutton.pressed(()=>{
            StorageWindow = !StorageWindow;
            if(StorageWindow){UpdateStorageInventory()};
        });

        MapUIbutton.pressed(()=>{Stage = 'Map';
            UIoptionsOpen = false;});

    };

};



