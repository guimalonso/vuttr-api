const bcrypt = require('bcryptjs');

const User = require('../models/User');

const UserController = {
  async store(req, res) {
    const { name, email, password } = req.body;

    try {
      const passwordHash = await bcrypt.hash(password, 8);

      const user = await User.create({
        name,
        email,
        password: passwordHash
      });

      return res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserController;
