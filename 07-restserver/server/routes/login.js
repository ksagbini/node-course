/**
 * login.js
 * Rest service to create and manage user session login 
 */

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

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


/**
 * Google config
 */
async function verify(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    });
    const payload = ticket.getPayload();
    console.log(payload);
    return {
        name: payload.given_name,
        lastname: payload.family_name,
        email: payload.email,
        img: payload.picture,
        google: true
    }
}

app.post('/login_google', async (req, res) => {
    let gUser = await verify(req.body.idtoken)
        .catch((err) => {return res.status(403).json(err)});

    User.findOne({email: gUser.email}, (err, user) => {
        if(err) return res.status(500).json(err);

        // verify if the user exist
        if(user){
            // verify if is a google user auth
            if(!user.google){
                res.status(400).json({message: 'Use email and password to autenticate'});
            }
            else{
                let token = jwt.sign({ user }, process.env.SEED_TOKEN, { expiresIn: process.env.EXPIRES_TOKEN });
                res.json({user,token});
            }
        }
        else{
            // Create new user if don't exist
            let newUser = new User({
                name: gUser.name,
                lastname: gUser.lastname,
                email: gUser.email,
                img: gUser.img,
                google: true,
                password: ':)'
            });
            newUser.save((err, nUser) => {
                if(err) return res.status(500).json(err);

                let token = jwt.sign({ user: nUser }, process.env.SEED_TOKEN, { expiresIn: process.env.EXPIRES_TOKEN });
                res.json({user: nUser,token});
            });
            
        }
    });

});


module.exports = app; 