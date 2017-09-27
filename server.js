var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public/client'));// configuring express to host static content present in public directory

// app.get('/', function (req, res) {
//     res.send('hello world')
// })

var port = process.env.PORT || 3000;
app.listen(port);