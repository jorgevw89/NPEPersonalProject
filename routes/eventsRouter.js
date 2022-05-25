const express = require('express');
const eventsCtrl = require('../controllers/eventsCtrl');
const router = express.Router();

router.route('/')
.get(eventsCtrl.all_events)
// .post(eventsCtrl.event_create_post)

// router.route('/:_id')
// .get(eventsCtrl.event_detail)
// .put(eventsCtrl.event_update_put)
// .delete(eventsCtrl.event_delete)

module.exports = router;