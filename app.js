const express = require('express')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/employee', require('./src/routes/index'));

app.listen(3000, () => {
    console.log(`Server running in port 3000`)
});

function logger(req, res, next) {
    console.log('logging it')
    next()
}