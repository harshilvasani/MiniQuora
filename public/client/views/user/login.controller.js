(function(){

    "use strict";

    angular
        .module("MiniQuoraApp")
        .controller("LoginController", LoginController); // name of controller, function to be call

    function LoginController($scope, $location) {
        var vm = this; // view model object

        vm.location = $location.url();
        alert( "In Login Controller");

        vm.login = myLogin
        function myLogin(user) {
            alert(user.username + ' ' + user.password)
        }
    }
})();
