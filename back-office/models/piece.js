const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Role schema & model
const Piece = new Schema({
    photo: {
        type: String,
        required: [true, 'Type field is required']
    },
    piece_name: {
        type: String,
        required: [true, 'Type field is required']
    },
    prix: {
        type: Number,
        required: [true, 'Type field is required']
    },
    main_oeuvre:{
        type: Number,
        required: [true, 'Type field is required']
    }
});


const piece = mongoose.model('piece',Piece);

module.exports = piece;