require("dotenv").config(); // load .env variables
const { Router } = require("express"); // import router from express
const Reparation = require("../models/reparation"); 
const Car = require("../models/car"); 
const db = require("../db/connection");


const router = Router();

router.post("/add_reparation", async (req, res) => {
    try {
        const reparation = [];
        const body = req.body.reparation;
        const datenow = Date.now();
        const today = new Date(datenow);
            for(var i=0;i<body.length;i++){
                data = 
                    {
                        "type": body[i].type,
                        "date_debut": datenow,
                        "date_fin": null,
                        "description": body[i].description,
                        "avancement": 0,
                        "cout": body[i].cout,
                        "status": 'En cours',
                        "Car": req.body.Car
                    };
                    reparation.push(data);
            }
        const rep = await Reparation.create(reparation);
        if(rep){
            const car = await Car.findByIdAndUpdate(req.body.Car,  { $set:{status: '1'} });
        }
        res.status(200).json({status:200,rep});
    } catch (error) {
      res.status(400).json({ error });
    }
  });


  router.get("/all_reparation", async (req, res) => {
    try {
        const reparation = await Reparation.find().populate("Car");
        console.log(reparation);
        res.status(200).json({ status:200,reparation });
    } catch (error) {
        res.status(400).json({ error });
    }
  });

  router.post("/reparation/id", async (req, res) =>{
    try {
      const reparation = await Reparation.findById(req.body.id).populate("Car");
      res.status(200).json({ status:200,reparation });
    } catch (error) {
      res.status(400).json({ error });
    }
  });

  module.exports = router;