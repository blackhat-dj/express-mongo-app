const methods = require('methods');
const { getDataFromDb, createDocument, findByIdAndUpadte } = require('../service/database/db-service');

const getCar = async (req, res) => {
    console.log('Yes')
    try {
        const response = await getDataFromDb();
        res.status(201).send(response);
    }
    catch (err) {
        res.status(500).send(err)
    }
};
const createCar = async (req, res) => {
    try {
        createDocument(req.body)
        res.status(200).json({ message: 'Thank you for purchasing(BMW X5)' });
    }
    catch (err) {
        res.status(500).send(err)
    }
};

const updatedCar = async(req, res) => {
    try{
        const response = await findByIdAndUpadte();
        res.status(201).json({
            'brand': 'Hyundai',
             'price': 1200000,
              'model': 'Grand i10',
               'carId': 234452,
                'status':'SOLD'
        }

            );
    }
    catch (err) {
        res.status(500).send(err)
    }
    }

//find methods

const purchasedCar = async (req, res) => {
    try{
        const response = await findallpurchasedCar();
        res.status(201).json(response);
    }catch (err) {
        res.status(500).send(err)
    }
    
};
//

const allCars = async () => {
  // Find all cars
  try{
  const allCars = await findAllCars();
  console.log('All Available Cars:', allCars);

  // Find all purchased cars
  const allPurchasedCars = await findAllPurchasedCars();
  console.log('All Purchased Cars:', allPurchasedCars);
}
catch{
  console.log('error')}
 finally{(() => {
  // Close the MongoDB connection when done
  close();
})}};
/*
async function findAllCars() {
  const db = client.db(dbName);
  const carsCollection = db.collection('car');
  try {
    const cars = await carsCollection.find({}).toArray();
    return cars;
  } catch (err) {
    console.error('Error finding cars:', err);
    return [];
  }
}

// Function to find all purchased cars in the "Purchase" collection
async function findAllPurchasedCars() {
  const db = client.db(dbName);
  const purchaseCollection = db.collection('Purchase');
  try {
    const purchasedCars = await purchaseCollection.find({}).toArray();
    return purchasedCars;
  } catch (err) {
    console.error('Error finding purchased cars:', err);
    return [];
  }
}

// Connect to MongoDB and perform find operations
connect()
  .then(async () => {
    // Find all cars
    const allCars = await findAllCars();
    console.log('All Available Cars:', allCars);

    // Find all purchased cars
    const allPurchasedCars = await findAllPurchasedCars();
    console.log('All Purchased Cars:', allPurchasedCars);
  })
  .catch(console.error)
   .finally(() => {
    // Close the MongoDB connection when done
    close();
  });
*/
/*
const updatedCar = await Car.findByIdAndUpdate(
    carId,
    { status: 'SOLD' },
    { new: true }
  );

  if (!updatedCar) {
    return res.status(404).json({ error: 'Car not found' });
  }

/*const soldCar = async (req, res) => {
    console.log('Yes')
    try {
        const response = await soldDataFromDb();
        res.status(201).send(response);
    }
    catch (err) {
        res.status(500).send(err)
    }
};*/

module.exports = { getCar, createCar, updatedCar, purchasedCar }