(function(){

    "use strict";

    angular
        .module("MiniQuoraApp")
        .controller("ProfileController", ProfileController); // name of controller, function to be call

    function ProfileController(UserService, $location) {
        var vm = this; // view model object

        vm.location = $location.url();
        alert( "In Profile Controller");

        var profileInfo = {_id: "123", name : "Harshil Vasani", profession : "Software Developer", username: "hvasani",
            email : "vasani.h@husky.neu.edu", number : "+ (617) 792-1855", questions : 10, answers : 76, votes : 47}

        function init() {
            vm.currentUserInfo = profileInfo;
        }
        init();
    }
})();
