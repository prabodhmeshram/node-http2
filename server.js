'use strict';

const http2 = require('http2');
const fs = require('fs');

const server = http2.createSecureServer({
    key : fs.readFileSync('certs/localhost-privkey.pem'),
    cert: fs.readFileSync('certs/localhost-cert.pem')
});

server.on('error', (err) => console.log(err));

server.on('socketError', (err) => console.log(err));

server.on('stream', (stream, headers) => {

    stream.respond({
        'content-type' : 'text/html',
        ':status' : 200
    });

    stream.end('<h1>Hello HTTP 2 </h1>');
});

server.listen(8443);