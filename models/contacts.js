const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true },
  zipCode: { type: String, require: true },
  state: { type: String, require: true, default: 'None Selected' }
});

module.exports = mongoose.model('Contact', contactSchema);
