const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

  passwordHash: String
});

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 8);
  next();
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
