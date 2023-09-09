const mongoose = require('mongoose');

const carSchema = mongoose.Schema(
  {   brand : String,
      model : String,
      carId : Number,
      price : Number,
      status : String          
}
);

let cars = mongoose.model('Cars', carSchema)
let purchase = mongoose.model('Purchase', carSchema)

module.exports = {
    cars : cars,
    purchase : purchase
}