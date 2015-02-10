
var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    rating: Number,
    link: String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', BookSchema);
