const mongoose = require("mongoose");

const partySchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String},
    partyDate: {type: Date},
    photos: {type: Date},
    privacy: {type: Boolean},
    userId: {type: mongoose.ObjectId}
});

const Party = mongoose.model('Party', partySchema);
module.exports = Party;