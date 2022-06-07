const express = require('express');
const router = express.Router();
const siteCtrl = require('../controllers/siteCtrl');

router.route('/')
.get(siteCtrl.index);

router.route('/register')
.get(siteCtrl.register_get)
.post(siteCtrl.register_post)

router.route('/login')
.get(siteCtrl.login_get)
.post(siteCtrl.login_post)

router.route('/logout')
.get(siteCtrl.logout)

router.route('/auth/google')
.get(siteCtrl.google_get)
.get(siteCtrl.google_redirect_get)

// router.route('/auth/google/admin')
// .get(siteCtrl.google_redirect_get)

module.exports = router;