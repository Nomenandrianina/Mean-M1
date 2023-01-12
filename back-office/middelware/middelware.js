require("dotenv").config(); // loading env variables
const template=require("../mail/mail_template")
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "harilovajohnny@gmail.com",
    pass: "fywyivpjwawkspkj",
  },
});


const mail_user= async(req, res)=>{
  console.log("request",req.body.email);
  const message = "nouvelle inscription"
  const options = {
    from: "harilovajohnny@gmail.com", // sender address
    to: req.body.email, // receiver email
    subject: "Inscription d'un nouveau client", // Subject line
    text: "Votre inscription à notre site  est bien réussie",
    html:template(message)
  }

  try {
    const info = await transporter.sendMail(options)
  }catch (error) {
    console.log(error);
  } 
}

// MIDDLEWARE FOR AUTHORIZATION (MAKING SURE THEY ARE LOGGED IN)
const isLoggedIn = async (req, res, next) => {
  try {
    // check if auth header exists
    if (req.headers.authorization) {
      // parse token from header
      const token = req.headers.authorization.split(" ")[1]; //split the header and get the token
      if (token) {
        const payload = await jwt.verify(token, process.env.SECRET);
        if (payload) {
          // store user data in request object
          req.user = payload;
          next();
        } else {
          res.status(400).json({ error: "token verification failed" });
        }
      } else {
        res.status(400).json({ error: "malformed auth header" });
      }
    } else {
      res.status(400).json({ error: "No authorization header" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};





// export custom middleware
module.exports = {
  isLoggedIn,mail_user
};