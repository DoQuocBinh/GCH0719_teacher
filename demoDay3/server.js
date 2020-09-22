var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        let d = new Date();
        let dates = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let dayN = d.getDay();
        let dayS = dates[dayN];
        // set response content    
        res.write
        (`<html><body><p style="color:blue">This is home Page123456.</p> ${dayS}</body></html>`);
        res.end();
    
    }
    else if (req.url == "/student") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/admin") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    
    }else if(req.url=='/login'){
        let textAndButt =
             "<input type='text' size='20'/><input type='button' value='Login'/>";
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<html><body><p>This is login Page.</p>${textAndButt}</body></html>`);
        res.end();
    }
    else
        res.end('Invalid Request!');

});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')
