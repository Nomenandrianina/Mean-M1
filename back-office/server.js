const express = require("express");
require('dotenv').config();
const roleroutes = require('./controllers/role_controllers');
const userroutes = require('./controllers/user_controllers');


const cors = require('cors');
var corsOptions = {
    origin: "http://localhost:4200"
};
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 8000;


app.use(cors(corsOptions)); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
        extended: true
    }));
app.use(roleroutes); 
app.use(userroutes); 
app.listen(port, () => console.log('Server app listening on port ' + port));