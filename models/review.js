const mongoose = require('mongoose');
const Schema = mongoose.Schema; // For quicker reference

const reviewSchema = new Schema({
    body: String,
    rating: Number
});

module.exports = mongoose.model('Review', reviewSchema);