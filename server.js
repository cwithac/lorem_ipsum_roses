const express = require('express');
const app = express();
const mongoose = require('mongoose');


const PORT    = process.env.PORT || 3000;
const mongoURI  = process.env.MONGODB_URI || 'mongodb://localhost/octagon';

mongoose.connect(mongoURI, {useMongoClient: true});
const db = mongoose.connection;
db.on('error', (err) => console.log('Mongo error: ', err));
db.on('connected', () => console.log('Mongo connected at: ', mongoURI));
db.on('disconnected', () => console.log('Mongo disconnected'));
mongoose.Promise = global.Promise;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));

const contactsController = require('./controllers/contacts.js');
app.use('/contacts', contactsController);

app.listen(PORT, () => {
	console.log('listening on ' + PORT);
});
