(function(){

    "use strict";

    angular
        .module("MiniQuoraApp")
        .controller("RegisterController", RegisterController); // name of controller, function to be call

    function RegisterController($scope,$location) {

        $scope.location = $location.url();
        alert( "In Register Controller");

        $scope.register = myMyregister
        function myMyregister(newuser) {
            alert(newuser.username + ' ' + newuser.password + ' ' + newuser.email)
        }
    }
})();
