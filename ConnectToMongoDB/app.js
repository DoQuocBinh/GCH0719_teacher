
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

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://binhdq:12345ABC@cluster0-lkrga.mongodb.net/test?retryWrites=true&w=majority';

app.get('/all',async function(req,res){
    let client= await MongoClient.connect(url);
    let dbo = client.db("GCH0719");
    let results = await dbo.collection("Product").find({}).toArray();
    res.render('allSanPham',{sanPham:results});
})

app.get('/delete',async function(req,res){
    let id = req.query.id;
    var ObjectID = require('mongodb').ObjectID;
    let condition = {"_id" : ObjectID(id)};

    let client= await MongoClient.connect(url);
    let dbo = client.db("GCH0719");
    await dbo.collection("Product").deleteOne(condition);
    res.redirect('/all');
})
const PORT = process.env.PORT || 5000
var server=app.listen(PORT,function() {
    console.log("Server is running at " + PORT);
});