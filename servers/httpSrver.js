const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.writeHead(200, 'success', {
                'Content-Type': 'text/html',
                'Access-Control-Allow-Origin' : '*'
            });
            res.end(fs.readFileSync('../json/data.json').toString());
            break;
        default:
            res.writeHead(404, 'fail', {
                'Content-Type': 'text/plain',
            });
            res.end('url not exist');
            break
    }
}).listen(3000);