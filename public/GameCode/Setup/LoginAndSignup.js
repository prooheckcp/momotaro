const SetUpLogin = () =>{

    //The button to go back to the login tab
    GoBackToLoginOptionButton = new NewButton(windowWidth/2 - 225, windowHeight/2 - 75, 225, 50, LoginSignupButton);
    
    //The button to go back to the signup tab
    GoBackToSignupOptionButton = new NewButton(windowWidth/2, windowHeight/2 - 75, 225, 50, LoginSignupButton);
    
    //The log into the account button
    LoginButton = new NewButton(300, 200, 200, 50, DefaultRedButton); //The button to login the player
    
};

const SetUpSignup = () =>{
    //The button to signup player
    SignUpButton = new NewButton(0, 0, 200, 50, DefaultRedButton); 
}