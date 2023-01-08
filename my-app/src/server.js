var http = require('http');

http.createServer(function(req, res) {
    console.log("Server is starting");
    console.log(req.url);
    if (req.url === '/home') {
        res.writeHead(200);
        //set response content
        res.end('<html><body><p> This is home page </p></body> </html>');
    } else if (req.url === '/employee') {
        res.writeHead(200);
        res.end('<html><body><p> This is Employee detail page </p></body> </html>');
    } else if (req.url === '/department') {
        res.writeHead(200);
        res.end('<html><body><p> This is Department page </p></body> </html>');
    } else {
        res.writeHead(200);
        res.end("<html><body><h1>This is redirected page </h1></body></html>");
    }
}).listen(8000);


// var http = require('http');
// var url = require('url');
// var fs = require('fs');
// http.createServer(function(req, res) {
//     if (req.url == '/') { //check url of the current requeest
//         // set response header
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         //set response content
//         res.write('<html><body><p> This is home page </p> <br></br><a href= "http://localhost:8080/mca.html"> MCA Student details</a><br></br> <a href= "http://localhost:8080/bca.html"> BCA Student details</a> </body> </html>');
//         req.end();
//     } else {
//         var q = url.parse(req.url, true);
//         var filename = "." + q.pathname;
//         fs.readFile(filename, function(err, data) {
//             if (err) {
//                 req.writeHead(404, { 'Content-Type': 'text/html' });
//                 return res.end("404 Not found");
//             }
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.write(data);
//             return res.end();
//         });
//     }
// }).listen(8081);

// // 2nd code alt
// var http = require('http');


// var url = require('url');


// var fs = require('fs');

// http.createServer(function(req, res) {

//     if (req.url == '/') { //check the URL of the current request

//         // set response header

//         res.writeHead(200, { 'Content-Type': 'text/html' });

//         // set response content
//         res.write('<html> <body><p>this is home page.</p><br> <a href="http://localhost:8080/mca.html">mca student details</a><br> <a href="http://localhost:8080/bca.html">bca student details</a> </body></html>')
//     } else {

//         var q = url.parse(req.url, true);
//         var filename = "." + q.pathname;

//         fs.readFile(filename, function(err, data) {

//             if (err) {

//                 res.writeHead(404, { 'Content-Type': 'text/html' });

//                 return res.end("404 Not Found");

//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.write(data);
//                 return res.end();
//             }
//         });
//     }
// }).listen(8080);