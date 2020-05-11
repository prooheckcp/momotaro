let Stage = ''; //Stage of the UI such as decoration, cooking, market or default


function setup() {

  //Set the game frame rate
  frameRate(30);
  
  backgroundMusic.loop();
};


function preload() {
  createCanvas(windowWidth, windowHeight);
  SetupGame();
  DecorationSetUp();
};


function draw() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    Logged ? LoadGame():LoggingProcess();


};

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed(){

  clickingSound.play();
    //If the user isnt logged in yet then check
    if(!Logged){

      //if the user is in the login window
        LogginClick();
        //if the user is in the signup window
        SignupClick();


    }else if(Stage == 'Decoration') {
      //On the decoration menu
      DecorationMousePressed();
    }else if(Stage == 'Cook'){
      CookMousePressed();
    }else if(Stage == 'RestaurantName'){
      SettingTheRestaurantMousePressed();
    }else if(Stage == 'Map'){
      UImapMousePressed();
    }else{
      UImousePressed();
    }
};


const LoadGame = () => {    

  //Default lines
  stroke(0);
  strokeWeight(1);

  //Check if the restaurant exists!
  if(Stage == ''){
    Stage = 'N/A';
    httpPost('/post/RestaurantName', {id: UserID}, data => {
      let LocalResponse = eval(data)[0];
      if (LocalResponse.status == 'no'){
        Stage = 'RestaurantName';
      }else{
        restaurantName = LocalResponse.resName;
        Stage = 'default';
      }

    });
  }else if(Stage == 'RestaurantName'){
    //Make the person create restaurant
    DrawTheRestaurantSetup();
  }else if(Stage != 'N/A'){
    //The restaurant exists! Time to load the game :D
    background(45);
    //Restaurant base
    DrawRestaurant();

    if (Stage == 'Decoration'){
      //On the decoration menu
      DecorationDraw();
    }else if(Stage == 'Cook'){
      CookDraw();
    }else if(Stage == 'Map'){
      DrawMapUI();
    }else{
      //Draw the user interface
      DrawUI();
    }

    
  }
};

function mouseReleased(){
  if (Stage == 'Decoration'){
    //On the decoration menu
    DecorationMouseReleased();
  }else if(Stage == 'Cook'){
    CookMouseReleased();
  }

}
