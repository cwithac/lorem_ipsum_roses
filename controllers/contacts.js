const express = require('express');
const contacts = express.Router();
const faker = require('faker');
const Contact = require('../models/contacts.js');

contacts.get('/administrator', async (req, res) => {
  try {
    const allContacts = await Contact.find().sort({lastName: 1});
    res.status(200).json(allContacts);
  } catch (error) {
    res.status(400).json({error: err.message});
  }
});

contacts.post('/', async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(200).json(newContact);
  } catch (error) {
    res.status(400).json({error: err.message});
  }
});

//Faker Data for Initial Seed - DISABLED for Live Site

const fakerData = [];

  for (let i = 0; i < 100; i++) {
    let fakerObject = {firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), zipCode: faker.address.zipCode(), state: faker.address.stateAbbr()};
    fakerData.push(fakerObject)
  };

contacts.get('/seedFaker', async (req, res) => {
  try {
    const fakeContacts = await Contact.create(fakerData);
    res.redirect('/contacts/administrator');
  } catch (error) {
    res.status(400).json({error: err.message});
  }
});


module.exports = contacts;
