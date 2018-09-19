const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const User = require('../models/user');
const app = express();

app.get('/user', (req, res) => {
    let from = Number(req.query.from) || 0;
    let limit = Number(req.query.limit) || 5;
    User.find({},'name lastname email role img google status')
        .skip(from)
        .limit(limit)
        .exec((err, data) => {
            if(err) return res.status(400).json(err);

            User.count({}, (err, count) => {
                res.json({users: data, count});
            })            
        });
});

app.post('/user', (req, res) => {
    let body = req.body;

    let user = new User({
        name: body.name,
        lastname: body.lastname,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

    user.save((err, usr) => {
        if (err) return res.status(400).json(err);
        res.json(usr);
    });

});

app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['name','lastname','email','img','role','status']);

    User.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, user) => {
        if (err) return res.status(400).json(err);
        res.json(user);
    });
});

app.delete('/user/:id', (req, res) => {

    let id = req.params.id;

    // User.findByIdAndDelete(id, (err, usr) => {
    //     console.log(usr);
    //     if (err) return res.status(400).json(err);
    //     if(!usr) return res.status(404).json(`User ${id} not found`);
    //     res.json(`User ${usr.name} ${usr.lastname} removed`);
    // });

    User.findByIdAndUpdate(id, {status: false}, {new: true},(err, usr) => {
        if (err) return res.status(400).json(err);
        if(!usr) return res.status(404).json(`User ${id} not found`);
        res.json(`User ${id} removed`);
    });

});

module.exports = app;