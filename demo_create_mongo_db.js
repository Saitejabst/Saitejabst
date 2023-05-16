const { MongoClient } = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'mydb';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    // console.log(db)
    const collection = db.collection('mydb');
    // console.log(collection)

    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    // const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    // console.log('Inserted documents =>', insertResult);

    // const filteredDocs = await collection.find({ a: 3 }).toArray();
    // console.log('Found documents filtered by { name : teja } =>', filteredDocs);

    // const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
    // console.log('Updated documents =>', updateResult);

    // const deleteResult = await collection.deleteMany({ a: 2 });
    // console.log('Deleted documents =>', deleteResult);

    // const indexName = await collection.createIndex({ a: 1 });
    // console.log('index name =', indexName);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());


