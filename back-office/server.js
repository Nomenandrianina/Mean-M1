const express = require("express");
require('dotenv').config();
const roleroutes = require('./controllers/role_controllers');
const userroutes = require('./controllers/user_controllers');
const carroutes = require('./controllers/car_controllers');


const cors = require('cors');
var corsOptions = {
    origin: "http://localhost:4200"
};
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 8000;


app.use(cors(corsOptions)); 
app.use(bodyParser.json({limit: '50mb'})); 
app.use(bodyParser.urlencoded({
    limit: '50mb',    
    extended: true
}));
app.use(roleroutes); 
app.use(userroutes); 
app.use(carroutes);
app.listen(port, () => console.log('Server app listening on port ' + port));