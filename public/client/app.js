// The app.js file must to be loaded and initialized from the server.js file.
// Towards the bottom of the server.js file require the app.js file
// and pass it the app express instance object

(function () {
    "use strict"; //With strict mode, you can not, for example, use undeclared variables.

    angular
        .module('MiniQuoraApp', ["ngRoute"])// first argument is a string denoting the name of the application
                                   // second argument is an array of other modules the application depends on

})();