const SetupGame = () => {

    //Load the images
    SetupImages();

    //For the login and sign up windows
    SetUpLogin();
    SetUpSignup();

    //For the decoration that is currently placed in the restaurant
    DecorationSetUp();

    //For the storage window
    setupStorageWindow();
    
    //Loads the restaurant default layout
    SetupRestaurant();

    //Load the game interface
    setupUI();

    //Loads the stages
    CookSetUp();
    
    //NPC
    Npcsetup();
    
};

