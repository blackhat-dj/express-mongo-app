module.exports = app => {
    const cars = require('../controller/index.js')
    const purchase = require('../controller/index.js')

    const router = require('express').Router();

    router.post('/post', cars.create);
    router.get('/get', cars.get);
    router.get('/:carId', cars.findOne);
    router.put('/:carId',cars.update)
    router.get('/purchase', cars.getData);
    router.post('/purchase',purchase.addData)
    router.get('/query',cars.updatedData)
    router.get('/purchase', cars.purchaseData);


    app.use('/api/car', router);
};