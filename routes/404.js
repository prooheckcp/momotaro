const express = require('express');
const path = require('path');
const entryPoint = require('../util/path');


const router = express.Router();

router.use((req, res, next) => {
    res.sendFile(path.join(entryPoint, 'views', '404.html'));
});


module.exports = router;