var express = require('express')
const PORT = process.env.PORT || 5000;

var app= express()

//localhost:5000
app.get('/',function(req,res){
    res.end("Hello world");
})

app.listen(PORT,function(){
    console.log("Server is running!")
});

