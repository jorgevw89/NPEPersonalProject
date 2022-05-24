const siteData = require('../data/siteData');
const Book = require('../models/bookModel');
const Author = require('../models/authorModel');

module.exports = {
  admin: (request, response) => {
    if (request.isAuthenticated()) {
      response.render('pages/admin', {
        copyrightYear: siteData.year
      });
    } else {
      response.redirect('/login')
    }
  },
  admin_events: (request, response) => {
    if(request.isAuthenticated()){
      Event.find({}, (error, allEvents) => {
        if(error){
          return error;
        } else {
          response.render('pages/adminEvents', {
            copyrightYear: siteData.year,
            inventoryArray: allBooks
          });
        }
      })
    } else {
      response.redirect('/login')
    }
  },
  create_event: (request, response) => {
    if (request.isAuthenticated()) {
      response.render('pages/addEvent', {
        copyrightYear: siteData.year,
      });
    } else {
      response.redirect('/login')
    }
  }
};