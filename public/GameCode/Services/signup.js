//User inputs\\

    //Username
    let UserNameinp_signup;

    //Email
    let Emailinp_signup;

    //Password
    let Passwordinp_signup;

    //Repeat password
    let Passwordinp_signup2;
//------------\\

//The texts within the inputs\\

    //Username
    let Signup_Username = '';

    //Email
    let Signup_Email = '';

    //Password
    let Signup_Password = '';

    //Repeat password
    let Signup_Password2 = '';
//----------------------------\\

//UI elements\\

    //The signup button to create the account
    let SignUpButton;
//------------\\

const signupWindow = () => {

    //Delete the login input boxes when in the signup window\\

        //Login box
        if(UserNameinp_login != null){
            UserNameinp_login.remove();
            UserNameinp_login = null;
        }
        
        //Password box
        if(Passwordinp_login != null){
            Passwordinp_login.remove();
            Passwordinp_login = null;
        }
    //-------------------------------------------------------\\

    //Create the signup input boxes\\
        

        if (UserNameinp_signup == null && Emailinp_signup == null && Passwordinp_signup == null && Passwordinp_signup2 == null){
            
            //Create the boxes
            CreateSignupInput(windowWidth/2 - 200, windowHeight/2 + 60, 200, 30);
            CreateSignupInput2(windowWidth/2 - 200, windowHeight/2 + 90, 200, 30);
            CreateSignupInput3(windowWidth/2 - 200, windowHeight/2 + 120, 200, 30);
            CreateSignupInput4(windowWidth/2 - 200, windowHeight/2 + 150, 200, 30);
        }else{
            
            //Set the boxes position
            UserNameinp_signup.position(windowWidth/2 - 200, windowHeight/2 - 20);
            Emailinp_signup.position(windowWidth/2 - 200, windowHeight/2 + 50);
            Passwordinp_signup.position(windowWidth/2 - 200, windowHeight/2 + 120);
            Passwordinp_signup2.position(windowWidth/2 - 200, windowHeight/2 + 190);
        };
    //------------------------------\\

    //Build the UI texts\\
    
        textAlign(LEFT);
        textSize(25);
        BetterText('Username:', windowWidth/2 - 200, windowHeight/2 - 30);
        BetterText('Email:', windowWidth/2 - 200, windowHeight/2 + 40);
        BetterText('Password:', windowWidth/2 - 200, windowHeight/2 + 110);
        BetterText('Repeat Password:', windowWidth/2 - 200, windowHeight/2 + 180);
    //-------------------\\

    //Sign up button\\

        SignUpButton.x = windowWidth/2 - 100;
        SignUpButton.y = windowHeight/2 - 50 + 325;  
        SignUpButton.w = 200;
        SignUpButton.h = 50;

        SignUpButton.hovered(()=>{
            SignUpButton.x -= 2.5;
            SignUpButton.y -= 2.5;
            SignUpButton.w += 5;
            SignUpButton.h += 5;

            tint(190, 190, 59);
        });
        
        SignUpButton.draw();
        noTint();

        //Sing up button text
        textSize(30);
        textAlign(CENTER, CENTER);
        BetterText('Sign up', windowWidth/2, windowHeight/2 - 50 + 350);    
    //---------------\\



};

//Create the inputs\\

    const CreateSignupInput = (x, y, w, h) =>{
        UserNameinp_signup = createInput('Insert username');
        UserNameinp_signup.position(x, y);
        UserNameinp_signup.input(WrittingSignupInput);
        UserNameinp_signup.size(w, h);
        UserNameinp_signup.style('font-size', '20px');
        UserNameinp_signup.style('background-color', 'rgba(0,0,0,0.7)');
        UserNameinp_signup.style('color', 'white');
    };

    const CreateSignupInput2 = (x, y, w, h) =>{
        Emailinp_signup = createInput('Insert Email');
        Emailinp_signup.position(x, y);
        Emailinp_signup.input(WrittingSignupInput2);
        Emailinp_signup.size(w, h);
        Emailinp_signup.style('font-size', '20px');
        Emailinp_signup.style('background-color', 'rgba(0,0,0,0.7)');
        Emailinp_signup.style('color', 'white');
    };

    const CreateSignupInput3 = (x, y, w, h) =>{
        Passwordinp_signup = createInput('', 'password');
        Passwordinp_signup.position(x, y);
        Passwordinp_signup.input(WrittingSignupInput3);
        Passwordinp_signup.size(w, h);
        Passwordinp_signup.style('font-size', '20px');
        Passwordinp_signup.style('background-color', 'rgba(0,0,0,0.7)');
        Passwordinp_signup.style('color', 'white');
    };

    const CreateSignupInput4 = (x, y, w, h) =>{
        Passwordinp_signup2 = createInput('', 'password');
        Passwordinp_signup2.position(x, y);
        Passwordinp_signup2.input(WrittingSignupInput4);
        Passwordinp_signup2.size(w, h);
        Passwordinp_signup2.style('font-size', '20px');
        Passwordinp_signup2.style('background-color', 'rgba(0,0,0,0.7)');
        Passwordinp_signup2.style('color', 'white');
    };

    function WrittingSignupInput(){
        Signup_Username = this.value();
    }

    function WrittingSignupInput2(){
        Signup_Email = this.value();
    }

    function WrittingSignupInput3(){
        Signup_Password = this.value();
    }

    function WrittingSignupInput4(){
        Signup_Password2 = this.value();
    }
//------------------\\

const SignupClick = () => {

    //Go to the signup window
    GoBackToSignupOptionButton.pressed(() =>{
        logginIn = false;
    });


    if(!logginIn){
        SignUpButton.pressed(()=>{
            if(Signup_Password != Signup_Password2){
                BetterAlert('The passwords do not match!');
            }else if(Signup_Password.length < 5){
                BetterAlert('The password is too short');
            }else if(Signup_Password.length > 18){
                BetterAlert('The password is too long');
            }else{
                httpPost('/post/signup', {email: Signup_Email , password: Signup_Password, username: Signup_Username}, result =>{
                    let LocalData = eval(result)[0];
                    if(LocalData.output == 'done'){
                        logginIn = true;
                        UserID = LocalData.id;
                        Logged = true;
                        UserNameinp_signup.remove();
                        Emailinp_signup.remove();
                        Passwordinp_signup.remove();
                        Passwordinp_signup2.remove();
                    }else{
                        BetterAlert(LocalData.output);
                    };
                });
            };
        });
    };

};