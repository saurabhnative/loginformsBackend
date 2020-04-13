var express = require("express");
var login = require('./routes/loginroutes');
var bodyParser = require('body-parser');

// body parser added
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allow cross origin requests
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var router = express.Router();

// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});

//route to handle user registration
// router.post('/register',loginRoutes.register);
// router.post('/login',loginRoutes.login);

app.use('/api', router);
app.listen(4000);