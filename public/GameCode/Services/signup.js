//User inputs\\
let UserNameinp_signup;
let Emailinp_signup;
let Passwordinp_signup;
let Passwordinp_signup2;
////////////////

//The texts within the inputs\\
let Signup_Username = '';
let Signup_Email = '';
let Signup_Password = '';
let Signup_Password2 = '';
////////////////////////////

//UI elements\\
let SignUpButton;
///////////////

const signupWindow = () => {

    //Remove the input windows
    if(UserNameinp_login != null){
        UserNameinp_login.remove();
        UserNameinp_login = null;
    }
    
    if(Passwordinp_login != null){
        Passwordinp_login.remove();
        Passwordinp_login = null;
    }

    if (UserNameinp_signup == null && Emailinp_signup == null && Passwordinp_signup == null && Passwordinp_signup2 == null){
        CreateSignupInput(windowWidth/2 - 200, windowHeight/2 + 60, 200, 30);
        CreateSignupInput2(windowWidth/2 - 200, windowHeight/2 + 90, 200, 30);
        CreateSignupInput3(windowWidth/2 - 200, windowHeight/2 + 120, 200, 30);
        CreateSignupInput4(windowWidth/2 - 200, windowHeight/2 + 150, 200, 30);
    }else{
        UserNameinp_signup.position(windowWidth/2 - 200, windowHeight/2 - 20);
        Emailinp_signup.position(windowWidth/2 - 200, windowHeight/2 + 50);
        Passwordinp_signup.position(windowWidth/2 - 200, windowHeight/2 + 120);
        Passwordinp_signup2.position(windowWidth/2 - 200, windowHeight/2 + 190);
    };


    //Build the UI texts
    textAlign(LEFT);
    textSize(25);
    BetterText('UserName:', windowWidth/2 - 200, windowHeight/2 - 30);
    BetterText('Email:', windowWidth/2 - 200, windowHeight/2 + 40);
    BetterText('Password:', windowWidth/2 - 200, windowHeight/2 + 110);
    BetterText('Repeat Password:', windowWidth/2 - 200, windowHeight/2 + 180);

    //Sign up button
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
};

//Create the inputs\\
const CreateSignupInput = (x, y, w, h) =>{
    UserNameinp_signup = createInput('Insert username');
    UserNameinp_signup.position(x, y);
    UserNameinp_signup.input(WrittingSignupInput);
    UserNameinp_signup.size(w, h);
    UserNameinp_signup.style('font-size', '20px');
};

const CreateSignupInput2 = (x, y, w, h) =>{
    Emailinp_signup = createInput('Insert Email');
    Emailinp_signup.position(x, y);
    Emailinp_signup.input(WrittingSignupInput2);
    Emailinp_signup.size(w, h);
    Emailinp_signup.style('font-size', '20px');
};

const CreateSignupInput3 = (x, y, w, h) =>{
    Passwordinp_signup = createInput('', 'password');
    Passwordinp_signup.position(x, y);
    Passwordinp_signup.input(WrittingSignupInput3);
    Passwordinp_signup.size(w, h);
    Passwordinp_signup.style('font-size', '20px');
};

const CreateSignupInput4 = (x, y, w, h) =>{
    Passwordinp_signup2 = createInput('', 'password');
    Passwordinp_signup2.position(x, y);
    Passwordinp_signup2.input(WrittingSignupInput4);
    Passwordinp_signup2.size(w, h);
    Passwordinp_signup2.style('font-size', '20px');
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
/////////////////////////////////

const SignupClick = () => {
    GoBackToSignupOptionButton.pressed(() =>{
        logginIn = false;
    });


    if(!logginIn){
        SignUpButton.pressed(()=>{
            if(Signup_Password != Signup_Password2){
                alert('The passwords do not match!');
            }else{
                httpPost('/post/signup', {  email: Signup_Email ,
                                            password: Signup_Password,
                                            username: Signup_Username},
                                            (result)=>{
                                                let ResultInJsonFormate = eval(result)[0];
                                                if(!ResultInJsonFormate.accepted){
                                                    //In case the signup was rejected alert the user with the reason
                                                    alert(ResultInJsonFormate.status);
                                                }else{
                                                    //In case the sigup was succefull
                                                    Logged = true;
                                                    UserID = ResultInJsonFormate.userID;

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

                                                };
                                            });
            }
        });
    }

};