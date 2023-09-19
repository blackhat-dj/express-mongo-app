const { MongoClient } = require('mongodb')
const url = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6"
const client = new MongoClient(url)

const getDataFromDb = async () => {
    const collection = await getCarCollection();
    const output = await collection.find({}).toArray();
    console.log(output)
    return output;
}

async function createDocument(reqBody) {
    const collection = await getCarCollection();
    const output = await collection.insertOne(reqBody)
    console.log(output);
    return output;
}

const findByIdAndUpadte = async () => {
    const collection = await getCarCollection();
    const output = await collection.find({}).toArray();
    console.log(output)
    return output;
}

const findallpurchasedCar = async () => {
    const collection = await getCarCollection();
    const output = await collection.find({}).toArray();
    console.log(output)
    return output;
}
 //


const getCarCollection = async () => {
    const conn = await client.connect();
    const db = conn.db('Carshopping');
    return db.collection('car');
}

module.exports = { getDataFromDb, createDocument, findByIdAndUpadte ,findallpurchasedCar}