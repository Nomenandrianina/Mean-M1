require("dotenv").config(); 
const { Router } = require("express"); // import router from express
const Reparation = require("../models/reparation"); 
const Paiement = require("../models/paiement");
const Car = require("../models/car"); 
const User = require("../models/user");
const db = require("../db/connection");


const router = Router();

router.post("/client/paiement", async (req, res) => {
    try {
        const paie = await Paiement.create({
            Car: req.body.Car,
            User: req.body.User,
            Reparation: req.body.Reparation,
            datepaie: Date.now(),
            etat: req.body.etat,
            status: req.body.status
          });
          res.status(200).json({status:200,paie});
    } catch (error) {
      res.status(400).json({ error });
    }
  });


  router.get("/client/list/paiement", async (req, res) => {
    try {
        const paie = await Paiement.find().populate(["User","Car","Reparation"]);
        res.status(200).json({status:200,paie});
    } catch (error) {
      res.status(400).json({ error });
    }
  });



  module.exports = router;