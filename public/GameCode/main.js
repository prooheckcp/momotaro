//Stage of the game scene
let Stage = 'Map'; 


function setup() {

  //Set the game window size
  createCanvas(windowWidth, windowHeight);

  //Set the game frame rate
  frameRate(30);

  masterVolume(0.05);  
  backgroundMusic.play();
  backgroundMusic.loop();

};


function preload() {

  //Setup the game
  SetupGame();

};


function draw() {

    //Check if the user is logged in or not
    Logged ? LoadGame():LoggingProcess();

};

function windowResized() {

  //In case the window is resized, resize the canvas with it
  resizeCanvas(windowWidth, windowHeight);

};

function mousePressed(){

    //Check if the user is logged in
    if(!Logged){

        //Pressed event of the login tab
        LogginClick();

        //Pressed event of the signup tab
        SignupClick();

    }else if(Stage == 'Decoration') {

      //Pressed event on the decoration scene
      DecorationMousePressed();

    }else if(Stage == 'Cook'){

      //Pressed event on the cooking scene
      CookMousePressed();

    }else if(Stage == 'RestaurantName'){

      //Pressed event on the setting restaurant name scene
      SettingTheRestaurantMousePressed();

    }else if(Stage == 'Map'){

      //Pressed event on the map scene
      UImapMousePressed();

    }else {

      //Pressed event on the main scene (restaurant)
      UImousePressed();

      //Pressed event for the NPCs
      NpcPressed();

    }
};


const LoadGame = () => {    

  //Default lines sizes of the rectangles and circles
  stroke(0);
  strokeWeight(1);

  //Decide current scene\\
    if(Stage == ''){

      //Debounce Variable
      Stage = 'N/A';

      //Check if the restaurant exists
      CheckIfRestaurantExists();

    }else if(Stage == 'RestaurantName'){

      //Draws the scene on which the player has to set the restaurant name
      DrawTheRestaurantSetup();

    }else if(Stage == 'Cook'){

      //Draw the cooking scene
      CookDraw();

    }else if(Stage == 'Map'){

      //Draw the map scene
      DrawMapUI();

    }else if(Stage == 'Decoration'){

      //Background color
      background(45);

      //Draw the restaurant floor and walls
      DrawRestaurant();

      //Draw the decoration (or building) scene
      DecorationDraw();

    }else if(Stage != 'N/A'){

      //Background color
      background(45);

      //Draw the restaurant floor and walls
      DrawRestaurant();

      //Draw the NPCS
      DrawNpc();

      //Draw the user interface
      DrawUI();

      //Show a pop up window if the user levels up
      LevelUpAnimation();


      
    };
  //---------------------\\

};

function mouseReleased(){

  if (Stage == 'Decoration'){

    //Released event on the decoration scene
    DecorationMouseReleased();

  }else if(Stage == 'Cook'){

    //Released event on the cooking scene
    CookMouseReleased();

  };

};
