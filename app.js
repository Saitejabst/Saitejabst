// const http =  require('http')
const fs = require('fs/promises');
const express = require('express');
//cross origin resource sharing----cors
const cors = require('cors');
const _ = require('lodash');
//to generate unique id---uuid
const {v4 : uuid} = require('uuid');
const res = require('express/lib/response');
const app = express();
//in order to accept json profile by express
app.use(express.json());

app.get("/outfit", (req, res)=>{
    const tops = ["red","white","black"];
    const jeans = ["blue", "red", "grey"];
    const shoes = ["orange", "red"]
    res.json({
        top : _.sample(tops),
        jeans : _.sample(jeans),
        shoes : _.sample(shoes)
    })
    res.send("this worked")
})

app.get("/comments/:id", async(req, res)=>{
    const id = req.params.id;
    let content;
    try{
        content = await fs.readFile(`data/comments/${id}.txt`, "utf-8")
    }
    catch (err){
        return res.sendStatus(404);
    }
    res.json({
        content : content
    });
})

app.post("/comments", async(req, res) => {
    const id = uuid();
    const content = req.body.content;

    if(!content){
        return res.sendStatus(400);
    }

    await fs.mkdir("data/comments", {recursive : true})
    await fs.writeFile(`data/comments/ ${id}.txt`, content);
    console.log(content);
    res.status(201).json({
        id: id
    });
});

app.listen(8080, ()=> console.log("API is running..."));

// const hostname = '127.0.0.1';
// const port = 8080;

// exports.myDateTime = function () {
//     return Date();
//   };

// // fs.readFile('index.html', (err, html)=>{
// //     if(err){
// //         throw err;
// //     }
// //     const server = http.createServer((req, res)=> {
// //         res.statusCode = 200;
// //         res.setHeader('content-type', 'text/html');
// //         res.write(html)
// //         res.end();
// //     });
// //     server.listen(port, hostname, ()=>{
// //         console.log('server started on port' + port)
// //     })
// // })

// var dt = require('./app.js');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write("The date and time are currently: " + dt.myDateTime());
//     res.end();
// });
// server.listen(port, hostname, () => {
//     console.log('server started on port' + port)
// });

// var mongo = require('mongodb');

console.log("Hello Sai");