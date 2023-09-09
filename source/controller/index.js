const { ObjectId } = require('bson');
const { purchase, cars } = require('../model/data.model');
const Cars = require('../model/data.model').cars;
const Purchase = require('../model/data.model').purchase;

                                //Creating A Collection
exports.create = (req, res) => {
    if(!req.body.carId) {
        res.status(400).send({message : "Database cannot be empty"});
        return;
    }
    const cars = new Cars({
        id: req.params.id,
        brand : req.body.brand,
        model : req.body.model,
        carId : req.body.carId,
        price : req.params.price,
        status : req.body.status    
    });
    cars.save()
        .then (data => {res.send(data)})
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

                            //Finding a Particular value by ID
exports.findOne = (req, res) => {
        Cars.findById(req.params.carId)
        .then(cars => {
            if(!cars) {
                return res.status(404).send({message: "Car not found with id " + req.params.carId});            
            } else { 
            res.status(201).send(cars);
            }
            })
        .catch (err => {
                res.status(500).send({ message : "Error Retrieved" + req.params.carId})
        })
        }

                                //Updating Collection
exports.update = async (req, res) => {
    const id = req.params.carId;
    let updates={}
    if (!req.body.status) {
        updates["status"] = req.body.status
    }
    await Cars.findOneAndUpdate(id, {$set: req.body.cars} , {new : true},
        function (err, cars) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Cars purchased : ", cars);
            }
        });
  };

                                //Data From One Collection To Another
  exports.getData = async function (){ 
    Cars.find({}, async function(err1, userInfo){   
        if (err1) return console.log(err1) 
        for(let i in userInfo){
            try{
                let backUp = new Purchase(cars[i])
                await purchase.save(function (err2, user) {
                    if (err2) return console.error(err2)
                    console.log("collection updated")
                })
            }
            catch(err){
                console.log(err)
            }
        }
    })
};

                                //Adding Values To Updated Collection

exports.addData = (req, res) => {
    let x =Math.floor(10000 +  Math.random()*99999  );
        console.log(x);
     econsole.log({date: new Date().toISOString()});
};

                                //Updated Car Collection

exports.updatedData = (req,res) => { 
    if(req.body.status != "AVAILABLE") {
        res.send(404).send ({
            message : "Cannot find Data"
        })
    }
    Cars.find()
    .then (cars => {
        res.send(cars);
    })
    .catch (err => {
        res.status(500).send({
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
       res.status(500).send({
       message : err.message  });
    });
};
    








        
    






