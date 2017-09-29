(function(){

    "use strict";

    angular
        .module("MiniQuoraApp")
        .controller("LoginController", LoginController); // name of controller, function to be call

    function LoginController(UserService, $location) {
        var vm = this; // view model object

        vm.location = $location.url();
        alert( "In Login Controller");

        vm.login = myLogin

        function myLogin(credentials) {

            alert(credentials.username + ' ' + credentials.password);

            UserService
                .findUserByCredentials(credentials)
                .then(
                        function(doc){
                            UserService.setCurrentUser(doc.data);
                            $location.path('/profile');

                        },
                    function(err) {
                        vm.user.password = null;
                        alert("Check your password OR username ... ");
                    }
                );
            //alert(user.username + ' ' + user.password);

            // if(user != null){
            //
            //     UserService.setCurrentUser(user);
            //     $location.path('/profile');
            // }
            //
            // else {
            //     vm.loginModel.password = null;
            //     alert("Check your password OR username");
            // }

        }
    }
})();
