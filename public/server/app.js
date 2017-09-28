module.exports = function (app) {
    var userModel = require("./models/user.model.server.js")(app);
    require("./services/user.service.server")(app, userModel);
}