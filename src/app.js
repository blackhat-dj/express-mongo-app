const express = require('express');
 const app = express();


 app.use(express.json());
 app.use(express.urlencoded({extended:false}));
  
 app.use('/api/cars',require ('./routes/index.js'))

 app.listen(3000, ()=>  {
    console.log('server is running')
 });