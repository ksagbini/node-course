/**
 * category.js
 * Rest service to manage categories
 */

const express = require('express');
const _ = require('underscore');
const { authToken, adminRole } = require('../middlewares/auth');
const Category = require('../models/category');
const app = express();

/**
 * Get all categories
 */
app.get('/category', (req, res) => {
    Category.find({})
        .sort('name')
        .populate('user', 'name lastname email')
        .exec((err, data) => {
            if (err) return res.status(500).json(err);
            res.json(data);
        });
});

/**
 * Get category by id
 */
app.get('/category/:id', authToken, (req, res) => {
    let id = req.param.id;
    Category.findById(id, (err, category) => {
        if (err) return res.status(500).json(err);
        if (!category) return res.status(404).json(`Category not exist`);
        return res.json(category);
    });


    Category.find({ _id: id })
        .populate('user', 'name lastname email')
        .exec((err, category) => {
            if (err) return res.status(500).json(err);
            if (!category) return res.status(404).json(`Category not exist`);
            return res.json(category);
        });

});

/**
 * Create new category
 */
app.post('/category', [authToken, adminRole], (req, res) => {
    let params = req.body;
    let category = new Category({
        name: params.name,
        description: params.description,
        user: req.user._id
    });

    category.save((err, cat) => {
        if (err) return res.status(500).json(err);
        return res.json(cat);
    });
});

/**
 * Update category
 */
app.put('/category/:id', [authToken, adminRole], (req, res) => {
    let body = _.pick(req.body, ['name', 'description']);
    Category.findByIdAndUpdate(req.params.id, body, { new: true, runValidators: true }, (err, category) => {
        if (err) return res.status(500).json(err);
        if (!category) return res.status(404).json(`Category ID: ${req.params.id} not found`);
        return res.json(category);
    });
});

/**
 * Delete category
 */
app.delete('/category/:id', [authToken, adminRole], (req, res) => {
    Category.findByIdAndDelete(req.params.id, (err, category) => {
        if (err) return res.status(500).json(err);
        if (!category) return res.status(404).json(`Category ID: ${req.params.id} not found`)
        return res.json('Category deleted');
    });
});


module.exports = app;