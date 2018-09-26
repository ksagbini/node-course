/**
 * category.js
 * Rest service to manage categories
 */

 const express = require('express');
 const _ = require('underscore');
 const { authToken, adminRole } = require('../middlewares/auth');
 const Category = require('../models/category');



 const app = express();


app.get('/category', (req, res) => {

    Category.find({})
        .exec((err, data) => {
            if(err) return res.status(500).json(err);
            res.json(data);
        });

});

app.get('/category/:id', authToken, (req, res) => {

    

});


app.post('/category', [authToken, adminRole], (req, res) => {

});

app.put('/category', [authToken, adminRole], (req, res) => {

});

app.delete('/category', [authToken, adminRole], (req, res) => {

});



 module.exports = app;