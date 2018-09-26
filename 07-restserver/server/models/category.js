const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let category = new Schema({
    name: {
        type: String,
        required: [true, 'Category name is required']
    },
    description: {
        type: String,
        default: ''
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'user',
        required: [true, 'User id is required']
    },
    status: {
        type: Boolean,
        default: true
    }
});


module.exports = mongoose.model('category', category);