const mongoose = require('mongoose');

const {Schema} = mongoose;

const eventSchema = new Schema({
    busName: {
    type: String,
    required: [true, 'Your business name is required'],
    minlength: [1, 'Minimum length for the business name is 1 character.']
    },
    eventName: {
    type: String,
    required: [true, 'An event name is required.'],
    minlength: [5, 'Minimum length for the event name is 5 characters.']
    },
    eventDate: {
    type: Date,
    required: [true, 'An event date is required.']
    },
    eventTime: {
    type: String,
    required: [true, 'An event time is required.']
    },
    eventType: {
    type: String,
    required: [true, 'An event type is required.'],
    },
    aboutEvent: {
    type: String,
    required: [true, 'An event description is required.'],
    }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event