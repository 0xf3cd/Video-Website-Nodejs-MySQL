const express = require('express');
const app = express();
const https = require('https')
const fs = require("fs");
const options = {
    key: fs.readFileSync('./privatekey.pem'),
    cert: fs.readFileSync('./certificate.pem')
};

app.get('/login', function (req, res) {
    console.log(15);
    res.send('Hello World!');
});

app.get('/', function (req, res) {
    console.log(16);
    res.send('Hello Worl2d!');
});

// https.createServer(options, (req, res) => {
//     res.writeHead(200);
//     res.end('hello world\n');
// }).listen(443, function () {
//     console.log('Https server listening on port ' + 443);
// });

https.createServer(options, app).listen(443, function () {
    console.log('Https server listening on port ' + 443);
});