const mongoose = require('mongoose');

// Model schema definition
const toolSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    unique: true,
    required: 'Please insert a title.',
  },

  link: {
    type: String,
    trim: true,
    required: 'Please insert a link.',
  },

  description: {
    type: String,
    trim: true,
    required: 'Please insert a description.',
  },

  tags: [
    {
      type: String,
      trim: true
    }
  ],
});

module.exports = mongoose.model('Tool', toolSchema);
