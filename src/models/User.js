const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please insert a name.',
  },

  email: {
    type: String,
    trim: true,
    unique: true,
    required: 'Please insert an e-mail.',
  },

  password: {
    type: String,
    trim: true,
    required: 'Please insert a password.'
  },
});

module.exports = mongoose.model('User', userSchema);
