const siteData = require('../data/siteData');

const Event = require('../models/eventModel');

module.exports = {
    all_events: (req, res) => {
        res.render('pages/events', {
            copyrightYear: siteData.year,
            eventArray :eventData
        });
    }
    // event_create_post: (req, res) => {
    //     console.log(req.body);
    //     const {_id = uuid(), eventName, eventDate,}
    // }
}