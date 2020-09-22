var http = require('http');
var fs = require('fs');

const PORT = process.env.PORT || 5000;

//create a server object:
http.createServer(async function (req, res) {
    await fs.readFile('data.txt',function(err,data){
        if(err){
            res.write('Read file Error');
             res.end(); //end the response
        }
        else{
            res.write(data);
            res.end(); //end the response
        }
            
    })
}).listen(PORT); 
