(function(){

    "use strict";

    angular
        .module("MiniQuoraApp")
        .controller("LoginController", LoginController); // name of controller, function to be call

    function LoginController(UserService, $location, $scope) {
        var vm = this; // view model object
        vm.location = $location.url();

        vm.login = myLogin
        vm.emailPassword = myEmailPassword
        vm.usernameExist = myUsernameExist
        vm.clearForm = myClearForm


        function myClearForm(myForm, myData) {
            // console.log(myForm);
            myForm.$setPristine();
            // alert(myForm.email.$viewValue);
            // myForm.username.$$rawModelValue = '';
            // myForm.username.$viewValue = '';

            // console.log(myData);
            vm.sendEmailData = null;
        }

        function myLogin(credentials) {

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

        }
        
        function myEmailPassword(sendEmailData) {
            console.log(sendEmailData);

            UserService
                .findUserByUsername(sendEmailData.username)
                .then(
                    function(doc){
                        var user = doc.data;
                        if(user.email == sendEmailData.email){
                            UserService
                                .sendPassword(user)
                                .then(
                                    function(doc){
                                        alert("Please check email for your password");
                                    },
                                    function(err) {
                                        vm.user.password = null;
                                        alert("Retry sending email.");
                                    }
                                );
                        }
                        else{
                            alert("could not match email");
                        }

                    },
                    function(err) {
                        vm.user.password = null;
                        vm.errorMsg = username + " does not exist";
                        return false;

                    }
                );
        }

        function myUsernameExist(username) {
            if(username.length < 5){
                vm.user.password = null;
                vm.errorMsg = username + " does not exist";
                return false;
            }


        }
    }
})();
