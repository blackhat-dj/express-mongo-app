const express = require('express')
const { getDataFromDb } = require('./mongo-service');

const app = express();

app.get('/health', (req, res) => {
    res.status(201).send('SUCCESS');
})

app.get('/mongodb/query', async (req, res) => {
    const response = await getDataFromDb();
    res.status(201).send(response);
})

app.listen(3000);