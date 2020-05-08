const express = require('express');
const router = express.Router();
const path = require('path');
const entryPoint = require('../util/path');

router.get('/' ,(req, res, next) => {
    res.sendFile(path.join(entryPoint, 'views', 'momotaro.html'));
});

module.exports = router;