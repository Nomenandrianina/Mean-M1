require("dotenv").config(); 
const { Router } = require("express"); // import router from express
const Reparation = require("../models/reparation"); 
const Paiement = require("../models/paiement");
const Car = require("../models/car"); 
const User = require("../models/user");
const Piece = require("../models/piece");
const db = require("../db/connection");
const { populate } = require("../models/reparation");


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


  router.post("/client/list/paiement", async (req, res) => {
    try {
        const paie = await Paiement.find({User: req.body.id}).populate(["User","Car"]);
        var reparation = [];
        for(var i=0;i<paie.length;i++){
          for(var j=0; j<paie[i].Reparation.length;j++){
            reparation.push(await Reparation.findById(paie[i].Reparation[j]).populate(["Piece","Car"]));
          }
        }
        res.status(200).json({status:200,paie,reparation});
    } catch (error) {
      res.status(400).json({ error });
    }
  });

  router.get("/financier/list/paiement", async (req, res) => {
    try {
        const paie = await Paiement.find().populate(["User","Car"]);
        var reparation = [];
        for(var i=0;i<paie.length;i++){
          for(var j=0; j<paie[i].Reparation.length;j++){
            reparation.push(await Reparation.findById(paie[i].Reparation[j]).populate(["Piece","Car"]));
          }
        }
        res.status(200).json({status:200,paie,reparation});
    } catch (error) {
      res.status(400).json({ error });
    }
  });

  router.post("/financier/valide/paiement", async (req, res) => {
    try {
      const car = await Car.findByIdAndUpdate(req.body.idcar,  { $set:{etat: '2'} });
      const paie = await Paiement.findOneAndUpdate({Car: req.body.idcar},{ $set: {etat: 'paid', status: 'Paiement validé'} });
      console.log(paie);
      res.status(200).json({status:200,paie,car});
    } catch (error) {
      res.status(400).json({ error });
    }
  });





  module.exports = router;