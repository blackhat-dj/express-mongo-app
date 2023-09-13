const express = require('express');

const dotenv = require('dotenv')

dotenv.config();

const connectDB = require('../src/config/db_config');

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

require('../src/routes/index')(app);

const PORT = process.env.PORT || 3000;
    app.listen(3000, () => {
        console.log(`Server is running on port ${PORT}`);
    });
