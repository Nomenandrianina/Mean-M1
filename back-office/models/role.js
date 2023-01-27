const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Role schema & model
const Role = new Schema({
    name: {
        type: String,
        required: [true, 'Type field is required']
    }
});


const role = mongoose.model('role',Role);

module.exports = role;
