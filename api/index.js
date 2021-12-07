// const {test, test1 } = require('./2.js');
//
// console.log(test("007"));
// console.log(test1("008"));

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log('start');


    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');


    console.log('end');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});