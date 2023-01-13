require("dotenv").config(); // load .env variables
const { Router } = require("express"); // import router from express
const Car = require("../models/car"); 
const db = require("../db/connection");

const router = Router();

router.post("/create_car", async (req, res) => {
    try {
      // create a new role
      const car = await Car.create({
        image: res.body.image,
        marque: res.body.marque,
        type: res.body.type,
        moteur: res.body.moteur,
        immatriculation: res.body.immatriculation,
        User: res.body.User
      });
      // send new user as response
      res.status(200).json({status:200,car});
    } catch (error) {
      res.status(400).json({ error });
    }
  });

  router.get("/all_car", async (req, res) => {
    try {
        const car = await Car.findOne().populate("User");
        res.status(200).json({ status:200,car });
    } catch (error) {
        res.status(400).json({ error });
    }
  });

  module.exports = router;