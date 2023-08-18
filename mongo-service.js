const { MongoClient } = require('mongodb')

const url = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.5"
const client = new MongoClient(url)
const database = 'mongodbPlaygroundDB'

async function getDataFromDb() {
    const conn = await client.connect();
    const db = conn.db(database);
    const collection = db.collection('Test');
    const output = await collection.find({}).toArray();
    console.log(output)
    return output;
}

module.exports = { getDataFromDb }