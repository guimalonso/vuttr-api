const User = require('../models/User');

const UserController = {
  async store(req, res) {
    try {
      const user = await User.create(req.body);

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
