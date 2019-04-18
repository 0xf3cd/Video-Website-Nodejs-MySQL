const express = require('express');
const bodyParser = require('body-parser');
const https = require('https')
const fs = require("fs");
const authenticate = require('./authenticate.js');

const options = {
    key: fs.readFileSync('./key/privatekey.pem'),
    cert: fs.readFileSync('./key/certificate.pem')
};

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const router = express.Router();

router.use((req, res, next) => {
    // 輸出記錄訊息至終端機
    console.log(req.method, req.url);
    // 繼續路由處理
    next();
});

router.get('/favicon.ico', (req, res) => {
    // res.writeHead(200, {'Content-Type': 'image/png'});
    // res.write(fs.readFileSync('./index.html').toString('utf8'));
    res.sendFile('/images.png', {root: __dirname});
    // res.status(200).send('home page!');
    // res.status(200).send('Welcome to Safety Land!');
});

app.use(express.static('homepage'));
router.get('/', (req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write(fs.readFileSync('./index.html').toString('utf8'));
    res.sendFile('/homepage/homepage.html', {root: __dirname});
    // res.status(200).send('home page!');
    // res.status(200).send('Welcome to Safety Land!');
});

app.use(express.static('login'));
router.get('/login', (req, res) => {
    // res.send('login page!');
    res.sendFile('/login/login.html', {root: __dirname});
});

router.post('/authenticate', (req, res) => {
    const data = req.body;
    console.log(data);
    authenticate.isValid(res, data);    
});

app.use('/', router);
https.createServer(options, app).listen(443, () => {
    console.log('Https server listening on port ' + 443);
});