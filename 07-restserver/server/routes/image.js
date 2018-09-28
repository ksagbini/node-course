const express = require('express');
const fs = require('fs');
const path = require('path');
const fileUpload = require('express-fileupload');
const User = require('../models/user');
const Product = require('../models/product');
const app = express();

app.get('/image/:type/:img' , (req, res) => {

    let type = req.params.type;
    let img = req.params.img;

    let pathImg = `./uploads/${type}/${img}`;
    let pathNoImage = path.resolve(__dirname, `../assets/no-image.jpg`);

    res.sendFile(pathNoImage);


});


module.exports = app;