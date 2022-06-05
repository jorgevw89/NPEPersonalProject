const express = require('express');
const siteRouter = require('./siteRouter');
const eventsRouter = require('./eventsRouter');
// const adminRouter = require('./adminRouter');
const router = express.Router();

router.use('/', siteRouter);
router.use('/events', eventsRouter);
// router.use('/admin', adminRouter);

module.exports = router;