const { ObjectId } = require('bson');
const { cars, purchases } = require('../model/data.model');
const Cars = require('../model/data.model').cars;
const Purchase = require('../model/data.model').purchases;

                                //Creating A Collection
exports.create = (req, res) => {
    if(!req.body.carId) {
        res.status(400).send({message : "Database cannot be empty"});
        return;
    }
    const cars = new Cars({
        _id: req.body.id,
        brand : req.body.brand,
        model : req.body.model,
        carId : req.body.carId,
        price : req.body.price,
        status : req.body.status    
    });
    cars.save()
        .then (data => {res.send("Succesfully Created")})
        .catch (err => { res.staus(500).send({err : error.message})
    });
};

                            //Getting All Data
exports.get = (req, res) => {
    Cars.find()
        .then (cars => {
            res.send(cars);
        })
        .catch (err => {
            res.status(500).send({
                message : err.message  });
        });
    }

                            //Updating Car Collection & Inserting Data in Purchase 
exports.findOne = async (req, res) => {
    if(req.body. brand != null && req.body.model != null && req.body.carId != null) {
         
        const x = Math.floor(10000 +  Math.random()*99999  );
        console.log("Order Id : ", x);

        const date =  new Date().toLocaleDateString();
        console.log("Date : " , date);

     await Cars.findOneAndUpdate({carId : req.body.carId, status : "AVAILABLE"}, {status: "SOLD"} , {new : true})
            .then(result => {
             res.status(201)
         }) .catch (error => {
             console.log(error);
         }) 

         

         const document = {orderId : x, 
             brand : req.body.brand,
            model : req.body.model,
            carId : req.body.carId,
            price : await Cars.findOne({carId : req.body.carId}).get({price : Cars.price}),
            Date : date
}
        await Purchase.collection.insertOne(document,(err, records) => {
            console.log(records);
        })
         
             res.json({message : "Thanks for purchasing " + req.body.brand});    
         
    } else { res.status(500).send({message : "Insufficient data.Please verify it..!"})}
}  

                                //Updated Car Collection

exports.updatedData = async(req,res) => { 
    await Cars.find({status : "SOLD"})
    .then (cars => {
        res.send(cars);
         })
     .catch (err => {
        res.status(404).send({
        message : err.message  });
     });
};

                                    // Updated Purchase Collection
exports.purchaseData = (req,res) => { 
    Purchase.find()
    .then (purchase => {
       res.send(purchase);
        })
    .catch (err => {
       res.status(404).send({
       message : err.message  });
    });
};
    








        
    






