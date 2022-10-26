const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:{type: String,
        require:true 
    },
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number, default: 10},
    year:{
        type:Number,
        default:2022,
    },
    totalpage:Number,
    stockAvailable:{
        type:Boolean,
        default:true
    },
}, { timestamps: true });


module.exports = mongoose.model('Getbook', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
