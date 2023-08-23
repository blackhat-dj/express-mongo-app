const express = require('express')
const { getDataFromDb, createDocument  } = require('./mongo-service');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/health', (req, res) => {
    res.status(201).send('SUCCESS');
})

app.get('/mongodb/query', async (req, res) => {
    const response = await getDataFromDb();
    res.status(201).send(response);
});

app.post('/mongodb/create', (req, res) => {
    let {
        name,
        age,
        phone
    } = req.body;
    createDocument(name, age, phone)
    res.status(200).json({message: 'Success'});
})

app.listen(3000);