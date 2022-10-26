const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

 app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://birendrakumar:Kumar%40123@cluster0.lmqwhdb.mongodb.net/birendrakumar8757", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(3000, function () {
    console.log('Express app running on port ' + (3000))
});
