const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));


//for the base request
app.get("/" , (req, res)=> {
    res.send("We are currently at the base. Type in /yourname in the URL to see a message.");
})

//for the body request
app.get("/body" , (req, res)=>{
    console.log(req.body);
    res.send("body success");

})



//for the HTML file request
app.get("/frontend",function(req,res){
    res.sendFile(__dirname + "/frontend-task.html");
});

//for calculating average of three numbers
app.get("/avg",function(req,res){
    res.sendFile(__dirname + "/summ.html");
});
app.post("/avg",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var num3=Number(req.body.num3);
    var result=(num1+num2+num3)/3;
    res.send("The result of calculation is "+ result);
});



//for the variable parameter request
app.get("/:name" , (req, res)=> {
    res.send("Greetings, " + req.params.name + '!');
    console.log(req.params);
})

//setting up the sever
app.listen(4000, function(){
    console.log("server started at 4000 port ");
});