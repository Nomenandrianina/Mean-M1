require("dotenv").config(); // load .env variables
const { Router } = require("express"); // import router from express
const Role = require("../models/role"); 
const db = require("../db/connection");

const router = Router();

router.post("/create_role", async (req, res) => {
    try {
      // create a new role
      const user = await Role.create(req.body);
      // send new user as response
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error });
    }
  });

  module.exports = router;