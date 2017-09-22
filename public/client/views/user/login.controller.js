(function(){

    "use strict";

    angular
        .module("MiniQuoraApp")
        .controller("LoginController", LoginController); // name of controller, function to be call

    function LoginController($scope,$location) {

        $scope.location = $location.url();
        alert( "In Login Controller");

        $scope.login = myLogin
        function myLogin(username, password) {
            alert(username + ' ' + password)
        }
    }
})();
