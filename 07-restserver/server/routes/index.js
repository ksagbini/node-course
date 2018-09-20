/**
 * index.js
 * File to include all rest routes into the main server  
 */

const express = require('express');
const app = express();

app.use(require('./user'));
app.use(require('./login'));

module.exports = app;