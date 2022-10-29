const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    authorName:{type: String,require:true,unique:true},
    age:Number,
    address:String,
    rating:Number

}, { timestamps: true });

module.exports = mongoose.model('libraryAuthor1', authorSchema)