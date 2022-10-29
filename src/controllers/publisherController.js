const publisherModel = require("../models/publisherModel");

//2. Write a POST api that creates a publisher from the details in the request body

const createPublisher = async function(req,res){
    let data = req.body
    let createdPublisher = await publisherModel.create(data);
    res.send({msg:createdPublisher,status:true})

}
module.exports.createPublisher=createPublisher;