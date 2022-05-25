const Event = require('../models/eventModel');
// const Author = require('../models/authorModel');

module.exports = {
  admin: (req, res) => {
    if (request.isAuthenticated()) {
      res.render('pages/admin', {
      });
    } else {
      response.redirect('/login')
    }
  },
  admin_events: (req, res) => {
    if(request.isAuthenticated()){
      Event.find({}, (error, allEvents) => {
        if(error){
          return error;
        } else {
          response.render('pages/adminEvents', {
            // inventoryArray: allEvents
          });
        }
      })
    } else {
      res.redirect('/login')
    }
  },
  create_event: (req, res) => {
    if (req.isAuthenticated()) {
      res.render('pages/addEvent', {
      });
    } else {
      res.redirect('/login')
    }
  }
};