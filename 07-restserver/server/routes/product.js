/**
 * product.js
 * Rest service to manage products
 */

const express = require('express');
const _ = require('underscore');
const Product = require('../models/product');
const { authToken, adminRole } = require('../middlewares/auth');

const app = express();

/**
 * Get all products
 */
app.get('/product', authToken, (req, res) => {
    Product.find({status: true })
        .skip(Number(req.params.from || 0))
        .limit(Number(req.params.limit || 10))
        .populate('user', 'name lastname email')
        .populate('category', 'name')
        .exec((err, products) => {
            if(err) return res.status(500).json(err);
            return res.json(products);
        });
});

/**
 * Get product by id
 */
app.get('/product/:id', authToken, (req, res) => {
    Product.findById({_id: req.params.id})
        .populate('user', 'name lastname email')
        .populate('category', 'name')
        .exec((err, products) => {
            if(err) return res.status(500).json(err);
            return res.json(products);
        });
});


app.get('/product/search/:search', authToken, (req, res) => {
    let regex = new RegExp(req.params.search, 'i')
    Product.find({name: regex}) 
        .populate('category', 'name')
        .exec((err, products) => {
            if(err) return res.status(500).json(err);
            return res.json(products);
        });
});

/**
 * Create new product
 */
app.post('/product', authToken, (req, res) => {
    let params = req.body;
    let product = new Product({
        name: params.name,
        price: params.price,
        description: params.description,
        user: req.user._id,
        category: params.category
    });

    product.save((err, prod) => {
        if(err) return res.status(500).json(err);
        res.json(prod);
    });
});

/**
 * Update product
 */
app.put('/product/:id', authToken, (req, res) => {
    let params = _.pick(req.body, ['name', 'price', 'description']);
    Product.findByIdAndUpdate(req.params.id, params, {new: true, runValidators: true}, (err, prod) => {
        if(err) return res.status(500).json(err);
        if(!prod) return res.status(404).json(`Product ID: ${req.params.id} not found`);
        res.json(prod);
    });
});

/**
 * Delete product
 */
app.delete('/product/:id', [authToken, adminRole], (req, res) => {
    Product.findByIdAndUpdate(req.params.id, {status: false},{new: true}, (err, prod) => {
        if(err) return res.status(500).json(err);
        if(!prod) return res.status(404).json(`Product ID: ${req.params.id} not found`);
        res.json(`Product ID ${req.params.id} deleted`);
    });
});


module.exports = app;