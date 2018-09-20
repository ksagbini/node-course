/**
 * login.js
 * Rest service to create and manage user session login 
 */

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('underscore');
const User = require('../models/user');

const app = express();

app.post('/login', (req, res) => {

    let body = req.body;

    User.findOne({ email: body.email }, (err, user) => {
        if (err) return res.status(400).json(err);
        else if (!user) return res.status(400).json({ message: `User or password incorrect` });
        else if (!bcrypt.compareSync(body.password, user.password)) {
            return res.status(400).json({ message: `User or password incorrect` })
        }

        let token = jwt.sign({ user }, process.env.SEED_TOKEN, { expiresIn: process.env.EXPIRES_TOKEN });
        res.json({ user, token });
    });

});

module.exports = app; 