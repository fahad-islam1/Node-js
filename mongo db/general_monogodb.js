const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'ecommerce';
async function dbFn() {
  try {
    let result = await client.connect();
    console.log('Connected successfully to server');
    let db = result.db(database);
    let products =  db.collection('products');
    let response = await products.find().toArray();
    console.log(response);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
} 
dbFn();

