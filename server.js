var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer());

app.use(express.static(__dirname + '/public/client'));// configuring express to host static content present in public directory

require('public/server/app.js')(app)
var port = process.env.PORT || 3000;
app.listen(port);