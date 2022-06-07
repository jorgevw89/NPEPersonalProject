// const siteData = require('../data/siteData');
// const Event = require('../models/eventModel');

// module.exports = {
//   admin: (req, res) => {
//     if (req.isAuthenticated()) {
//       response.render('pages/admin', {
//         copyrightYear: siteData.year
//       });
//     } else {
//       response.redirect('/login')
//     }
//   },
//   admin_events: (req, res) => {
//     if(request.isAuthenticated()){
//       Book.find({}, (error, allEvents) => {
//         if(error){
//           return error;
//         } else {
//           response.render('pages/admin', {
//             copyrightYear: siteData.year,
//             eventsArray: allBooks
//           });
//         }
//       })
//     } else {
//       response.redirect('/login')
//     }
//   },
//   create_event: (request, response) => {
//     if (request.isAuthenticated()) {
//       response.render('pages/bookCreate', {
//         copyrightYear: siteData.year,
//       });
//     } else {
//       response.redirect('/login')
//     }
//   },

//   author_update_get: (request, response) => {
//     if(request.isAuthenticated()){
//       const { _id } = request.params;
//       Author.findOne({_id: _id}, (error, foundAuthor) => {
//         if(error) {
//           return error;
//         } else {
//           response.render('pages/updateAuthor', {
//             copyrightYear: siteData.year,
//             foundAuthor: foundAuthor
//           });
//         }
//       });   
//     } else {
//       response.redirect('/login')
//     }
//   }
// }