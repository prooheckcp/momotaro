const SetUpLogin = () =>{
    GoBackToLoginOptionButton = new NewButton(windowWidth/2 - 225, windowHeight/2 - 75, 225, 50);
    GoBackToSignupOptionButton = new NewButton(windowWidth/2, windowHeight/2 - 75, 225, 50);
    LoginButton = new NewButton(300, 200, 200, 50, DefaultRedButton); //The button to login the player
    
};

const SetUpSignup = () =>{
    SignUpButton = new NewButton(0, 0, 200, 50, DefaultRedButton); //The button to signup player
}