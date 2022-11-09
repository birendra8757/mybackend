const express = require('express');
const route = require('./routes/route.js');
const mongoose  = require('mongoose');
const app = express();

app.use(express.json());



mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen( 3000, function () {
    console.log('Express app running on port ' + (3000))
});
