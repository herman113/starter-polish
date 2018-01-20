// https://www.w3schools.com/nodejs/nodejs_http.asp

// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080



// https://stackoverflow.com/questions/35995273/how-to-run-html-file-using-node-js
// var http = require('http');
// var fs = require('fs');

// const PORT=8080; 

// fs.readFile('./index.html', function (err, html) {

//     if (err) throw err;    

//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(PORT);
// });


// https://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server?noredirect=1&lq=1

// npm install connect serve-static

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(4000, function(){
    console.log('Server running on 4000...');
});