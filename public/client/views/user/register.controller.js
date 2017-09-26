(function(){

    "use strict";

    angular
        .module("MiniQuoraApp")
        .controller("RegisterController", RegisterController); // name of controller, function to be call

    function RegisterController($location) {

        var vm = this
        vm.location = $location.url();
        alert( "In Register Controller");

        vm.register = myMyregister
        function myMyregister(newuser) {
            alert(newuser.username + ' ' + newuser.password + ' ' + newuser.email)
        }
    }
})();
