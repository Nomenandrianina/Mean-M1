const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Role schema & model
const Car = new Schema({
    image: {
        type: String,
        required: [true, 'Type field is required']
    },
    marque: {
        type: String,
        required: [true, 'Type field is required']
    },
    type: {
        type: String,
        required: [true, 'Type field is required']
    },
    moteur: {
        type: String,
        required: [true, 'Type field is required']
    },
    immatriculation: {
        type: String,
        required: [true, 'Type field is required']
    },
    etat: {
        type: String,
        required: [true, 'Type field is required']
    },
    status: {
        type: String,
        default: '0'
    },
    User: {
        type: mongoose.Types.ObjectId, ref: "user"
    },
});


const car = mongoose.model('car',Car);

module.exports = car;