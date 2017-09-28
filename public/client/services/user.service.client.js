(function () {

    "use strict";

    angular
        .module("MiniQuoraApp")
        .factory("UserService",UserService);

    function UserService($rootScope,$http) {


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
            // return $http.post("/api/assignment/logout");
            setCurrentUser(null);
        }


        function setCurrentUser (user) {
            $rootScope.currentUser = user;
        }

        function getCurrentUser () {
             return $rootScope.currentUser;
            // var curUser = $http.get("/api/assignment/loggedin");
            // return curUser;
        }

        function findUserByCredentials(credentials) {
            for (var i in users){
                if(users[i].username == credentials.username && users[i].password == credentials.password){
                    return users[i];
                }
            }
            return null;
            // return $http.post("/api/assignment/login?username=" + credentials.username + "&password=" + credentials.password);
        }

        function findUserById(userId){
            for (var i in users){
                if(users[i]._id == userId){
                    return users[i];
                }
            }
            return null;
            // return $http.get("/api/assignment/admin/user/" + userId);
        }

        function findAllUsers() {
            return users;
            // return $http.get("/api/assignment/admin/user");
        }


        function register(user) {
            users.add(newuser);
            // return $http.post("/api/assignment/register", user);
        }

        function deleteUserById(userId) {
            users.remove(userId);
            // return $http.delete("/api/assignment/admin/user/" + userId);
        }

        function updateUser(userId,user) {
            users.set(userId, user);
            // return $http.put("/api/assignment/user/" + userId, user);
        }
    }
})();