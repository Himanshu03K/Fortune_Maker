// creating schema for user
const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: Number,
        required: true
    },
    uniRoll:{
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    is_admin:{
        type: Number,
        required: true
    },
    is_verified:{
        type: Number,
        default: 0
    },
    token: {
        type: String,
        default: ''
    }
});

// models define collection of the user and exporting it
module.exports = mongoose.model('User', userSchema);