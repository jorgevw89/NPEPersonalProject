const express = require('express');
const eventsCtrl = require('../controllers/eventsCtrl');
const router = express.Router();

router.route('/')
.get(eventsCtrl.all_events)
.post(eventsCtrl.event_create_post)