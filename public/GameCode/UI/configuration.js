let VolMusicValue;
let VolEffectsValue;

const SetupConfigUI = () =>{
    //Close Config Button\\
    CloseConfigButton = new NewButton(0,0,0,0, CloseMark);
    //------------\\
    //Music Frame Button\\
        MusicButton = new NewButton(0,0,0,0, SoundOn);
    //------------\\
    //Sound Effects Button\\
        SoundEffectButton = new NewButton(0,0,0,0, SoundOn);
    //------------\\

    //Sound Effects Button\\
        MusicVolBar = new Volume(0,0,0,0);
        SoundEffectVolBar = new Volume(0,0,0,0);
    //------------\\

};

const DrawConfigurationWindow = () =>{
    //MusicVolume.position(windowWidth/2, windowHeight/2);
    // main frame \\
    image(ConfigFrame, windowWidth/2-400, windowHeight/2-150);

    //rect(windowWidth/2-200, windowHeight/2-200, 200, 100)
    //backgroundMusic.setVolume(MusicVolume.value());
    //backgroundMusic.setVolume(SoundEffectsVolume.value());

    //Music Botton\\
        SoundEffectButton.x = windowWidth/2+72;
        SoundEffectButton.y = windowHeight/2+60;
        SoundEffectButton.w = 227;
        SoundEffectButton.h = 49;
        SoundEffectButton.hovered(()=>{
            tint(190, 190, 59);
        });
        SoundEffectButton.draw();
        noTint();
    //---------------\\

    //Music Botton\\
        MusicButton.x = windowWidth/2-272;
        MusicButton.y = windowHeight/2+60;
        MusicButton.w = 227;
        MusicButton.h = 49;
        MusicButton.hovered(()=>{
            tint(190, 190, 59);
        });
        MusicButton.draw();
        noTint();
    //---------------\\

    //Close Config\\
        CloseConfigButton.x = windowWidth/2 + 330;
        CloseConfigButton.y = windowHeight/2 - 145;
        CloseConfigButton.w = 50;
        CloseConfigButton.h = 50;
        CloseConfigButton.hovered(()=>{
            tint(190, 190, 59);
        });
        CloseConfigButton.draw();
        noTint();
    //---------------\\

    //Music Bar
        MusicVolBar.x = windowWidth/2 - 160;
        MusicVolBar.y = windowHeight/2 - 110;
        MusicVolBar.w = 344;
        MusicVolBar.h = 50;
        MusicVolBar.WVolume = 70;
        MusicVolBar.draw();

        VolMusicValue = MusicVolBar.WVolume/344
    //---------------\\
    
    //Sound Effect Bar
        SoundEffectVolBar.x = windowWidth/2 - 160;
        SoundEffectVolBar.y = windowHeight/2 - 30;
        SoundEffectVolBar.w = 344;
        SoundEffectVolBar.h = 50;
        SoundEffectVolBar.WVolume = 50;
        SoundEffectVolBar.draw();

        VolEffectsValue = MusicVolBar.WVolume/344
    //---------------\\


    //text Config\\
        textSize(25);
        //On && Off
        BetterText('Music:', windowWidth/2-160, windowHeight/2+50);
        BetterText('Sound Effects', windowWidth/2+184, windowHeight/2+50);
        //Volume
        BetterText('Music:', windowWidth/2-124, windowHeight/2-120);
        BetterText('Sound Effects', windowWidth/2-81, windowHeight/2-40);
    //---------------\\
};

const UIConfigMousePressed = () =>{

    if(CloseConfigButton.pressed()){
        //Get back to the main restaurant scene
        Stage ==  '';
    }


    MusicButton.pressed();
    SoundEffectButton.pressed();
    MusicVolBar.pressed();
    SoundEffectVolBar.pressed();
};