require('dotenv').config()

var express = require("express");
var loginroutes = require('./routes/loginroutes');
var bodyParser = require('body-parser');
let cors = require('cors')
// body parser added
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allow cross origin requests
app.use(cors())

var router = express.Router();

// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});

//route to handle user registration
router.post('/register',loginroutes.register);
router.post('/login',loginroutes.login);

app.use('/api', router);
app.listen(4000);