const http =  require('http')
// const fs = require('fs')
const hostname = '127.0.0.1';
const port = 8080;

exports.myDateTime = function () {
    return Date();
  };

// fs.readFile('index.html', (err, html)=>{
//     if(err){
//         throw err;
//     }
//     const server = http.createServer((req, res)=> {
//         res.statusCode = 200;
//         res.setHeader('content-type', 'text/html');
//         res.write(html)
//         res.end();
//     });
//     server.listen(port, hostname, ()=>{
//         console.log('server started on port' + port)
//     })
// })

var dt = require('./app.js');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
});
server.listen(port, hostname, () => {
    console.log('server started on port' + port)
});

var mongo = require('mongodb');
