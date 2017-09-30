(function () {

    "use strict";

    angular
        .module("MiniQuoraApp")
        .factory("UserService",UserService);

    function UserService($rootScope,$http) {//root scope is global scope


        var api = {
            findUserByCredentials : findUserByCredentials,
            findUserById : findUserById,
            findAllUsers : findAllUsers,
            register : register,
            deleteUserById : deleteUserById,
            updateUser : updateUser,
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser,
            logout: logout
        }

        return api;

        function logout() {
            return $http.post("/api/logout");
            // setCurrentUser(null);
        }

        function setCurrentUser (user) {
            $rootScope.currentUser = user;
        }

        function getCurrentUser () {
            // return $rootScope.currentUser;
            var curUser = $http.get("/api/loggedin");
            return curUser;
        }

        function findUserByCredentials(credentials) {
            var res = $http.post("/api/login?username=" + credentials.username + "&password=" + credentials.password);
            return res;
        }

        function findUserById(userId){
            return $http.get("/api/admin/user/" + userId);
        }

        function findAllUsers() {
            return users;
            // return $http.get("/api/admin/user");
        }


        function register(user) {
            // users.add(newuser);
            return $http.post("/api/register", user);
        }

        function deleteUserById(userId) {
            // users.remove(userId);
            return $http.delete("/api/admin/user/" + userId);
        }

        function updateUser(userId,user) {
            // users.set(userId, user);
            return $http.put("/api/user/" + userId, user);
        }
    }
})();