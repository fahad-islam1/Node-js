const { MongoClient } = require("mongodb");
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'ecommerce';
async function dbConnection() {
    try {
        let result = await client.connect();
        console.log("Connected successfully to server");
        let db = await result.db(database);
        return db.collection('products');
        
    } catch (error) {
        console.error(error);
        throw error;
        
    }
}

module.exports = dbConnection;
