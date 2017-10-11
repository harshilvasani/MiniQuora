(function(){

    "use strict";

    angular
        .module("MiniQuoraApp")
        .controller("RegisterController", RegisterController); // name of controller, function to be call

    function RegisterController(UserService, $location, $scope) {

        var vm = this
        vm.location = $location.url();
        alert( "In Register Controller");

        vm.register = myMyregister
        function myMyregister(newuser) {
            alert(newuser.username + ' ' + newuser.password + ' ' + newuser.email)
            UserService
                .register(newuser)
                .then(
                        function (doc) {
                            if(doc.body){
                                UserService.setCurrentUser(newuser);
                                $location.path('/profile');
                            }
                            else{
                                UserService.setCurrentUser(null);
                                vm.newuser = null;
                                $scope.pwd2 = null;
                                alert("User alrerady registered");
                            }
                        },
                    function (err) {
                        UserService.setCurrentUser(null);
                        vm.newuser = null;
                        $scope.pwd2 = null;
                        alert(err.data);
                    }
                )
        }
    }
})();
