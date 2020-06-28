//Variables\\


    //The current tab within the login (True -> Login tab; False -> Signup tab)
    let logginIn = true; 

    //The current scene (True -> in-game scene; Flase -> Login scene)
    let Logged = false; 

    //The ID of the user that is playing the game
    let UserID = 1; 

    //The name of the restarant
    let restaurantName = '';
//----------\\


//User inputs\\

    let UserNameinp_login;
    let Passwordinp_login;
//------------\\

//The texts within the inputs\\

    //Username
    let Login_Username = '';

    //Password
    let Login_Password = '';
//----------------------------\\

//UI elements\\

    let LoginButton;
    let GoBackToLoginOptionButton;
    let GoBackToSignupOptionButton;
//------------\\

const LoggingProcess = () =>{


    //The background image
    image(lake, 0, 0, windowWidth, windowHeight);

    //Background Frame
    image(FramePortrait, windowWidth/2 - 225, windowHeight/2 - 375, 450, 750);

    //Main menu logo
    image(Logo, windowWidth/2 - 343.75/2, windowHeight/2 - 355, 343.75, 242.25);

    //Buttons\\
    
        //Login
        let LoginTabIsHovered = false;
        GoBackToLoginOptionButton.x = windowWidth/2 - 225;
        GoBackToLoginOptionButton.y = windowHeight/2 - 100;
        GoBackToLoginOptionButton.hovered(()=>{
            LoginTabIsHovered = true;
        });

        if(!logginIn){
            tint(150);
        };

        GoBackToLoginOptionButton.draw();
        noTint();

        //Sign-up 
        let SignupTabIsHovered = false;
        GoBackToSignupOptionButton.x = windowWidth/2;
        GoBackToSignupOptionButton.y = windowHeight/2 - 100;
        GoBackToSignupOptionButton.hovered(()=>{
            SignupTabIsHovered = true;
        });

        if(logginIn){
            tint(150);
        };

        GoBackToSignupOptionButton.draw();
        noTint();
    //--------\\
    
    //Display the tabs text\\

        textAlign(CENTER, CENTER);
        textSize(30);
                  

            

        if(!logginIn || SignupTabIsHovered){
            BetterText('Signup', windowWidth/2 + 112.5, windowHeight/2 - 100 + 25, {r: 255, g: 231, b: 100});
        }else{
            BetterText('Signup', windowWidth/2 + 112.5, windowHeight/2 - 100 + 25);  
        };

        if(logginIn || LoginTabIsHovered){
            BetterText('Login', windowWidth/2 - 225 + 112.5, windowHeight/2 - 100 + 25, {r: 255, g: 231, b: 100});
        }else{
            BetterText('Login', windowWidth/2 - 225 + 112.5, windowHeight/2 - 100 + 25);
        };
    //----------------------\\    


    //Check the current tab on which is user is
    logginIn ? loginWindow():signupWindow();

};


const loginWindow = () => {

    //Remove the signup input boxes\\

        //username
        if(UserNameinp_signup != null){
            UserNameinp_signup.remove();
            UserNameinp_signup = null;
        };

        //email
        if(Emailinp_signup != null){
            Emailinp_signup.remove();
            Emailinp_signup = null;
        };

        //password
        if(Passwordinp_signup != null){
            Passwordinp_signup.remove();
            Passwordinp_signup = null;
        };

        //repeat password
        if(Passwordinp_signup2 != null){
            Passwordinp_signup2.remove();
            Passwordinp_signup2 = null;
        };
    //------------------------------\\

    //Create the signup input boxes\\

        if (UserNameinp_login == null || Passwordinp_login == null){

            //Create the input boxes
            CreateLoginButton(windowWidth/2 - 200, windowHeight/2 + 60, 200, 30);
            CreateLoginButton2(windowWidth/2 - 200, windowHeight/2 + 150, 200, 30);
        }else{

            //Set the boxes position
            UserNameinp_login.position(windowWidth/2 - 200, windowHeight/2 - 20);
            Passwordinp_login.position(windowWidth/2 - 200, windowHeight/2 + 50); 
        };
    //------------------------------\\

    //Build login button\\

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
    //-------------------\\

    //Build the UI texts\\

        textAlign(LEFT);
        textSize(25);
        BetterText('Username:', windowWidth/2 - 200, windowHeight/2 - 30);
        BetterText('Password:', windowWidth/2 - 200, windowHeight/2 + 40);
        textSize(30);
        textAlign(CENTER, CENTER);
        BetterText('Login', windowWidth/2, windowHeight/2 - 50 + 350);
    //-------------------\\    

};

const CreateLoginButton = (x, y, w, h) => {

    //Username input 
    UserNameinp_login = createInput('Insert username');
    UserNameinp_login.position(x, y);
    UserNameinp_login.input(WrittingUserName);
    UserNameinp_login.size(w, h);
    UserNameinp_login.style('font-size', '20px');
    UserNameinp_login.style('background-color', 'rgba(0,0,0,0.7)');
    UserNameinp_login.style('color', 'white');
};

const CreateLoginButton2 = (x, y, w, h) =>{

    //Password input
    Passwordinp_login = createInput('', 'password');
    Passwordinp_login.position(x, y);
    Passwordinp_login.input(WrittingPassword);
    Passwordinp_login.size(w, h);
    Passwordinp_login.style('font-size', '20px');
    Passwordinp_login.style('background-color', 'rgba(0,0,0,0.7)');
    Passwordinp_login.style('color', 'white');
};


//Update the username variable to the current input
function WrittingUserName(){
    Login_Username = this.value();
}; 

//Update the password variable to the current input
function WrittingPassword(){
    Login_Password = this.value();
}; 

const LogginClick = () => {

    if(logginIn){

    //Check if the user exists
    LoginButton.pressed(()=>{
        
        httpPost('/post/login', {user: Login_Username, password: Login_Password}, result => {
            
            let ResultInJson = eval(result)[0];

            if(ResultInJson.output == 'Success'){

                //Store the user ID on the client side
                UserID = ResultInJson.id;
                
                CheckIfRestaurantExists();

                //Log in the player in case the login was a success
                Logged = true;

                    //Remove the input windows
                    if(UserNameinp_login != null){
                        UserNameinp_login.remove();
                        UserNameinp_login = null;
                    };
                    
                    if(Passwordinp_login != null){
                        Passwordinp_login.remove();
                        Passwordinp_login = null;
                    };
            }else{

                BetterAlert(ResultInJson.output);

            };

          });

    })};

    //Going to the login tab
    GoBackToLoginOptionButton.pressed(()=>{
        logginIn = true;
    });

}
