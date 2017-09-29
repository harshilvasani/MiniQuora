module.exports = function(app, userModel){

    var passport      = require('passport');
    var LocalStrategy = require('passport-local').Strategy;
    passport.use('mini-quora',new LocalStrategy(localStrategy));
    var auth = authorized;

    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);


    app.post  ('/api/login', passport.authenticate('mini-quora'), login);
    app.post  ('/api/logout',         logout);
    app.post  ('/api/register',       register);
    app.get   ('/api/loggedin',       loggedin);

    function authorized (req, res, next) {
        if (!req.isAuthenticated()) {
            res.send(401);
        } else {
            next();
        }
    };

    // Configure local strategy to handle simple username/password authentication. Use the credentials to lookup the user
    // from the database. If the user exists, then return done(null, user) where user is the user found in the database
    // and null is the error.
    function localStrategy(username, password, done) {
        userModel
            .findUserByCredentials_Server({username: username, password: password})
            .then(
                function(user) {
                    console.log("in localStrategy line 32");
                    console.log(user);
                    if (!user) {
                        return done(null, false);
                    }
                    return done(null, user);
                },
                function(err) {
                    console.log("in localStrategy line 38");
                    console.log(err);
                    if (err) { return done(err); }
                }
            );
    }

    // Configure serialization and desirialization to set and retrieve the user identity from the session cookie.
    // The cookie keeps the identity in the client browser which provides the cookie in every request.
    // The cookie is encrypted to avoid tampering on the client side.
    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        console.log("in deserializeUser")
        userModel
            .findUserById_Server(user._id)
            .then(
                function(user){
                    done(null, user);
                },
                function(err){
                    done(err, null);
                }
            );
    }

    // Passport adds the currently logged in user to the request req.user. The user is retrieved using the deserializeUser()
    // function. Passport also adds functions req.isAuthenticated() and req.logOut() to check if the current user has
    // been already authenticated and to logout the current user. Logging out invalidates the session cookie.
    function login(req, res) {
        console.log("in login");
        console.log(req.user);
        console.log();

        var user = req.user;
        res.json(user);
    }

    function logout(req, res) {
        req.logOut();
        res.send(200);
    }

    function loggedin(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    function register(req, res) {
        var newUser = req.body;
        // newUser.roles = ['student'];

        userModel
            .findUserByUsername_Server(newUser.username)
            .then(
                function(user){
                    if(user) {
                        res.json(null);
                    } else {
                        // newUser.password = bcrypt.hashSync(newUser.password)
                        return userModel.createUser_Server(newUser);
                    }
                },
                function(err){
                    res.status(400).send(err);
                }
            )
            .then(
                function(user){
                    if(user){
                        req.login(user, function(err) {
                            if(err) {
                                res.status(400).send(err);
                            } else {
                                res.json(user);
                            }
                        });
                    }
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }
}