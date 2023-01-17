require("dotenv").config(); // load .env variables
const { Router } = require("express"); // import router from express
const Car = require("../models/car"); 
const db = require("../db/connection");
const { isObjectIdOrHexString } = require("mongoose");

const router = Router();

router.post("/create_car", async (req, res) => {
    try {

      const car = await Car.create({
        image: req.body.image,
        marque: req.body.marque,
        type: req.body.type,
        moteur: req.body.moteur,
        immatriculation: req.body.immatricule,
        etat: '0',
        status: '0',
        User: req.body.User
      });
      // send new user as response
      res.status(200).json({status:200,car});
    } catch (error) {
      res.status(400).json({ error });
    }
  });

  router.get("/all_car", async (req, res) => {
    try {
        const car = await Car.find().populate("User");
        res.status(200).json({ status:200,car });
    } catch (error) {
        res.status(400).json({ error });
    }
  });

  router.post("/valide_car", async (req, res) =>{
    try {
      const car = await Car.findByIdAndUpdate(req.body.id,  { $set:{etat: '1'} });
      res.status(200).json({ status:200,car });
    } catch (error) {
      res.status(400).json({ error });
    }
  });

  module.exports = router;