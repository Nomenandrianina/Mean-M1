const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Paiement schema & model
const Paiement = new Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    
    Car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'car'
    },
    Reparation: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reparation'
    }],
    datepaie: {
        type: Date
    },
    etat: {
        type: String,
        default: 'Unpaid'
    },
    status: {
        type: String,
        default: 'Envoye du paiement'
    }
});


const paiement = mongoose.model('paiement',Paiement);

module.exports = paiement;
