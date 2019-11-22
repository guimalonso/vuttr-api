const mongoose = require('mongoose');

const database = mongoose.createConnection(process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
);

module.exports = database;