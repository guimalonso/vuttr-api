const mongoose = require('mongoose');

const db = process.env.MONGODB_URI || 'mongodb://db:27017/vuttr';

// Database connection
mongoose.connect(db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
);