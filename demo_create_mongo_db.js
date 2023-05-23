const { MongoClient } = require('mongodb');
console.log(MongoClient);
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
  console.log(collection)

  // const findResult = await collection.find({}).toArray();
  // console.log('Found documents =>', findResult);

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

  // const cursor = db.collection('mydb').find({ item: 'canvas' });
  // console.log(cursor)

  // await db.collection('mydb').insertOne({
  //     item: 'canvas',
  //     qty: 100,
  //     tags: ['cotton'],
  //     size: { h: 28, w: 35.5, uom: 'cm' }
  //   });

  // await db.collection('products').insertMany([
  //     {
  //       item: 'journal',
  //       qty: 25,
  //       tags: ['blank', 'red'],
  //       size: { h: 14, w: 21, uom: 'cm' }
  //     },
  //     {
  //       item: 'mat',
  //       qty: 85,
  //       tags: ['gray'],
  //       size: { h: 27.9, w: 35.5, uom: 'cm' }
  //     },
  //     {
  //       item: 'mousepad',
  //       qty: 25,
  //       tags: ['gel', 'blue'],
  //       size: { h: 19, w: 22.85, uom: 'cm' }
  //     }
  //   ]);

  // const cursor = db.collection('inventory').find({
  //   'size.h': { $lt: 15 }
  // });

  // console.log(cursor)

  // await db.collection('products').insertMany([
  //   {
  //     item: 'journal',
  //     qty: 25,
  //     size: { h: 14, w: 21, uom: 'cm' },
  //     status: 'A'
  //   },
  //   {
  //     item: 'notebook',
  //     qty: 50,
  //     size: { h: 8.5, w: 11, uom: 'in' },
  //     status: 'A'
  //   },
  //   {
  //     item: 'paper',
  //     qty: 100,
  //     size: { h: 8.5, w: 11, uom: 'in' },
  //     status: 'D'
  //   },
  //   {
  //     item: 'planner',
  //     qty: 75,
  //     size: { h: 22.85, w: 30, uom: 'cm' },
  //     status: 'D'
  //   },
  //   {
  //     item: 'postcard',
  //     qty: 45,
  //     size: { h: 10, w: 15.25, uom: 'cm' },
  //     status: 'A'
  //   }
  // ]);

  const cursor = db.collection('products').find({
    size: { h: 14, w: 21, uom: 'cm' }
  });

  console.log(cursor)

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());


