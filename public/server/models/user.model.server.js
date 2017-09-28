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

module.exports = function(app) {

    var users = [
        {_id: "123", username: "alice", password: "alice123", name: "Alice Wonder",  profession: "Software Developer",
            number:"+6177921855", email : "alice@mq.come"  },
        {_id: "234", username: "bob12", password: "bob12345",      name: "Bob Marley", profession : ".Net Developer" ,
            number:"+6177921856", email : "bob@mq.come" },
        {_id: "345", username: "charly", password: "charly12",   name: "Charly Garcia", profession: "Web developer" ,
            number:"+6177921857", email : "charly@mq.come"  },
        {_id: "456", username: "hvasani", password: "qwertyuiop", name: "Harshil Vaani",   profession: "Software Developer",
            number:"+6177921858", email : "hvasani@mq.come"  }
    ]
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
        
    }

    function findUserByIdServer() {

    }

    function createUserServer() {

    }

    function deleteUserServer() {

    }

    function updateUserServer() {

    }

    function findUserByCredentialsServer() {

    }

    function findUserByUsernameServer() {

    }
}