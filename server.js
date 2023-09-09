const express = require('express');

const dotenv = require('dotenv')

dotenv.config({path:__dirname+'/.env'});

const connectDB = require('./source/config/db.config');

connectDB({
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended : false }));

app.get('/', (req,res) => {
    res.json({message : "Welcome To My Application"})
});

require('./source/routes/index.js')(app);

const PORT = process.env.PORT || 3000;
    app.listen(3000, () => {
        console.log(`Server is running on port ${PORT}`);
    });