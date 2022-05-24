const User = requre('../models/userMode');
const siteData = requrie('../data/siteData');
const req = require('express/lib/request');
const res = require('express/lib/response');
const passport = require('passport');

module.exports = {
    home: (req, res) => {
        res.render('pages/index', {
            name: siteData.userName,
            signedIn: siteData.signedIn
        });
    },
    register_get:(req, res) => {
        res.render('pages/register', {
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
        res.render('pages/login', {
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
                    res.redirect('/admin');
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
            res.redirect('/admin');
        }
    ]
}