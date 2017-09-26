(function(){

    "use strict";

    angular
        .module("MiniQuoraApp")
        .controller("WallController", WallController); // name of controller, function to be call

    function WallController($scope,$location) {
        alert("In Wall Controller");
    }
})();
