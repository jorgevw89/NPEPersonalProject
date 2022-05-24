const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminCtrl');

router.route('/')
.get(adminCtrl.admin)

router.route('/create-event')
.get(adminCtrl.create_event);

router.route('/:_id/edit-event')
.get(adminCtrl.event_update_get);

module.exports = router;