const express = require('express');
const engines = require('consolidate');
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

//npm i handlebars consolidate --save
app.engine('hbs',engines.handlebars);
app.set('views','./views');
app.set('view engine','hbs');

app.get('/',function(req,res){
    res.render('index',{name:'Cuong', city :'Gia Lai'})
})

var fs = require('fs').promises;
app.get('/all',async function(req,res){
    try {
        const data = await fs.readFile('database.json');
        var products = JSON.parse(data).products;
        res.render('allProduct',{model:products});
    } catch (error) {
        console.log('something is wrong; readFile');
    }
})
app.get('/add', function(req,res){
    res.render('addProduct');
})

var PORT = process.env.PORT || 5000;
app.listen(PORT,function(){
    console.log('server is running at port ' + PORT);
})