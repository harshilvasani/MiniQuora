var express = require('express');
var app = express();

require("./public/client/app.js")(app);
app.listen(3000);