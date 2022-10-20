const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})

router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})
//******** *****  solution01       **********
// write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7]
// //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of
// numbers till last digit in the array

router.get("/sol1",function(req,res){
    let arr = [1,2,3,5,6,7]
    let n = arr[arr.length-1]; 
    let sum = n*(n+1)/2;      //formula for adding number
    let sum1 = arr.reduce((a,b)=>a+b);  //rudece method use for add it
    let missingNumber = sum-sum1;     //28-24=4

    console.log("missingNumber is " + missingNumber)

    ///LOGIC WILL GO HERE
res.send( { "missingNumber is ": missingNumber } );

})

// / -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33,34, 35, 37, 38]: 36 is missing

// //logic : sum of n consecutive numbers is [ n * (first + last) / 2 ]..so get sum of all
// numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    // ****************solution02**********************
    router.get("/sol2",function(req,res){
        let arr = [33,34,35,37,38]//missing number is 36
        let n = (arr.length)+1; //add 1 becouse one element is missing
        const first = arr[0];      //it is return is first element of the array
        const last = arr[arr.length-1];  //last element of the array
        const sum = n*(first+last)/2;    //sum formula
        const sum1 = arr.reduce((a,b)=>a+b);//reduce method adding the function
        let missingNumber = sum-sum1;//213-177  =36

        console.log("missingNumber is " + missingNumber)
        res.send({"the missing number is " : missingNumber});

    })
    // ********************assignment post API**************************

let players =
[
{
"name": "manish",
"dob": "1/1/1995",
"gender": "male",
"city": "jalandhar",
"sports": [
"swimming"
]
},
{
"name": "gopal",
"dob": "1/09/1995",
"gender": "male",
"city": "delhi",
"sports": [
"soccer"
],
},
{
"name": "lokesh",
"dob": "1/1/1990",
"gender": "male",
"city": "mumbai",
"sports": [
"soccer"
],
},
]
// router.post('/players', function (req, res) {
//     let NewPlayer=req.body;
//         players.push(NewPlayer);
// //LOGIC WILL COME HERE
// res.send( { data: players , status: true } )
// console.log(players);
// })
// router.post('/players',function(req,res){
//     const body = req.body
    
// //player name should be unique ,this name should not exist in the playes araay
//     const playerDetails = players.find(player=>player.name===body.name)
//     //when there is not match found then find will return undefind

//     if(playerDetails){
//         return res.send({massage:"player details already exist"})
//     }else{
//         players.push(body)
//         res.send(players);   
//     }
    
// })



module.exports = router;