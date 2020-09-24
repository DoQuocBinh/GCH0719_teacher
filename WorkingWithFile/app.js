var express = require('express')
const PORT = process.env.PORT || 5000;
const path = require('path')

var app= express()

//localhost:5000
app.get('/',function(req,res){
   let p = path.join(__dirname) + '/index.html';
   res.sendFile(p);
})
var fs = require('fs')
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/register',function(req,res){
    let p = path.join(__dirname) + '/register.html';
    res.sendFile(p);
})

app.get('/allUsers',async function(req,res){
    await fs.readFile('users.txt',function(err,content){
        res.end(content);
    })
})

var os = require('os')
app.post('/doRegister',function(req,res){
    //get what user entered into form
    let name = req.body.txtName;
    let phone = req.body.txtPhone;
    //write to file
    let content= name + ';' + phone;
    fs.appendFile('users.txt',content + os.EOL,function(err){
        if(err)
            res.end('Something is wrong!');
        else
            res.end('Done! Check the file for update')
    })
})

app.listen(PORT,function(){
    console.log("Server is running!")
});

