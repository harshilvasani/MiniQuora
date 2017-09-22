(function(){
    "use strict";

    angular
        .module("MiniQuoraApp")
        .config(Configure);

    function Configure($routeProvider) {
        $routeProvider

            .when("/login", {
                templateUrl: "views/user/login.view.html",
                controller : "LoginController",
            })

            .when("/register", {
                templateUrl: "views/user/register.view.html",
                controller : "RegisterController",
            })

            .when("/:questionId/details", {
                templateUrl: "views/qna/detail.view.html",
                controller : "DetailController",
            })

            .otherwise({
                redirectTo: "/register"
            });
    }
})();