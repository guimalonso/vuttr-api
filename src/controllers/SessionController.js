const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const authConfig = require('../config/auth');
const User = require('../models/User');

const SessionController = {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await (bcrypt.compare(password, user.password)))) {
      return res.status(400).json({ error: 'Invalid e-mail and/or password.' });
    }

    const { _id, name } = user;

    return res.json({
      user: {
        _id,
        name,
        email,
      },
      token: jwt.sign({ _id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
};

module.exports = SessionController;
