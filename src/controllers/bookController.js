const { count } = require("console")
const BookModel= require("../models/BookModel");
const Authormodel=require("../models/authorModel")


// assignment solution

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const booksBychetan = async function(req,res){
let id = await Authormodel.find({author_name: "Chetan Bhagat"}).select({author_id:1,_id:0})
let id1=id[0]
let booksdata = await BookModel.find(id1) 
res.send({booksdata})
}

const autorofTwostate = async function(req,res){
let bookdata = await BookModel.findOneAndUpdate({bookName:"Two states"},{$set:{price:100}},{new:true}).select({author_id:1 ,_id:0 })
let authorofTwostate = await Authormodel.find(bookdata).select({author_name:1,address:1,_id:0})
res.send({msg:authorofTwostate})

}

const bookbetween = async function(req,res){
let id1 = await BookModel.find({ price : { $gte: 50, $lte:100,}}).select({ author_id :1,_id:0})
let id2= id1.map(x=>x.author_id)
let authors = await Authormodel.find({author_id:id2}).select({author_name:1,age:1,_id:0})
res.send({authors})
}







const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}






const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.booksBychetan = booksBychetan
module.exports.autorofTwostate=autorofTwostate
module.exports.bookbetween=bookbetween

module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks