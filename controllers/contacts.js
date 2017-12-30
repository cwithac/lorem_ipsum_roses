const express = require('express');
const contacts = express.Router();

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

module.exports = contacts;
