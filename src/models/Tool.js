const mongoose = require('mongoose');

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

  tags: [String],
});

module.exports = mongoose.model('Tool', toolSchema);
