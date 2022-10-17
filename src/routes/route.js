const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request params ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})
let movies = ['Indian','Damini','Junglee','Gadar','Nayak']
// solution 01
router.get('/movies',function(req,res){
   
    
    console.log("the popular movie "+ movies)
    res.send(movies);
})
// solution 02

// router.get('/movies/:indexNumber',function(req,res){
    
   
//     let indexNumber = req.params.indexNumber
//     res.send(movies[indexNumber])
    
// })
//solution 03

router.get('/movies/:indexNumber',function(req,res){
    let indexNumber = req.params.indexNumber
    if(indexNumber>=movies.length){
        res.send("plese enter valid index number")
    }else{
        res.send(movies[indexNumber])  
    }
})
// solution 04
let films = [ {
    id: 1,
    name: 'The Shining'
   }, {
    id: 2,
    name:' Incendies'
   }, {
    id: 3,
    name: 'Rang de Basanti'
   }, {
    id: 4,
    name: 'Finding Nemo'
   }]
   router.get('/films',function(req,res){
    console.log("those films are"+films)
    res.send(films);
   })
// //solution 05
router.get('/films/:filmId',function(req,res){
   let films = [ {
    id: 1,
    name: 'The Shining'
   }, {
    id: 2,
    name:' Incendies'
   }, {
    id: 3,
    name: 'Rang de Basanti'
   }, {
    id: 4,
    name: 'Finding Nemo'
   }]
   let index = req.params.filmId;
   if (index >= films.length){
    return res.send("No movie exists with this id")
    
   }else{
    res.send(films[index])
   }
})
   

module.exports = router;