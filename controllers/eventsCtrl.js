const { response } = require('express');
const Event = require('../models/eventModel');

module.exports = {
    all_events: (req, res) => {
        Event.find({}, (error, allEvents) => {
            if(error){
                return error;
            } else {
                res.render('pages/events', {
                    // eventArray: allEvents
                });
            }
        });
    },
    event_create_post: (req, res) => {
        const {eventName, eventDate, eventTime, eventType, aboutEvent} = req.body;
        const newEvent = new Event ({
            busName: busName,
           eventName: eventName,
           eventDate: eventDate,
           eventTime: eventTime,
           eventType: eventType,
           aboutEvent: aboutEvent 
        });

        newEvent.save();

        response.redirect("pages/index");
    }
}