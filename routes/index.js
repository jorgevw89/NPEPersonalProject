const express = require('express');
const siteRouter = require('./siteRouter');
const eventsRouter = require('./eventsRouter');
const router = express.Router();

router.use('/', siteRouter);
router.use('/events', eventsRouter);


module.exports = router;