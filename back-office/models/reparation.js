const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Reparation schema & model
const Reparation = new Schema({
    Piece: {
        type: mongoose.Types.ObjectId, 
        ref: "piece"
    },
    date_debut: {
        type: Date,
        default: Date.now
    },
    date_fin: {
        type: Date,
        default: null
    },
    description: {
        type: String,
        required: [true, 'Type field is required']
    },
    avancement: {
        type: Number,
        min: 0, 
        max: 100,
        required: [true, 'Type field is required']
    },
    quantite: {
        type: Number,
        required: [true, 'Type field is required']
    },
    status: {
        type: String,
        default: 'En cours'
    },
    Car: {
        type: mongoose.Types.ObjectId, ref: "car"
    },
});


const reparation = mongoose.model('reparation',Reparation);

module.exports = reparation;