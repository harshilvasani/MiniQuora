(function(){

    "use strict";

    angular
        .module("MiniQuoraApp")
        .controller("ProfileController", ProfileController); // name of controller, function to be call

    function ProfileController(UserService, $location) {
        var vm = this; // view model object

        vm.location = $location.url();
        // alert( "In Profile Controller");

        var profileInfo = {_id: "123", name : "Harshil Vasani", profession : "Software Developer", username: "hvasani",
            email : "vasani.h@husky.neu.edu", number : "+ (617) 792-1855", questions : 10, answers : 76, votes : 47}

        function init() {
            UserService.getCurrentUser()
                .then(
                    function(doc){
                        profileInfo = doc.data
                        profileInfo.questions = 10
                        profileInfo.answers = 54
                        profileInfo.votes = 110

                        vm.currentUserInfo = doc.data;// Create object like one above
                    },
                    function(err) {
                        $location.path('/login');

                    }
                );
        }
        init();
    }
})();
