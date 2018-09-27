/**
 * User database model
 */

const mongoose = require('mongoose');
const uniqueVal = require('mongoose-unique-validator')
let Schema = mongoose.Schema;

let validRole = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} is not a valid user role'
}


let user = new Schema({
    name: {
        type: String,
        required: [true, 'Required']
    },
    lastname: {
        type: String,
        required: [true, 'Lastname requires'],
    },
    email: {
        type: String,
        required: [true, 'Email required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password required']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: validRole
    },
    status: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

/**
 * Remove properties from the response object
 */
user.methods.toJSON = function(){
    let usr = this;
    let obj = usr.toObject();
    delete obj.password;
    return obj;
};

user.plugin(uniqueVal, {message: 'The {PATH} field must be unique'});

module.exports = mongoose.model('user', user);