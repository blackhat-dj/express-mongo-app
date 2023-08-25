# express-mongo-app

## CAR SHOPPING - REST API

- "GET /api/car/get" - Get all cars available to buy (from 'cars' collection)
```
Response JSON:
[{
    brand: 'BMW',
    model: 'X5',
    carId: 23445,
    price: 10000000,
    status: 'AVAILABLE'
},
{
    brand: 'Hyundai',
    model: 'Grand i10',
    carId: 234452,
    price: 1200000,
    status: 'AVAILABLE'
}]
```
- "POST /api/car/purchase" - When user select a car and send request, in DB create a new document with OrderId, date (in 'purchase' collection) & update the status to 'SOLD' in 'cars' collection
```
Request JSON:
{
    brand: 'BMW',
    model: 'X5',
    carId: 2342525
}
Response:
{
    message: 'Thank you for purchasing (BMW X5)'
}
```
- "GET /api/car/query" - Get all sold cars (from 'cars' collection)
```
Response JSON:
[{
    brand: 'Hyundai',
    model: 'Grand i10',
    carId: 234452,
    price: 1200000,
    status: 'SOLD'
}]
```

Create Document in mongodb before starting the application development and get it reviewed from me.
```
Create 2 collections
* car
 {
    brand: 'BMW',
    model: 'X5',
    carId: 23445,
    price: 10000000,
    status: 'AVAILABLE'
}
* Purchase
 {
    orderId: '1000',
    brand: 'BMW',
    model: 'X5',
    carId: 23445,
    price: 10000000,
    orderDate: '15/04/2023'
}
```