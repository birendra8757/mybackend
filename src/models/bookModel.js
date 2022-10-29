const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "libraryAuthor1"
    }, 
    price: Number,
    ratings: Number,
    Publisher_id:{
        type:ObjectId,
        ref:"libraryPublisher",
    },
    isHardCover:{
        type:Boolean,
        default:false
    }



}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)