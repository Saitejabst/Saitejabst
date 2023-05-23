var express = require('express'); // requre the express framework
var mongoose = require('mongoose');
const Product = require('./models/productModel');
var app = express();

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.get('/products', async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        console.log(res.error);
        res.status(500).json({ message: res.message })
    }
})

app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        console.log(res.error);
        res.status(500).json({ message: res.message })
    }
})
//update prod
app.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({ message: `cannot find the prod with ID ${id}` })
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: res.message })
    }
})

app.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find the prod with ID ${id}`})
        }
        res.status(200).json(product)
    } catch (error) {
        console.log(res.error);
        res.status(500).json({ message: res.message })
    }
})

app.post('/product', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(res.error);
        res.status(500).json({ message: res.message })
    }
})

mongoose.connect('mongodb+srv://admin:uganW8J6t1JB08e6@clustersai.1eahs8l.mongodb.net/FIRSTNODE')
        .then(() => {
            console.log("connect to db")

            app.listen(3000, () => {
                console.log("server is running");
            })
        }).catch((err) => {
            console.log(err)
        })
// var mongodb = require('mongodb');
// var ObjectId = mongodb.ObjectId;
// var mongoClient = mongodb.mongoClient;
// var mainURL = "http://localhost:3000/";
// var database = null;



//     mongoClient.connect("mongodb://localhost:27017")
// })

// Endpoint to Get a list of users
// app.get('/getUsers', function (req, res) {
//     fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
//         console.log(data);
//         res.end(data); // you can also use res.send()
//     });
// })

//Step 1: Create a new user variable
// var user = {
//     "user5": {
//         "id": 5,
//         "firstname": "Liudmyla",
//         "lastname": "Nagorna",
//         "email": "mila@gmail.com"
//     },
// }

//The addUser endpoint
// app.post('/addUser', function (req, res) {
//     //Step 2: read existing users
//     fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
//         data = JSON.parse(data);
//         //Step 3: append user variable to list
//         data["user5"] = user["user5"];
//         console.log(data);
//         res.end(JSON.stringify(data));
//     });
// })

// Create a server to listen at port 8080
// var server = app.listen(8080, function () {
//     var host = server.address().address
//     var port = server.address().port
//     console.log("REST API demo app listening at http://%s:%s", host, port)
// })

//try catch scenario

// const client = new MongoClient(url);
// await client.connect();
// const collection = client.db().collection('collection');

// try {
//     await collection.insertOne({ _id: 1 });
//     await collection.insertOne({ _id: 1 }); // duplicate key error
// } catch (error) {
//     if (error instanceof MongoServerError) {
//         console.log(`Error worth logging: ${error}`); // special case for some reason
//     }
//     throw error; // still want to crash
// }