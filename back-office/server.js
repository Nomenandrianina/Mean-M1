const express = require("express");
require('dotenv').config();
const roleroutes = require('./controllers/role_controllers');
const userroutes = require('./controllers/user_controllers');
const carroutes = require('./controllers/car_controllers');
const reparationroutes = require('./controllers/reparation_controllers');
const paiementroutes = require('./controllers/paiement_controller');
const pieceroutes = require('./controllers/piece_controller');

const cors = require('cors');
var corsOptions = {
    origin: "https://main--peaceful-sherbet-6aeab3.netlify.app/"
};
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 8000;
var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain);
app.use(cors({origin: "*"})); 
app.use(bodyParser.json({limit: '50mb'})); 
app.use(bodyParser.urlencoded({
    limit: '50mb',    
    extended: true
}));
app.use(roleroutes); 
app.use(userroutes); 
app.use(carroutes);
app.use(reparationroutes);
app.use(paiementroutes);
app.use(pieceroutes);
app.listen(port, () => console.log('Server app listening on port ' + port));