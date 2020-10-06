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
        console.log('something is wrong; readFile' + error);
    }
})
app.get('/add', function(req,res){
    res.render('addProduct');
})
app.post('/doAddProduct',async function(req,res){
    //load old database
    try {
        //read from file and load to memory
        const data = await fs.readFile('database.json');
        let products = JSON.parse(data).products;
        //from user input
        let id = req.body.txtId;
        let name = req.body.txtName;
        let price = req.body.Price;
        let newProduct =   {"id": Number(id), "name": name, "price": price}
        //update memory
        products.push(newProduct);
        var document = {'products': products}
        //write memory to file
        await fs.writeFile('database.json',JSON.stringify(document));
        res.redirect('/all');

    } catch (error) {
        console.log('something is wrong; write' + error);
    }
})

app.get('/delete',async function (req,res){
    let id = req.query.id;
    let deleteIndex =-1;
    //load file to memory(array)
    try {
        const data = await fs.readFile('database.json');
        var products = JSON.parse(data).products;
        for(i=0;i<products.length;i++){
            if(products[i].id == id){
               deleteIndex = i;
                break;
            }
        }
        products.splice(deleteIndex,1);
        //save to file
        var document = {'products': products}
        //write memory to file
        await fs.writeFile('database.json',JSON.stringify(document));
        res.redirect('/all');
        
    } catch (error) {
        console.log('something is wrong; delete file' + error);
    }
})

var PORT = process.env.PORT || 5000;
app.listen(PORT,function(){
    console.log('server is running at port ' + PORT);
})