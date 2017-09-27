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
                controllerAs: "loginModel"// global model variable name which can be used
                                     // to access ng-model declared in view
            })

            .when("/register", {
                templateUrl: "views/user/register.view.html",
                controller : "RegisterController",
                controllerAs: "registerModel"
            })

            .when("/wall", {
                templateUrl: "views/qna/wall.view.html",
                controller : "WallController",
                controllerAs: "wallModel"
            })

            .when("/:questionId/details", {
                templateUrl: "views/qna/detail.view.html",
                controller : "DetailController",
                controllerAs: "detailModel"
            })

            .when("/profile", {
                templateUrl: "views/user/profile.view.html",
                controller : "ProfileController",
                controllerAs: "profileModel"
            })

            .otherwise({
                redirectTo: "/wall"
            });
    }
})();