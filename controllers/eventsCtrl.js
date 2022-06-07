const { response } = require('express');
const Event = require('../models/eventModel');
const moment = require('moment');

module.exports = {
    all_events: (req, res) => {
        Event.find({}, (error, allEvents) => {
            if(error){
                return error;
            } else {
                res.render('pages/events', {
                    eventArray: allEvents,
                    moment: moment
                });
            }
        });
    },
    
    make_event: (req, res) => {
        if (req.isAuthenticated()) {
            res.render('pages/addEvent') 
        } else {
            res.redirect('/login');
        } 
    },
    event_create_post: (req, res) => {
        const {busName, eventName, eventDate, eventTime, eventType, aboutEvent} = req.body;
        const newEvent = new Event ({
           busName: busName,
           eventName: eventName,
           eventDate: eventDate,
           eventTime: eventTime,
           eventType: eventType,
           aboutEvent: aboutEvent 
        });

        newEvent.save();

        res.redirect('/');
    }
}