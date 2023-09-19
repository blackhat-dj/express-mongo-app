module.exports = app => {
    const cars = require('../controller/index.js')
    const purchase = require('../controller/index.js')

    const router = require('express').Router();

    router.post('/post', cars.create);
    router.get('/get', cars.get);
    router.post('/purchase', cars.findOne);
    router.get('/query',cars.updatedData)
    router.get('/purchase', cars.purchaseData);


    app.use('/api/car', router);
