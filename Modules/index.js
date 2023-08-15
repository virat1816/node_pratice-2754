// var http = require('http');

// http.createServer(function(req,res){
//     res.write("Hello from server");
//     res.end("END");
//     // res.end("Bye from server");
// }).listen(5500);


var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('text.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

              