const http = require('http');

http.createServer(function (req, res ) {
    res.writeHead(200, {'content.type': 'text/plain'});
    res.write('<h1>esto es un simple texto</h1>');
    res.end();
}).listen(3000);