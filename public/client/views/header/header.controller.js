(function(){

    "use strict";

    angular
        .module("MiniQuoraApp")
        .controller("HeaderController", HeaderController); // name of controller, function to be call

    function HeaderController(UserService, $location) {
        var vm = this; // view model object

        vm.logout = myLogout

        function myLogout() {

            UserService
                .logout()
                .then(
                    function(doc){
                        UserService.setCurrentUser(null);
                        $location.path('/wall');

                    },
                    function(err) {
                        UserService.setCurrentUser(null);
                        $location.path('/wall');
                    }
                );


        }
    }
})();
