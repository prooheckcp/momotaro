//Variables\\

    const express = require('express');
    const router = express.Router();
    const path = require('path');
    const entryPoint = require('../../util/path');
//----------\\

//Absolute path of the files\\

const SoundPath = (MusicName) => path.join(entryPoint, 'Game_Images', 'Music', MusicName);
//---------------------------\\

//Audio\\

    router.get('/money', (req, res, next) =>{
        res.sendFile(SoundPath('money.ogg'));
    });

    router.get('/click', (req, res, next) =>{
        res.sendFile(SoundPath('Click.ogg'));
    });

    router.get('/background_music', (req, res, next) =>{
        res.sendFile(SoundPath('PerituneMaterial_Shizima.ogg'));
    });
    router.get('/KnifeChoping', (req, res, next) =>{
        res.sendFile(SoundPath('KnifeChoping.ogg'));
    });
//------\\

module.exports = router;