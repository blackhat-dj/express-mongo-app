const { getDataFromDb, createDocument } = require('../service/database/db-service');

const getEmployee = async (req, res) => {
    console.log('Yes')
    try {
        const response = await getDataFromDb();
        res.status(201).send(response);
    }
    catch (err) {
        res.status(500).send(err)
    }
};
const createEmployee = async (req, res) => {
    try {
        createDocument(req.body)
        res.status(200).json({ message: 'Success' });
    }
    catch (err) {
        res.status(500).send(err)
    }
};

module.exports = { getEmployee, createEmployee }