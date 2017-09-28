// The q.defer function creates an object that allows you to defer (or delay) a result until a later time.
//     In async programming you frequently have situations where you ask for a result, usually a request for datafrom the
// server, but that result won't be available until some unspecified time later. By creating a deferred object,
// you can return a promise for that object to the caller. The caller can then wait for the promise to be fulfilled, ' +
// 'either resolved or rejected, in case of an error.
//
// So:
//     Caller: Get me some data from the server.
//     Callee: Sure. Okay, I've asked for it but it'll be a little while. Here is my promise that you will get your data.
//     Caller: Thanks, I'll attach a function to that promise that will get called whenever the promise is finally fulfilled.
// And while I wait for that to happen, I can continue doing other stuff. Gotta love async!
//
var q = require("q");

module.exports = function(app) {

    // var users = [
    //     {_id: "123", username: "alice", password: "alice123", name: "Alice Wonder",  profession: "Software Developer",
    //         number:"+6177921855", email : "alice@mq.come"  },
    //     {_id: "234", username: "bob12", password: "bob12345",      name: "Bob Marley", profession : ".Net Developer" ,
    //         number:"+6177921856", email : "bob@mq.come" },
    //     {_id: "345", username: "charly", password: "charly12",   name: "Charly Garcia", profession: "Web developer" ,
    //         number:"+6177921857", email : "charly@mq.come"  },
    //     {_id: "456", username: "hvasani", password: "qwertyuiop", name: "Harshil Vaani",   profession: "Software Developer",
    //         number:"+6177921858", email : "hvasani@mq.come"  }
    // ]

    var users = require("./user.mock.json")
    var api = {
        findAllUsers_Server : findAllUsersServer,
        findUserById_Server : findUserByIdServer,
        createUser_Server : createUserServer,
        deleteUser_Server : deleteUserServer,
        updateUser_Server : updateUserServer,
        findUserByCredentials_Server : findUserByCredentialsServer,
        findUserByUsername_Server : findUserByUsernameServer
    }

    return api;
    
    function findAllUsersServer() {
        var deferred = q.defer();

        deferred.resolve(users);

        return deferred.promise;
    }

    function findUserByIdServer(userId) {
        var deferred = q.defer();

        for(var i in users){
            if(users[i]._id == userId){
                deferred.resolve(users[i]);
                return deferred.promise;
            }
        }
        deferred.resolve(null);
        return deferred.promise;
    }

    function createUserServer(newUser) {
        var deferred = q.defer();

        try {
            users.add(newUser);
            deferred.resolve(true);
        }
        catch (err){
            deferred.resolve(err);
        }

        return deferred.promise;
    }

    function deleteUserServer() {
        var deferred = q.defer();
        for(var i in users) {
            if (users[i]._id == userId) {
                users.remove(i);
                deferred.resolve(true);
            }
        }

        return deferred.promise;
    }

    function updateUserServer() {

    }

    function findUserByCredentialsServer(credential) {
        console.log("findUserByCredentialsServer - user.model.server.js")
        console.log(credential)
        console.log();

        var deferred = q.defer();

        for(var i in users){
            if(users[i].username == credential.username && users[i].password == credential.password){
                deferred.resolve(users[i]);
                return deferred.promise;
            }
        }
        deferred.resolve(null);
        return deferred.promise;
    }

    function findUserByUsernameServer() {
        var deferred = q.defer();

        for(var i in users){
            if(users[i].username == credential.username){
                deferred.resolve(users[i]);
                return deferred.promise;
            }
        }
        deferred.resolve({});
        return deferred.promise;
    }
}