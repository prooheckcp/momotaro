let VolMusicValue;
let VolEffectsValue;


const SetupConfigUI = () =>{
    //Close Config Button\\
    CloseConfigButton = new NewButton( 0, 0, 0, 0, CloseMark);
    //------------\\

    //Music Frame Button\\
        MusicButton = new NewButton( 0, 0, 0, 0,SoundOff);
    //------------\\

    //Sound Effects Button\\
        SoundEffectButton = new NewButton( 0, 0, 0, 0,SoundOn);
    //------------\\

    //Aditional buttons for music volume\\
        HighVolMusic = new NewButton( 0, 0, 0, 0,RightYellowArrow);
        LowVolMusic = new NewButton( 0, 0, 0, 0,LeftYellowArrow);
    //------------\\

    //Aditional buttons for Sound Effect volume\\
        HighVolEffect = new NewButton( 0, 0, 0, 0,RightYellowArrow);
        LowVolEffect = new NewButton( 0, 0, 0, 0,LeftYellowArrow);
    //------------\\

    //Barras para controle dos sons\\
        MusicVolBar = new Volume( 0, 0, 0, 0);
        SoundEffectVolBar = new Volume( 0,0,0,0);
    //------------\\

};

const DrawConfigurationWindow = () =>{

    // main frame \\
        image(ConfigFrame, windowWidth/2-400, windowHeight/2-150);
    //------------\\

    //Sound Effect Botton\\
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

    // Aditional 1 Music Botton\\
        HighVolMusic.x = windowWidth/2+190;
        HighVolMusic.y = windowHeight/2-110;
        HighVolMusic.w = 40;
        HighVolMusic.h = 49;
        HighVolMusic.hovered(()=>{
            tint(190, 190, 59);
        });
        HighVolMusic.draw();
        noTint();
    //---------------\\

    // Aditional 2 Music Botton\\
        LowVolMusic.x = windowWidth/2-205;
        LowVolMusic.y = windowHeight/2-110;
        LowVolMusic.w = 40;
        LowVolMusic.h = 49;
        LowVolMusic.hovered(()=>{
            tint(190, 190, 59);
        });
        LowVolMusic.draw();
        noTint();
    //---------------\\

    // Aditional 1 Effect Botton\\
        HighVolEffect.x = windowWidth/2+190;
        HighVolEffect.y = windowHeight/2-30;
        HighVolEffect.w = 40;
        HighVolEffect.h = 49;
        HighVolEffect.hovered(()=>{
            tint(190, 190, 59);
        });
        HighVolEffect.draw();
        noTint();
    //---------------\\

    // Aditional 2 Effect Botton\\
        LowVolEffect.x = windowWidth/2-205;
        LowVolEffect.y = windowHeight/2-30;
        LowVolEffect.w = 40;
        LowVolEffect.h = 49;
        LowVolEffect.hovered(()=>{
            tint(190, 190, 59);
        });
        LowVolEffect.draw();
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
        MusicVolBar.WVolume = MusicVolBar.WVolume;
        MusicVolBar.draw();

        VolMusicValue = MusicVolBar.WVolume/344
    //---------------\\


    
    //Sound Effect Bar
        SoundEffectVolBar.x = windowWidth/2 - 160;
        SoundEffectVolBar.y = windowHeight/2 - 30;
        SoundEffectVolBar.w = 344;
        SoundEffectVolBar.h = 50;
        SoundEffectVolBar.WVolume = SoundEffectVolBar.WVolume;
        SoundEffectVolBar.draw();

        VolEffectsValue = SoundEffectVolBar.WVolume/344
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

    /*
    if(VolMusicValue = 0){
        image(SoundOff, windowWidth/2 - 160, windowHeight/2 - 110);
    }
    if(VolMusicValue > 0){
        image(SoundOn, windowWidth/2 - 160, windowHeight/2 - 110);
    }
    */
};

const UIConfigMousePressed = () =>{

    CloseConfigButton.pressed(()=>{ConfigWindow = false});

    MusicButton.pressed(()=>{
            MusicVolBar.WVolume = 0;
    });

    SoundEffectButton.pressed(()=>{
        SoundEffectVolBar.WVolume = 0;
        
    });

    HighVolMusic.pressed(()=>{
        MusicVolBar.WVolume = MusicVolBar.WVolume + 43;
    });

    LowVolMusic.pressed(()=>{
        MusicVolBar.WVolume = MusicVolBar.WVolume - 43;
    });

    HighVolEffect.pressed(()=>{
        SoundEffectVolBar.WVolume = SoundEffectVolBar.WVolume + 43;
    });

    LowVolEffect.pressed(()=>{
        SoundEffectVolBar.WVolume = SoundEffectVolBar.WVolume - 43;
    });

    MusicVolBar.pressed();
    SoundEffectVolBar.pressed();
};