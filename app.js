const express = require('express');

const app  = express();

const PORT = 3000;

const path = require('path');

const morgan = require('morgan');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.render('pages/index', {
        name: userName,
        copyrightYear: year,
        signedIn: true,
    });
});

const Event = require('./models/eventModel');

app.get('/home', (req, res) => {
    res.render('pages/homepg-np', {
        name: userName,
        copyrightYear: year,
        signedIn: true,
        //inventoryArray: eventsInventory,
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});