const User = require('../models/userModel');
const Event = require('../models/eventModel');
const siteData = require('../data/siteData');
const passport = require('passport');

module.exports = {
    index: (req, res) => {
        Event.find({}, (err, everyEvent) => {
            if(err) {
                return err
            } else {
                res.render('/index', {
                    name: siteData.userName,
                    signedIn: siteData.signedIn,
                    everyEvent: everyEvent
                });
            }
        })
        
    },
    register_get:(req, res) => {
        res.render('/register', {
        });
    },
    register_post:(req, res) => {
        const {username, password} = req.body;
        User.register({username: username}, password, (error, user) => {
            if(error) {
                console.log(error);
                res.redirect('/register');
            } else {
                passport.authenticate('local')(req, res, () => { 
                    res.redirect('/login');
                });
            }
        });
    },
    login_get: (req, res) => {
        res.render('/login', {
        });
    },
    login_post: (req, res) => {
        const {username, password} = req.body;
        const user = new User({
            username: username,
            password: password
        });

        req.login(user, (error) => {
            if (error) {
                console.log(error)
                res.redirect('/login');
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.redirect('/index');
                });
            }
        });
    },
    logout:(req, res) => {
        req.logout();
        res.redirect('/');
    },
    google_get: passport.authenticate('google', {scope: ['openid', 'profile', 'email']}),
    google_redirect_get: [
        passport.authenticate('google', {failureRedirect: '/login'}),
        function(req, res) {
            res.redirect('/index');
        }
    ]
}