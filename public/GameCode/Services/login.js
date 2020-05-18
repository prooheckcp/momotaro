let logginIn = true; //SignUp or LogIn - True: Login, False: Signup
let Logged = false; //Login/Signup screen or in-game

//USER DATA\\
let UserID = 2; //The user id on client side in case the player is in game
let restaurantName = '';
//User inputs\\
let UserNameinp_login;
let Passwordinp_login;
/////////////////////

//The texts within the inputs\\
let Login_Username = '';
let Login_Password = '';
///////////////////////////

//UI elements\\
let LoginButton;
let GoBackToLoginOptionButton;
let GoBackToSignupOptionButton;
/////////////////////

const LoggingProcess = () =>{


    //The background image
    image(lake, 0, 0, windowWidth, windowHeight);

    //Background Frame
    image(FramePortrait, windowWidth/2 - 225, windowHeight/2 - 375, 450, 750);

    //Main menu logo
    image(Logo, windowWidth/2 - 343.75/2, windowHeight/2 - 355, 343.75, 242.25);

    //Buttons\\
    
    //Login
    GoBackToLoginOptionButton.x = windowWidth/2 - 225;
    GoBackToLoginOptionButton.y = windowHeight/2 - 100;
    GoBackToLoginOptionButton.hovered(()=>{
        tint(190, 190, 59);
    });

    GoBackToLoginOptionButton.draw();
    noTint();
    //Sign-up 
    GoBackToSignupOptionButton.x = windowWidth/2;
    GoBackToSignupOptionButton.y = windowHeight/2 - 100;
    GoBackToSignupOptionButton.hovered(()=>{
        tint(190, 190, 59);
    });

    GoBackToSignupOptionButton.draw();
    noTint();
    //--------\\

    textAlign(CENTER, CENTER);
    textSize(30);

    if(logginIn){
        BetterText('Login', windowWidth/2 - 225 + 112.5, windowHeight/2 - 100 + 25, {r: 255, g: 231, b: 100});
        BetterText('Signup', windowWidth/2 + 112.5, windowHeight/2 - 100 + 25);
    }else{
        BetterText('Login', windowWidth/2 - 225 + 112.5, windowHeight/2 - 100 + 25);
        BetterText('Signup', windowWidth/2 + 112.5, windowHeight/2 - 100 + 25, {r: 255, g: 231, b: 100});
    }
    


    //Check if user is on the login window or the signup one :3
    logginIn ? loginWindow():signupWindow();

};


const loginWindow = () => {

    //Remove the input windows
    if(UserNameinp_signup != null){
        UserNameinp_signup.remove();
        UserNameinp_signup = null;
    }

    if(Emailinp_signup != null){
        Emailinp_signup.remove();
        Emailinp_signup = null;
    }

    if(Passwordinp_signup != null){
        Passwordinp_signup.remove();
        Passwordinp_signup = null;
    }

    if(Passwordinp_signup2 != null){
        Passwordinp_signup2.remove();
        Passwordinp_signup2 = null;
    }

    //Build the UI buttons

        LoginButton.x = windowWidth/2 - 100;
        LoginButton.y = windowHeight/2 - 50 + 325;
        LoginButton.w = 200;
        LoginButton.h = 50;

        LoginButton.hovered(()=>{
            LoginButton.x -= 2.5;
            LoginButton.y -= 2.5;
            LoginButton.w += 5;
            LoginButton.h += 5;
    
            tint(190, 190, 59);
        });

        LoginButton.draw();  
        noTint();
    //Build the UI texts
    textAlign(LEFT);
    textSize(25);
    BetterText('UserName:', windowWidth/2 - 200, windowHeight/2 - 30);
    BetterText('Password:', windowWidth/2 - 200, windowHeight/2 + 40);
    textSize(30);
    textAlign(CENTER, CENTER);
    BetterText('Login', windowWidth/2, windowHeight/2 - 50 + 350);
    //Build the input UI part
    if (UserNameinp_login == null || Passwordinp_login == null){
        CreateLoginButton(windowWidth/2 - 200, windowHeight/2 + 60, 200, 30);
        CreateLoginButton2(windowWidth/2 - 200, windowHeight/2 + 150, 200, 30);
    }else{
        UserNameinp_login.position(windowWidth/2 - 200, windowHeight/2 - 20);
        Passwordinp_login.position(windowWidth/2 - 200, windowHeight/2 + 50); 
    };

};

const CreateLoginButton = (x, y, w, h) => {
    //Login boxes
    UserNameinp_login = createInput('Insert username');
    UserNameinp_login.position(x, y);
    UserNameinp_login.input(WrittingUserName);
    UserNameinp_login.size(w, h);
    UserNameinp_login.style('font-size', '20px');
};

const CreateLoginButton2 = (x, y, w, h) =>{
    //Login box2
    Passwordinp_login = createInput('', 'password');
    Passwordinp_login.position(x, y);
    Passwordinp_login.input(WrittingPassword);
    Passwordinp_login.size(w, h);
    Passwordinp_login.style('font-size', '20px');
};


//This didn't work with an arrow function...
function WrittingUserName(){
    Login_Username = this.value();
}; 

//This didn't work with an arrow function...
function WrittingPassword(){
    Login_Password = this.value();
}; 

const LogginClick = () => {

    if(logginIn){
    //Check if the user exists
    LoginButton.pressed(()=>{
        
        httpPost('/post/login', {user: Login_Username, password: Login_Password}, result => {
            
            let ResultInJson = eval(result)[0];

            if(!ResultInJson.status){
                alert(ResultInJson.message);
            }else{

                //Log in the player in case the login was a success!
                Logged = true;
                UserID = ResultInJson.id;
                //Load the player restaurant and inventory
                UpdateRestaurantRequest();
                UpdateInventoryRequest();
                UpdateRestaurantStats();
                    //Remove the input windows
                    if(UserNameinp_login != null){
                        UserNameinp_login.remove();
                        UserNameinp_login = null;
                    }
                    
                    if(Passwordinp_login != null){
                        Passwordinp_login.remove();
                        Passwordinp_login = null;
                    }

            };

          });

    })};

    GoBackToLoginOptionButton.pressed(()=>{
        logginIn = true;
    });

}
