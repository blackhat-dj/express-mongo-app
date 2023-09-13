const mongoose = require('mongoose');

const carSchema = mongoose.Schema(
  {   brand : String,
      model : String,
      carId : Number,
      price : Number,
      status : String          
}
);

const purchaseSchema = mongoose.Schema(
    {   OrderId : Number,
        ref : carSchema,
        Date : Date         
  }
  );

let cars = mongoose.model('Cars', carSchema)
let purchases = mongoose.model('Purchase', purchaseSchema)

module.exports = {
    cars : cars,
    purchases : purchases
}
