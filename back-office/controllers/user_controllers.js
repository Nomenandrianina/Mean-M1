require("dotenv").config(); // load .env variables
const { Router } = require("express"); // import router from express
const User = require("../models/user");
const Role = require("../models/role"); // import user model
const bcrypt = require("bcryptjs"); // import bcrypt to hash passwords
const jwt = require("jsonwebtoken"); // import jwt to sign tokens
const db = require("../db/connection");


const router = Router();

const secret = process.env.SECRET;

// Signup route to create a new user
router.post("/signup", async (req, res) => {
    try {
      // hash the password
      req.body.password = await bcrypt.hash(req.body.password, 10);
      // create a new user
      
      const role = await Role.create({name: req.body.role});
      const user = await User.create({
        name: req.body.name,
        firstname: req.body.firstname,
        email: req.body.email,
        password: req.body.password,
        photo: req.body.photo,
        Role: role
      });
      // send new user as response
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error });
    }
  });

router.post("/login", async (req, res) => {
    try {
      // check if the user exists
      const user = await User.findOne({ email: req.body.email }).populate("Role");
      if (user) {
        //check if password matches
        const result = await bcrypt.compare(req.body.password, user.password);
        if (result) {
          // sign token and send it in response
          const token = await jwt.sign({ email: user.email }, secret);
          var status = 200;
          res.status(200).json({ status,token,user });
        } else {
          res.status(400).json({ error: "Le mot de passe ne correspond pas!" });
        }
      } else {
        res.status(400).json({ error: "L'utilisateur n'existe pas!" });
      }
    } catch (error) {
        console.log(error);
      res.status(400).json({ error });
    }
  });

module.exports = router;