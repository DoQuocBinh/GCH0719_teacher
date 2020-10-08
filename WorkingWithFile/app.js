var express = require('express')
const PORT = process.env.PORT || 5000;
const path = require('path')

var app= express()
var fs = require('fs');

//localhost:5000
app.get('/',function(req,res){
   let p = path.join(__dirname) + '/index.html';
   res.sendFile(p);
})


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/register',function(req,res){
    let p = path.join(__dirname) + '/register.html';
    res.sendFile(p);
})
app.get('/login',function(req,res){
    let p = path.join(__dirname) + '/login.html';
    res.sendFile(p);
})
var fspromises = require('fs').promises;
app.post('/doLogin',async function(req,res){
    //get what user entered into form
    let nameInput = req.body.txtName;
    let phoneInput = req.body.txtPhone;
    content= await fspromises.readFile('users.txt','utf-8');
    let usersText = content.trim().split(os.EOL);
    for(i=0;i<usersText.length;i++){
       let eachUser = usersText[i];
        let name = eachUser.split(';')[0];
        let phone =  eachUser.split(';')[1];
        if(name== nameInput && phone == phoneInput){
            res.end('Correct user!');
            return;
        }
    }
    res.end('Invalid user');
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

