const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');


const app = express();
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());


// INITIALIZE DB CONNECTION
const dbConnect = require('./db/mongoose-connection');
var db = dbConnect.connect();

const CatController = require('./controller/CatController');



// CAT API
app.get('/cats', CatController.list);
app.post('/cats', CatController.create);





// START SERVER LISTEN
app.listen(process.env.PORT || 8081);
