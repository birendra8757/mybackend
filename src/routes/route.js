const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
//importing external package
const underscore = require('underscore')
const abc=require('../Logger/logger')
const def = require('../util/helper')
const formatter = require('../validator/formatter')
const lodash = require('lodash')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",xyz.myFunction())
    console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)
    console.log(abc.welcome())
    console.log(def.date)
    console.log(def.month)
    console.log(def.batchinfo())
    // console.log(formatter.Name)
    console.log(formatter.trimName)
    console.log(formatter.Lower)
    console.log(formatter.Upper)


    // *************   Problem 4       *********
    let month = ["jan","feb","march","april","may","june","july","aug","sep","oct","nov","dec"]
    console.log(lodash.chunk(month ,3));

    let array = [1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(array));

    let array1 = [5,7,5,6,7]
    console.log(lodash.union(array1));

    let keyValue =[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];
    console.log(lodash.fromPairs(keyValue));












    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

