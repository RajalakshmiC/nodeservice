
//Import mongoose
var mongoose = require('mongoose');

// define the schema for our book model
var bookSchema = mongoose.Schema({
    title:String,
	author:String,
	isbn:Number,
    created: Date,
    updated: Date
});

// create the model for book
module.exports = mongoose.model('Book', bookSchema);