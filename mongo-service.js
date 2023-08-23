const { MongoClient } = require('mongodb')
const url = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.5"
const client = new MongoClient(url)

const getDataFromDb = async () => {
    const conn = await client.connect();
    const db = conn.db('mongodbVSCodePlaygroundDB');
    const collection = db.collection('employee');
    const output = await collection.find({}).toArray();
    console.log(output)
    return output;
}

async function createDocument(incomingName, incomingAge, incomingPhone) {
    const conn = await client.connect();
    const db = conn.db('mongodbVSCodePlaygroundDB');
    const collection = db.collection('employee');
    const output = await collection.insertOne({name: incomingName, age: incomingAge, phone: incomingPhone})
    console.log(output);
    return output;
}

module.exports = { getDataFromDb, createDocument }