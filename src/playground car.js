
use('Carshopping');

// Insert a few documents into the sales collection.
db.getCollection('car').insertMany([
  { 'brand': 'BMW', 'price': 10000000, 'model': 'x5', 'carId': 23445, 'status':'AVAILABLE' },
   { 'brand': 'Hyundai', 'price': 1200000, 'model': 'Grand i10', 'carId': 234452, 'status':'AVAILABLE' },
   { 'brand': 'Hyundai', 'price': 1200000, 'model': 'Grand i10', 'carId': 234452, 'status':'SOLD' },

]);


 