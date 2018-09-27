/**
 * Products database model
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let product = new Schema({

    name: {
        type: String,
        required: [true, 'Product name required']
    }, 
    price: {
        type: Number,
        required: [true, 'Price required']
    },
    description: {
        type: String,
        default: ''
    },
    available: {
        type: Boolean,
        required: true,
        default: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
});

module.exports = mongoose.model('product', product);