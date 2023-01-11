const express = require("express");
require('dotenv').config();
const roleroutes = require('./controllers/role_controllers');


const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 8000;


app.use(cors()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
        extended: true
    }));
app.use(roleroutes); // Requests processing will be defined in the file router
app.listen(port, () => console.log('Server app listening on port ' + port));