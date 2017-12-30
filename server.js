const express = require('express');
const app = express();
const mongoose = require('mongoose');


const PORT    = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));

const contactsController = require('./controllers/contacts.js');
app.use('/contacts', contactsController);

const mongoURI  = process.env.MONGODB_URI || 'mongodb://localhost/octagon';
mongoose.connect(mongoURI, { useMongoClient: true});
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', (err) => console.log(err.message));
db.on('connected', () => console.log('Mongo running: ', mongoURI));

app.listen(PORT, () => {
	console.log('listening on ' + PORT);
});
