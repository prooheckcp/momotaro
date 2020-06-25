//Importing libs\\
const express = require('express');
const http = require('http');
const bodyparser = require('body-parser');
const app = express();
const path = require('path');

//////////CODE FOR CONNECTION TO DATABASE\\\\\\\\\\\
const mysql = require('mysql2');

//Importing Routers\\
const ErrorRoute = require('./routes/404');
const Game = require('./routes/momotaro'); 
const GetsRoute = require('./routes/gets'); 
const PostsRoute = require('./routes/posts');

//General Settings\\
const DefaultPort = 3302;

//Middleware\\
//app.use(bodyparser.urlencoded({urlencoded: false}))
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));

//Posts\\
app.use('/post', PostsRoute);

//Gets\\
app.use('/get', GetsRoute); 

//Responses\\
app.use(Game);

//404 error\\
app.use(ErrorRoute);

////Request listener\\\\
app.listen(DefaultPort);
