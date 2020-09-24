var express = require('express')
const PORT = process.env.PORT || 5000;
const path = require('path')

var app= express()

//localhost:5000
app.get('/',function(req,res){
   let p = path.join(__dirname) + '/index.html';
   res.sendFile(p);
})

app.listen(PORT,function(){
    console.log("Server is running!")
});

