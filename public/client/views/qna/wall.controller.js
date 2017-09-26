(function(){

    "use strict";

    angular
        .module("MiniQuoraApp")
        .controller("WallController", WallController); // name of controller, function to be call

    function WallController($location) {
        var vm = this;
        alert("In Wall Controller");
    }
})();
