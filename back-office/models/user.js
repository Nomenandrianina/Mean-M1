const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Role = require("../models/role"); 


// create user schema & model
const User = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    firstname: {
        type: String,
        required: [true, 'First name field is required']
    },
    email: {
        type: String,
        required: [true, 'Email field is required']
    },
    password: {
        type: String,
        required: [true, 'Password field is required']
    },
    photo: {
        type: String,
        required: [true, 'Photo field is required']
    },
    Role: {
        type: mongoose.Types.ObjectId, ref: "role"
    },
});


const user = mongoose.model('user',User);

module.exports = user;