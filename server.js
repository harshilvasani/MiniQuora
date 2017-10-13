var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
// var upload = multer(); // for parsing multipart/form-data
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(multer());

app.use(express.static(__dirname + '/public/client'));// configuring express to host static content present in public directory

var passport      = require('passport');
var cookieParser  = require('cookie-parser');
var session       = require('express-session');

app.use(session({
    secret: 'this is the secret',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

require('./public/server/app.js')(app)
var port = process.env.PORT || 3050;
app.listen(port);